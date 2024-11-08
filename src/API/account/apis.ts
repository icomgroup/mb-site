import {
  EditInfoPayload,
  GetMyCategories,
  GetMyFiles,
  UserInfo,
} from "@/API/account/types";
import controllers from "@/constants/controllers";
import axios from "@/libs/axios";
import { BackendResponse, PaginationParams } from "@/types/apis";
import { storage } from "@/utils/storage";

const get = async () => {
  const { data } = await axios.get<BackendResponse<UserInfo>>(
    `${controllers.USER}/my-profile`
  );
  return data.result;
};

const patch = async (payload: EditInfoPayload) => {
  const id = storage.getId() ?? "";
  const { data } = await axios.patch<UserInfo>(
    `${controllers.USER}/${id}`,
    payload
  );
  return data;
};

const post = async (code: string) => {
  const { data } = await axios.post<boolean>(
    `${controllers.USER}/${code}/charge`
  );
  return data;
};

const getFiles = async (
  params: PaginationParams,
  catId: string | undefined
) => {
  const { data } = await axios.get<GetMyFiles>(`${controllers.USER}/files`, {
    params: { ...params, ...(catId ? { block_id: catId } : {}) },
  });
  return data;
};

const getCategories = async () => {
  const { data } = await axios.get<GetMyCategories>(
    `${controllers.USER}/blocks?withPagination=false`
  );
  if (data.result) return data.result;
  else return [];
};

const accountApis = { get, post, patch, getFiles, getCategories };
export default accountApis;
