import { useNotesContext } from "@/features/Profile/contexts/notes-context";
import FeatherIcon from "feather-icons-react";

const DeleteFileButton = ({ id, name }: { id: number; name: string }) => {
  const { deleteFile } = useNotesContext();
  const openDialog = () => {
    deleteFile(`${id}`, name);
  };
  return (
    <button
      onClick={openDialog}
      className="d-flex align-items-center del-file-btn btn-sm btn-danger gap-1 btn lh-sm w-fit justify-content-center"
    >
      <FeatherIcon icon="trash" size={15} /> حذف الملف
    </button>
  );
};

export default DeleteFileButton;
