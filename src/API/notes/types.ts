import { BackendResponse } from "@/types/apis";

export type NoteFolder = {
  id: number;
  name: string;
  notes: NoteFile[];
};

export type NoteFile = {
  id: number;
  name: string;
  note: string;
  folder_id: number;
  created_at: string;
  updated_at: string;
};

export type FolderNoteFile = BackendResponse<FolderNoteFile>;

export type GetAllFolders = BackendResponse<NoteFolder[]>;

export type FilePayload = {
  folder_id: number | string;
  name: string;
  note: string;
};

export type NewFileResult = BackendResponse<NoteFile>;

export type UpdateFilePayload = FilePayload & { id: number | string };
