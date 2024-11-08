import {
  FilePayload,
  GetAllFolders,
  NewFileResult,
  NoteFile,
  UpdateFilePayload,
} from "@/API/notes/types";
import controllers from "@/constants/controllers";
import axios from "@/libs/axios";
import { BackendResponse } from "@/types/apis";

const postFolder = async (name: string) => {
  await axios.post(controllers.FOLDERS, { name });
};

const patchFolder = async ({ name, id }: { name: string; id: string }) => {
  await axios.patch(`${controllers.FOLDERS}/${id}`, { name });
};

const postFile = async (payload: FilePayload) => {
  const { data } = await axios.post<NewFileResult>(controllers.NOTES, payload);
  return data.result;
};

const getFolders = async () => {
  const { data } = await axios.get<GetAllFolders>(`${controllers.FOLDERS}`);
  return data;
};

const getFile = async (id: string) => {
  const { data } = await axios.get<BackendResponse<NoteFile>>(
    `${controllers.NOTES}/${id}`
  );
  return data.result;
};

const patchFile = async (payload: UpdateFilePayload) => {
  const { id, ...rest } = payload;
  await axios.patch(`${controllers.NOTES}/${id}`, rest);
};

const deleteFile = async (id: string) => {
  await axios.delete(`${controllers.NOTES}/${id}`);
};

const deleteFolder = async (id: string) => {
  await axios.delete(`${controllers.FOLDERS}/${id}`);
};

const notesApis = {
  postFolder,
  getFolders,
  postFile,
  patchFolder,
  getFile,
  patchFile,
  deleteFile,
  deleteFolder,
};

export default notesApis;
