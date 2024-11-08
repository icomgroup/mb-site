import { useNotesContext } from "@/features/Profile/contexts/notes-context";
import FeatherIcon from "feather-icons-react";

const NewFileButton = ({ folderId }: { folderId: number }) => {
  const { newFileDialog } = useNotesContext();
  const openDialog = () => {
    newFileDialog(`${folderId}`);
  };
  return (
    <button
      onClick={openDialog}
      className="d-flex text-teal align-items-end w-fit lh-sm gap-1"
    >
      <FeatherIcon icon="file-plus" size={15} />
      إضافة ملف
    </button>
  );
};

export default NewFileButton;
