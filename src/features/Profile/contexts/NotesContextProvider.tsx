import {
  DialogType,
  notesContext,
} from "@/features/Profile/contexts/notes-context";
import { ReactNode, useState } from "react";

const NotesContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDialogOpened, setIsDialogOpened] = useState<DialogType>(0);
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const closeDialog = () => {
    setId("");
    setIsDialogOpened(DialogType.None);
  };
  const newFileDialog = (folderId: string) => {
    setIsDialogOpened(DialogType.New_File);
    setId(folderId);
  };
  const newFolderDialog = () => {
    setIsDialogOpened(DialogType.New_Folder);
  };
  const UpdateFileDialog = (fileId: string) => {
    setIsDialogOpened(DialogType.Update_File);
    setId(fileId);
  };
  const renameFolderDialog = (folderId: string, oldName: string) => {
    setIsDialogOpened(DialogType.Rename_Folder);
    setId(folderId);
    setName(oldName);
  };

  const deleteFile = (fileId: string, name: string) => {
    setIsDialogOpened(DialogType.Delete_File);
    setId(fileId);
    setName(name);
  };

  const deleteFolder = (folderId: string, name: string) => {
    setIsDialogOpened(DialogType.Delete_Folder);
    setId(folderId);
    setName(name);
  };
  return (
    <notesContext.Provider
      value={{
        id,
        isDialogOpened,
        closeDialog,
        newFileDialog,
        newFolderDialog,
        UpdateFileDialog,
        renameFolderDialog,
        deleteFile,
        deleteFolder,
        name,
      }}
    >
      {children}
    </notesContext.Provider>
  );
};

export default NotesContextProvider;
