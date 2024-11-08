import { useParams } from "react-router-dom";
import { ReactNode } from "react";
import { Col, Row } from "react-bootstrap";

import FileItem from "@/features/root/block-details/FileItem";
import fielsQueries from "@/API/files/queries";
import NoData from "@/components/feedback/NoData";
import Error from "@/components/feedback/Error";
import FileItemSkeleton from "@/features/root/block-details/FileItemSkeleton";
import InfiniteScroll from "@/libs/infiniteScroll";

const FilesList = () => {
  const { id } = useParams();
  const blockFilesQuery = fielsQueries.useGetBlockFilesQuery(id ?? "");
  const { data, isLoading, isError, error, isSuccess } = blockFilesQuery;
  let content: ReactNode = <NoData />;
  if (data && data.pages[0] && data.pages[0].data.result.data.length !== 0) {
    content = data.pages.map((page) =>
      page.data.result.data.map((item, index) => (
        <Col lg={4} md={6} key={index.toString()}>
          <FileItem data={item} />
        </Col>
      ))
    );
  }

  return (
    <div data-aos="fade-up" id="files-list" style={{ scrollMarginTop: 300 }}>
      {isLoading && (
        <Row className="row align-items-stretch files-row">
          <FileItemSkeleton />
        </Row>
      )}
      {isError && <Error error={error} />}
      <InfiniteScroll
        className="row align-items-stretch files-row"
        query={blockFilesQuery}
        loader={<FileItemSkeleton />}
      >
        {isSuccess && content}
      </InfiniteScroll>
    </div>
  );
};

export default FilesList;
