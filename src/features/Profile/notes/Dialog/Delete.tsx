import { Button } from "react-bootstrap";

import notesQueries from "@/API/notes/queries";
import { queryClient } from "@/context/queryClient";
import {
  DialogType,
  useNotesContext,
} from "@/features/Profile/contexts/notes-context";
import useSnackbar from "@/hooks/useSnackbar";
import controllers from "@/constants/controllers";
import LoadingButton from "@/components/buttons/LoadingButton";
import { useNavigate } from "react-router-dom";

const Delete = () => {
  const navigate = useNavigate();
  const { isDialogOpened, closeDialog, id, name } = useNotesContext();
  const { mutate: folderMutation, isPending: folderPending } =
    notesQueries.useDeleteFolderMutation();
  const { mutate: fileMutation, isPending: filePending } =
    notesQueries.useDeleteFileMutation();
  const { errorSnackbar, successSnackbar } = useSnackbar();

  const type = isDialogOpened === DialogType.Delete_File ? "الملف" : "المجلد";
  const onDelete = () => {
    if (isDialogOpened === DialogType.Delete_Folder) {
      folderMutation(id, {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [controllers.FOLDERS, "all"],
          });
          successSnackbar(`تم حذف ${type}`);
          navigate("/profile/notes");
          closeDialog();
        },
        onError: (err) => errorSnackbar(err),
      });
    } else {
      fileMutation(id, {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [controllers.FOLDERS, "all"],
          });
          successSnackbar(`تم حذف ${type}`);
          navigate("/profile/notes");
          closeDialog();
        },
        onError: (err) => errorSnackbar(err),
      });
    }
  };

  return (
    <div>
      <p>{`هل انت متأكد من حذف ${type} ${name ? `"${name}"` : ""}؟ `}</p>
      <div className=" mt-5  d-flex justify-content-center gap-2">
        <LoadingButton
          onClick={onDelete}
          isLoading={folderPending || filePending}
          small
          label="حذف"
        />
        <Button onClick={closeDialog} variant="outline-danger">
          إلغاء
        </Button>
      </div>
    </div>
  );
};

export default Delete;
