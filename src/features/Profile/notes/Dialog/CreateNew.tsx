import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import notesQueries from "@/API/notes/queries";
import Submit from "@/components/buttons/Submit";
import FormInput from "@/components/inputs/FormInput";
import { queryClient } from "@/context/queryClient";
import {
  DialogType,
  useNotesContext,
} from "@/features/Profile/contexts/notes-context";
import useSnackbar from "@/hooks/useSnackbar";
import yup from "@/libs/yup";
import controllers from "@/constants/controllers";
import { useNavigate } from "react-router-dom";

const CreateNew = () => {
  const navigate = useNavigate();
  const { isDialogOpened, closeDialog, id } = useNotesContext();
  const { mutate: folderMutation, isPending: folderPending } =
    notesQueries.useCreateFolderMutation();
  const { mutate: fileMutation, isPending: filePending } =
    notesQueries.useCreateFileMutation();
  const { errorSnackbar, successSnackbar } = useSnackbar();
  const methods = useForm<{ name: string }>({
    defaultValues: { name: "" },
    resolver: yupResolver(yup.object({ name: yup.string().required() })),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const type = isDialogOpened === DialogType.New_File ? "الملف" : "المجلد";
  const onSubmit = ({ name }: { name: string }) => {
    if (isDialogOpened === DialogType.New_Folder) {
      folderMutation(name, {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [controllers.FOLDERS, "all"],
          });
          successSnackbar(`تم إنشاء ${type}`);
          closeDialog();
        },
        onError: (err) => errorSnackbar(err),
      });
    } else {
      fileMutation(
        { name, folder_id: +id, note: "-" },
        {
          onSuccess: (createdFile) => {
            queryClient
              .invalidateQueries({
                queryKey: [controllers.FOLDERS, "all"],
              })
              .then(() => {
                navigate(`/profile/notes/${createdFile.id}`);
              });
            successSnackbar(`تم إنشاء ${type}`);
            closeDialog();
          },
          onError: (err) => errorSnackbar(err),
        }
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormInput
        name="name"
        label={`اسم ${type}`}
        register={register}
        errors={errors}
        placeholder="الاسم"
      />
      <div className=" mt-5  d-flex justify-content-center gap-2">
        <Submit isSubmitting={folderPending || filePending} small>
          إنشاء
        </Submit>
        <Button onClick={closeDialog} variant="outline-danger">
          إلغاء
        </Button>
      </div>
    </form>
  );
};

export default CreateNew;
