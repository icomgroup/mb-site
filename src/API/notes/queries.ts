import notesApis from "@/API/notes/apis";
import controllers from "@/constants/controllers";
import { useMutation, useQuery } from "@tanstack/react-query";

const useGetAllNoteFoldersQuery = () =>
  useQuery({
    queryKey: [controllers.FOLDERS, "all"],
    queryFn: () => notesApis.getFolders(),
  });

const useGetNoteDetailsQuery = (id: string) =>
  useQuery({
    queryKey: [controllers.NOTES, "details", id],
    queryFn: () => notesApis.getFile(id),
  });

const useCreateFolderMutation = () =>
  useMutation({ mutationFn: notesApis.postFolder });

const useUpdateFolderMutation = () =>
  useMutation({ mutationFn: notesApis.patchFolder });

const useCreateFileMutation = () =>
  useMutation({ mutationFn: notesApis.postFile });

const useUpdateFileMutation = () =>
  useMutation({ mutationFn: notesApis.patchFile });

const useDeleteFileMutation = () =>
  useMutation({ mutationFn: notesApis.deleteFile });

const useDeleteFolderMutation = () =>
  useMutation({ mutationFn: notesApis.deleteFolder });

const notesQueries = {
  useCreateFolderMutation,
  useGetAllNoteFoldersQuery,
  useCreateFileMutation,
  useUpdateFolderMutation,
  useGetNoteDetailsQuery,
  useUpdateFileMutation,
  useDeleteFileMutation,
  useDeleteFolderMutation,
};

export default notesQueries;
