import homeApis from "@/API/home/apis";
import controllers from "@/constants/controllers";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getNextPageParam, getPreviousPageParam } from "@/utils/apiHelpers";

const useGetAllReviews = () =>
  useQuery({
    queryKey: [controllers.REVIEWS, "all"],
    queryFn: () => homeApis.getReviews(),
  });

const useGetAllVendors = () =>
  useInfiniteQuery({
    queryKey: [controllers.CENTERS, "all"],
    queryFn: async ({ pageParam = 1 }) => {
      const data = await homeApis.getVendors({
        page: pageParam,
        items: 9,
      });
      return {
        data,
        pageParam,
      };
    },
    initialPageParam: 1,
    getNextPageParam,
    getPreviousPageParam,
  });
const useGetAllPrinciples = () =>
  useInfiniteQuery({
    queryKey: [controllers.PRENCIPLES, "all"],
    queryFn: async ({ pageParam = 1 }) => {
      const data = await homeApis.getPrinciples({
        page: pageParam,
        items: 9,
      });
      return {
        data,
        pageParam,
      };
    },
    initialPageParam: 1,
    getNextPageParam,
    getPreviousPageParam,
  });
const useGetAllFeatures = () =>
  useInfiniteQuery({
    queryKey: [controllers.SERVICES, "all"],
    queryFn: async ({ pageParam = 1 }) => {
      const data = await homeApis.getFeatures({
        page: pageParam,
        items: 9,
      });
      return {
        data,
        pageParam,
      };
    },
    initialPageParam: 1,
    getNextPageParam,
    getPreviousPageParam,
  });

const homeQueries = {
  useGetAllReviews,
  useGetAllVendors,
  useGetAllPrinciples,
  useGetAllFeatures,
};

export default homeQueries;
