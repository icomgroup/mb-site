import { createContext, useContext } from "react";

export enum DialogType {
  None,
  New_File,
  New_Folder,
  Rename_Folder,
  Update_File,
  Delete_File,
  Delete_Folder,
}

export type NotesContextValueType = {
  id: string;
  isDialogOpened: DialogType;
  name: string;
  closeDialog: () => void;
  newFileDialog: (folderId: string) => void;
  newFolderDialog: () => void;
  UpdateFileDialog: (fileId: string) => void;
  renameFolderDialog: (folderId: string, oldName: string) => void;
  deleteFile: (fileId: string, name: string) => void;
  deleteFolder: (folderId: string, name: string) => void;
};

const defaultValue: any = {};

export const notesContext = createContext<NotesContextValueType>(defaultValue);

// eslint-disable-next-line react-refresh/only-export-components
export const useNotesContext = () => useContext(notesContext);
