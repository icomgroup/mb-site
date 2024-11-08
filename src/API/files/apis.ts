import {
	FileStreamBody,
	GetAllBlocks,
	GetBlockFiles,
	GetFile,
	GetOneBlock,
} from "@/API/files/types";
import axios from "@/libs/axios";
import controllers from "@/constants/controllers";
import { PaginationParams } from "@/types/apis";

const getAllBlocks = async (params: PaginationParams) => {
	const { data } = await axios.get<GetAllBlocks>(controllers.BLOCKS, {
		params,
	});
	return data;
};

const getOneBlock = async (id: string) => {
	const { data } = await axios.get<GetOneBlock>(`${controllers.BLOCKS}/${id}`);
	return data.result;
};

const getBlockFiles = async (id: string, params: PaginationParams) => {
	const { data } = await axios.get<GetBlockFiles>(
		`${controllers.BLOCKS}/${id}/files`,
		{ params }
	);
	return data;
};

const getFile = async (id: string) => {
	const { data } = await axios.get<GetFile>(`${controllers.FILES}/${id}`);
	return data.result;
};

const post = async (id: string) => {
	await axios.post(`${controllers.FILES}/${id}/subscribe`);
};

const postBlock = async (id: string) => {
	await axios.post(`${controllers.BLOCKS}/${id}/subscribe`);
};

const streamFile = async (body: FileStreamBody) => {
	const res = await axios.post<Blob>(`stream/files`, body, {
		responseType: "blob",
	});
	const { data, headers } = res;
	return { data, headers };
};

const filesApis = {
	getAllBlocks,
	getOneBlock,
	getBlockFiles,
	post,
	getFile,
	postBlock,
	streamFile,
};
export default filesApis;
