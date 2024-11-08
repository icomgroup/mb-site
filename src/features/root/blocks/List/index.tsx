import { ReactNode } from "react";

import fielsQueries from "@/API/files/queries";
import Error from "@/components/feedback/Error";
import { Container } from "react-bootstrap";
import NoData from "@/components/feedback/NoData";
import BlockListSkeleton from "@/features/root/blocks/List/Skeleton";

import BlockList from "@/features/root/blocks/List/List";
import InfiniteScroll from "@/libs/infiniteScroll";

const BlocksList = () => {
  const blocksQuery = fielsQueries.useGetAllBlocksQuery();
  const { data, isLoading, isError, error, isSuccess } = blocksQuery;
  let content: ReactNode = <NoData className="mt-5" />;
  if (data && data.pages[0] && data.pages[0].data.result.data.length !== 0) {
    content = (
      <InfiniteScroll
        className="row mt-6"
        query={blocksQuery}
        loader={<BlockListSkeleton />}
      >
        <BlockList data={data} />
      </InfiniteScroll>
    );
  }
  return (
    <>
      <div id="categories-list" style={{ scrollMarginTop: 300 }}></div>
      <Container>
        {isLoading && (
          <div className="row mt-6" data-aos="fade-up">
            <BlockListSkeleton />
          </div>
        )}
        {isError && <Error className="mt-5" error={error} />}
        {isSuccess && content}
      </Container>
    </>
  );
};

export default BlocksList;
