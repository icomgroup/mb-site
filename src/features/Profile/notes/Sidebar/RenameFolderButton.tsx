import { useNotesContext } from "@/features/Profile/contexts/notes-context";
import FeatherIcon from "feather-icons-react";

const RenameFolderButton = ({
  folderId,
  name,
}: {
  folderId: number;
  name: string;
}) => {
  const { renameFolderDialog } = useNotesContext();
  const openDialog = () => {
    renameFolderDialog(`${folderId}`, name);
  };
  return (
    <button
      onClick={openDialog}
      className="d-flex align-items-end w-fit lh-sm gap-1"
    >
      <FeatherIcon icon="edit" size={15} />
      تعديل
    </button>
  );
};

export default RenameFolderButton;
