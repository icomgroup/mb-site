import filesApis from "@/API/files/apis";
import controllers from "@/constants/controllers";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { getNextPageParam, getPreviousPageParam } from "@/utils/apiHelpers";
import { FileStreamBody } from "@/API/files/types";

const useGetAllBlocksQuery = () =>
	useInfiniteQuery({
		queryKey: [controllers.BLOCKS, "all"],
		queryFn: async ({ pageParam = 1 }) => {
			const data = await filesApis.getAllBlocks({
				page: pageParam,
				items: 9,
			});
			return {
				data,
				pageParam,
			};
		},
		initialPageParam: 1,
		getNextPageParam,
		getPreviousPageParam,
	});

const useGetBlockFilesQuery = (id: string) =>
	useInfiniteQuery({
		queryKey: [controllers.BLOCKS, "files", id],
		queryFn: async ({ pageParam = 1 }) => {
			const data = await filesApis.getBlockFiles(id, {
				page: pageParam,
				items: 9,
			});
			return {
				data,
				pageParam,
			};
		},
		initialPageParam: 1,
		getNextPageParam,
		getPreviousPageParam,
	});

const useGetBlockDetails = (id: string) =>
	useQuery({
		queryKey: [controllers.BLOCKS, "details", id],
		queryFn: () => filesApis.getOneBlock(id),
	});

const useGetFileDetails = (id: string) =>
	useQuery({
		queryKey: [controllers.FILES, "details", id],
		queryFn: () => filesApis.getFile(id),
	});

const useStreamFile = (body: FileStreamBody) =>
	useQuery({
		queryKey: [controllers.FILES, "stream-file", body.file],
		queryFn: () => filesApis.streamFile(body),
	});

const useBuyFileMutation = () => useMutation({ mutationFn: filesApis.post });
const useBuyBlockMutation = () =>
	useMutation({ mutationFn: filesApis.postBlock });

const fielsQueries = {
	useGetAllBlocksQuery,
	useGetBlockFilesQuery,
	useGetBlockDetails,
	useBuyFileMutation,
	useGetFileDetails,
	useBuyBlockMutation,
	useStreamFile,
};

export default fielsQueries;
