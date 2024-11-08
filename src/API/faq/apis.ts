import { GetAllFAQs } from "@/API/faq/types";
import controllers from "@/constants/controllers";
import axios from "@/libs/axios";
import { PaginationParams } from "@/types/apis";

const getAllFAQs = async (params: PaginationParams) => {
  const { data } = await axios.get<GetAllFAQs>(controllers.FAQ, { params });
  return data;
};

const faqsApis = { getAllFAQs };
export default faqsApis;
