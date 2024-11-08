import { ReactNode } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";

import accountQueries from "@/API/account/queries";
import Error from "@/components/feedback/Error";
import NoData from "@/components/feedback/NoData";
import FileItem from "@/features/Profile/files/FileItem";
import FilesSkeleton from "@/features/Profile/files/FilesSkeleton";
import InfiniteScroll from "@/libs/infiniteScroll";
import FeatherIcon from "feather-icons-react";

const MyFilesList = ({ isGridView }: { isGridView: boolean }) => {
  const [searchParams] = useSearchParams();
  const catId = searchParams.get("id") ?? undefined;

  const myFilesQuery = accountQueries.useMyFilesQuery(catId);
  const { data, isError, isLoading, error, isSuccess } = myFilesQuery;

  let content: ReactNode = (
    <NoData
      className="mt-5"
      msg="أنت غير مشترك بأية ملفات"
      action={
        <Link
          to="/files#categories-list"
          className="btn w-fit mx-auto btn-sm btn-primary"
          data-toggle="smooth-scroll"
        >
          <FeatherIcon className="ms-2 icon icon-xxs" icon="arrow-right" />
          عرض الملفات للإشتراك
        </Link>
      }
    />
  );

  if (data && data?.pages[0] && data?.pages[0].data.result.data.length !== 0) {
    content = data.pages.map((page) =>
      page.data.result.data.map((item, index) => {
        return (
          <Col
            className="px-0 px-sm-3 text-center  mb-3"
            lg={isGridView ? 4 : 6}
            key={index.toString()}
          >
            <FileItem data={item} isGridView={isGridView} />
          </Col>
        );
      })
    );
  }
  return (
    <div id="files-list" style={{ scrollMarginTop: 300 }}>
      {isLoading && (
        <Row className="align-items-center">
          <FilesSkeleton isGridView={isGridView} />
        </Row>
      )}
      {isError && <Error error={error} />}
      <InfiniteScroll
        className="row align-items-stretch"
        query={myFilesQuery}
        loader={<FilesSkeleton isGridView={isGridView} />}
      >
        {isSuccess && content}
      </InfiniteScroll>
    </div>
  );
};

export default MyFilesList;
