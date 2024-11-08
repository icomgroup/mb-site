import { BackendResponse, BackendResponseWithPagination } from "@/types/apis";

export type GetAllBlocks = BackendResponseWithPagination<Block>;

export type GetOneBlock = BackendResponse<Block>;

export type Block = {
	id: number;
	name: string;
	description: string;
	points: number;
	is_published: boolean;
	created_at: string;
	updated_at: string;
	is_subscribed: boolean;
	file_count: number;
};

export type File = {
	id: number;
	name: string;
	description: string;
	subject: string;
	img: string;
	file: string;
	points: number;
	study_time: number;
	number_of_page: number;
	is_published: boolean;
	created_at: string;
	updated_at: string;
	is_subscribed: boolean;
	hasAttached: boolean;
};

export type GetBlockFiles = BackendResponseWithPagination<File>;

export type GetFile = BackendResponse<File>;

export type FileStreamBody = {
	file: number;
	withAttached: boolean;
	// pageNumber: null | number;
};

export type FileStreamResponseHeaders = {
	PageNo: string;
	NextPage: string;
	PrevPage: string;
	TotalPage: string | null;
	Page: string;
};
