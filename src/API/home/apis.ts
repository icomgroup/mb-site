import {
  GetAllFeatures,
  GetAllPrinciples,
  GetAllReviews,
  GetAllVendors,
} from "@/API/home/types";
import controllers from "@/constants/controllers";
import axios from "@/libs/axios";
import { PaginationParams } from "@/types/apis";

const getReviews = async () => {
  const { data } = await axios.get<GetAllReviews>(
    `${controllers.REVIEWS}?withPagination=false`
  );
  return data.result;
};

const getVendors = async (params: PaginationParams) => {
  const { data } = await axios.get<GetAllVendors>(controllers.CENTERS, {
    params,
  });
  return data;
};

const getPrinciples = async (params: PaginationParams) => {
  const { data } = await axios.get<GetAllPrinciples>(controllers.PRENCIPLES, {
    params,
  });
  return data;
};

const getFeatures = async (params: PaginationParams) => {
  const { data } = await axios.get<GetAllFeatures>(controllers.SERVICES, {
    params,
  });
  return data;
};

const homeApis = { getReviews, getVendors, getPrinciples, getFeatures };

export default homeApis;
