import faqsApis from "@/API/faq/apis";
import controllers from "@/constants/controllers";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getNextPageParam, getPreviousPageParam } from "@/utils/apiHelpers";

const useGetAllFAQsQuery = () =>
  useInfiniteQuery({
    queryKey: [controllers.FAQ, "all"],
    queryFn: async ({ pageParam = 1 }) => {
      const data = await faqsApis.getAllFAQs({ page: pageParam });
      return {
        data,
        pageParam,
      };
    },
    initialPageParam: 1,
    getNextPageParam,
    getPreviousPageParam,
  });
const faqsQueries = { useGetAllFAQsQuery };

export default faqsQueries;
