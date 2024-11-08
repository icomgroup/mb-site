import teamApis from "@/API/team/apis";
import controllers from "@/constants/controllers";
import { getNextPageParam, getPreviousPageParam } from "@/utils/apiHelpers";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGetAllQuery = () =>
  useInfiniteQuery({
    queryKey: [controllers.MEMBERS, "all"],
    queryFn: async ({ pageParam = 1 }) => {
      const data = await teamApis.getAll({ page: pageParam });
      return {
        data,
        pageParam,
      };
    },
    initialPageParam: 1,
    getNextPageParam,
    getPreviousPageParam,
  });

const teamQueries = { useGetAllQuery };

export default teamQueries;
