import { useNotesContext } from "@/features/Profile/contexts/notes-context";
import FeatherIcon from "feather-icons-react";

const DeleteFolderButton = ({ id, name }: { id: number; name: string }) => {
  const { deleteFolder } = useNotesContext();
  const openDialog = () => {
    deleteFolder(`${id}`, name);
  };
  return (
    <button
      onClick={openDialog}
      className="d-flex align-items-end w-fit lh-sm gap-1 text-danger"
    >
      <FeatherIcon icon="trash" size={15} /> حذف
    </button>
  );
};

export default DeleteFolderButton;
