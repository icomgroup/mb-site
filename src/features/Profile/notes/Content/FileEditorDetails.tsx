import { useState } from "react";
import Actions from "@/features/Profile/notes/Content/Actions";
import FilePreview from "@/features/Profile/notes/Content/FilePreview";
import Editor from "@/features/Profile/notes/Editor";
import notesQueries from "@/API/notes/queries";
import SectionLoading from "@/components/feedback/SectionLoading";
import Error from "@/components/feedback/Error";
import useSnackbar from "@/hooks/useSnackbar";
import { queryClient } from "@/context/queryClient";
import controllers from "@/constants/controllers";
import { UpdateFilePayload } from "@/API/notes/types";
import TextualInput from "@/components/inputs/TextualInput";
import FolderSelect from "@/components/inputs/FolderSelect";
import DeleteFileButton from "@/features/Profile/notes/Content/DeleteFileButton";

const FileEditorDetails = ({ id }: { id: string }) => {
  const { data, isError, isLoading, error } =
    notesQueries.useGetNoteDetailsQuery(id ?? "");
  const [fileData, setFileData] = useState(data?.note ?? "-");
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(data?.name ?? "");
  const [folder, setFolder] = useState<string | number>(data?.folder_id ?? -1);
  const { mutate, isPending } = notesQueries.useUpdateFileMutation();
  const { errorSnackbar, successSnackbar } = useSnackbar();

  const onChange = (data: string) => setFileData(data);

  const onSave = () => {
    const body: UpdateFilePayload = {
      id: data?.id ?? -1,
      name: name,
      folder_id: folder,
      note: fileData.length === 0 ? "-" : fileData,
    };
    body;
    mutate(body, {
      onSuccess: () => {
        successSnackbar("تم تعديل الملف بنجاح");
        queryClient.invalidateQueries({
          queryKey: [controllers.NOTES, "details", id],
        });
        queryClient.invalidateQueries({
          queryKey: [controllers.FOLDERS, "all"],
        });
        setIsEditing(false);
      },
      onError: (err) => errorSnackbar(err),
    });
  };
  const onCancel = () => {
    setIsEditing(false);
    setFileData("");
    setName("");
    setFolder("");
  };
  const onEnableEditing = () => {
    setIsEditing(true);
    setName(data?.name ?? "");
    setFolder(data?.folder_id ?? "");
  };

  if (isLoading)
    return (
      <SectionLoading className="h-full d-flex text-gray justify-content-center align-items-center" />
    );
  if (isError) return <Error className="mt-5" error={error} />;
  return (
    <>
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 border-bottom">
        {!isEditing && <h2>{data?.name}</h2>}
        {isEditing && (
          <TextualInput
            className="w-fit p-1 mb-1"
            name="name"
            error={name.trim().length === 0 ? "الاسم مطلوب" : ""}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        {isEditing && (
          <FolderSelect
            onChange={(val) => setFolder(val)}
            value={`${folder}`}
          />
        )}
        <Actions
          onEnableEditing={onEnableEditing}
          isLoadind={isPending}
          isEditing={isEditing}
          onCancel={onCancel}
          onSave={onSave}
        />
      </div>
      {isEditing && (
        <Editor initialData={data?.note ?? ""} onChange={onChange} />
      )}
      {!isEditing && <FilePreview data={data?.note ?? ""} />}
      {<DeleteFileButton id={data?.id ?? -1} name={data?.name ?? ""} />}
    </>
  );
};

export default FileEditorDetails;
