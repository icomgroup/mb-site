import { InfiniteData } from "@tanstack/react-query";
import { BackendResponseWithPagination } from "@/types/apis";
import { AxiosError } from "axios";
import { FileStreamResponseHeaders } from "@/API/files/types";

export interface ReactQueryPage<T> {
	data: BackendResponseWithPagination<T>;
	pageParam: number;
}

export function getNextPageParam<T>(
	lastPage: ReactQueryPage<T>,
	allPages: ReactQueryPage<T>[]
) {
	return allPages.length < lastPage.data.result.last_page
		? lastPage.pageParam + 1
		: undefined;
}

export function getPreviousPageParam<T>(
	lastPage: ReactQueryPage<T>,
	allPages: ReactQueryPage<T>[]
) {
	return allPages.length > 0 ? lastPage.pageParam - 1 : undefined;
}

type Data<T> =
	| InfiniteData<{
			data: BackendResponseWithPagination<T>;
			pageParam: any;
	  }>
	| undefined;

export function getPage<T>(data: Data<T>, pageNumber: number) {
	return (
		data?.pages[(data?.pageParams[pageNumber] as any) ?? 0]?.data.result ?? []
	);
}

export type ParseBackendErrorParams = { not_found_msg?: string };

export function parseBackendError(
	err: AxiosError<any, any>,
	{ not_found_msg }: ParseBackendErrorParams = {}
) {
	let message: string | undefined;
	const data = err.response?.data;
	if (data?.error && typeof data?.error === "string") message = data.error;
	if (err?.message && typeof err.message === "string") message = data?.message;
	if (err.code === "ERR_NETWORK")
		message = "خطأ بالشبكة! يرجى التحقق من الإتصال بالإنترنت.";
	if (err.response?.status === 404) {
		message = not_found_msg ?? "العنصر غير موجود";
	}
	return message;
}

export function getFileStreamHeaderData(
	axiosHeaders: any
): FileStreamResponseHeaders {
	const headerData: FileStreamResponseHeaders = {
		PageNo: "",
		NextPage: "",
		PrevPage: "",
		TotalPage: "0",
		Page: "",
	};

	if (!axiosHeaders) throw new Error("Response Headers does not exist! ");

	// if (axiosHeaders["x-page-no"] !== undefined) {
	//   headerData["PageNo"] = axiosHeaders["x-page-no"];
	// } else throw new Error("X-Page-No Header does not exist in response Headers");

	// headerData["NextPage"] = axiosHeaders["x-next-page"];
	// headerData["PrevPage"] = axiosHeaders["x-prev-page"];
	headerData["TotalPage"] = axiosHeaders["x-total-page"];
	headerData["Page"] = axiosHeaders["x-page"];

	return headerData;
}
