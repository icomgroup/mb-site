import { Modal } from "react-bootstrap";
import {
  DialogType,
  useNotesContext,
} from "@/features/Profile/contexts/notes-context";
import CreateNew from "@/features/Profile/notes/Dialog/CreateNew";
import RenameFolder from "@/features/Profile/notes/Dialog/RenameFolder";
import Delete from "@/features/Profile/notes/Dialog/Delete";
import UpdateFile from "@/features/Profile/notes/Dialog/UpdateFile";

const CreateNewDialog = () => {
  const { isDialogOpened, closeDialog } = useNotesContext();

  return (
    <Modal
      show={isDialogOpened !== DialogType.None}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={closeDialog}
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <h2 className="text-primary">
          {isDialogOpened === DialogType.Update_File && "تعديل الملف"}
          {isDialogOpened === DialogType.New_File && "إنشاء ملف جديد"}
          {isDialogOpened === DialogType.New_Folder && "إنشاء مجلد جديد"}
          {isDialogOpened === DialogType.Rename_Folder && "إعادة تسمية المجلد"}
          {isDialogOpened === DialogType.Delete_File && "حذف الملف"}
          {isDialogOpened === DialogType.Delete_Folder && "حذف المجلد"}
        </h2>
        {(isDialogOpened === DialogType.New_File ||
          isDialogOpened === DialogType.New_Folder) && <CreateNew />}
        {isDialogOpened === DialogType.Rename_Folder && <RenameFolder />}
        {(isDialogOpened === DialogType.Delete_File ||
          isDialogOpened === DialogType.Delete_Folder) && <Delete />}
        {isDialogOpened === DialogType.Update_File && <UpdateFile />}
      </Modal.Body>
    </Modal>
  );
};

export default CreateNewDialog;
