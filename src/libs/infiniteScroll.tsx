import { ReactNode } from "react";
import { InfiniteData, UseInfiniteQueryResult } from "@tanstack/react-query";
import Infinite from "react-infinite-scroll-component";

import Loading from "@/components/feedback/Loading";
import { BackendResponseWithPagination } from "@/types/apis";

type Props = {
  loader?: ReactNode;
  children: ReactNode;
  query: UseInfiniteQueryResult<
    InfiniteData<{
      data: BackendResponseWithPagination<unknown>;
      pageParam: any;
    }>,
    unknown
  >;
  className?: string;
  scrollThreshold?: number | string;
};

const InfiniteScroll = ({
  query,
  scrollThreshold,
  children,
  className,
  loader,
}: Props) => {
  const { fetchNextPage, hasNextPage, data, isSuccess } = query;
  return isSuccess ? (
    <Infinite
      scrollThreshold={scrollThreshold ?? "400px"}
      style={{ overflow: "unset" }}
      dataLength={data.pages.length * 10}
      next={() => {
        fetchNextPage();
      }}
      hasMore={hasNextPage ?? false}
      loader={loader ?? <Loading className="d-block mx-auto my-3" />}
      className={className}
    >
      {children}
    </Infinite>
  ) : (
    <></>
  );
};
export default InfiniteScroll;
