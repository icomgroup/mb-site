import accountApis from "@/API/account/apis";
import controllers from "@/constants/controllers";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { getNextPageParam, getPreviousPageParam } from "@/utils/apiHelpers";

const useInfoQuery = () =>
  useQuery({
    queryKey: [controllers.USER, "info"],
    queryFn: () => accountApis.get(),
  });
const useMyFilesQuery = (catId: string | undefined) =>
  useInfiniteQuery({
    queryKey: [controllers.CENTERS, "all", catId],
    queryFn: async ({ pageParam = 1 }) => {
      const data = await accountApis.getFiles(
        {
          page: pageParam,
          items: 9,
        },
        catId
      );
      return {
        data,
        pageParam,
      };
    },
    initialPageParam: 1,
    getNextPageParam,
    getPreviousPageParam,
  });

const useMyCategoriesQuery = () =>
  useQuery({
    queryKey: [controllers.USER, "my-cat"],
    queryFn: () => accountApis.getCategories(),
  });

const useEditInfoMutation = () =>
  useMutation({ mutationFn: accountApis.patch });
const useChargeMutation = () => useMutation({ mutationFn: accountApis.post });

const accountQueries = {
  useInfoQuery,
  useEditInfoMutation,
  useChargeMutation,
  useMyFilesQuery,
  useMyCategoriesQuery,
};

export default accountQueries;
