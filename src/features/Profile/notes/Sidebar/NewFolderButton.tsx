import { useNotesContext } from "@/features/Profile/contexts/notes-context";
import FeatherIcon from "feather-icons-react";

const NewFolderButton = () => {
  const { newFolderDialog } = useNotesContext();
  const openDialog = () => {
    newFolderDialog();
  };
  return (
    <button
      onClick={openDialog}
      className="new-folder-btn d-flex align-items-center gap-2 btn btn-secondary w-100 justify-content-center btn-sm"
    >
      <FeatherIcon icon="folder-plus" size={18} />
      إنشاء مجلد جديد
    </button>
  );
};

export default NewFolderButton;
