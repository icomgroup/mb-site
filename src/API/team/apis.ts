import { GetAllTeam } from "@/API/team/types";
import controllers from "@/constants/controllers";
import axios from "@/libs/axios";
import { PaginationParams } from "@/types/apis";

const getAll = async (params: PaginationParams) => {
  const { data } = await axios.get<GetAllTeam>(controllers.MEMBERS, { params });
  return data;
};

const teamApis = {
  getAll,
};
export default teamApis;
