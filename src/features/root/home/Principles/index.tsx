import { ReactNode } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import homeQueries from "@/API/home/queries";
import Error from "@/components/feedback/Error";
import NoData from "@/components/feedback/NoData";
import BackendImage from "@/components/images/BackendImage";
import SectionTitle from "@/features/root/home/components/SectionTitle";
import InfiniteScroll from "@/libs/infiniteScroll";
import PrincipleSkeleton from "@/features/root/home/Principles/PrincipleSkeleton";

const Principles = () => {
  const principlesQuery = homeQueries.useGetAllPrinciples();
  const { data, isLoading, isError, error, isSuccess } = principlesQuery;
  let content: ReactNode = <NoData />;
  if (data && data.pages[0] && data.pages[0].data.result.data.length !== 0) {
    content = data.pages.map((page) =>
      page.data.result.data.map((item, index) => (
        <Col
          lg={4}
          key={index.toString()}
          data-aos="fade-up"
          data-duration="600"
        >
          <Card className="shadow-sm principl-item">
            <Card.Body className="p-2">
              <div className="d-flex align-items-center">
                <span className="bg-soft-primary avatar avatar-sm rounded-2 icon icon-with-bg icon-xs text-primary ms-3 flex-shrink-0">
                  {item.img ? (
                    <BackendImage
                      className="rounded-2"
                      url={item.img}
                      alt={item.name}
                    />
                  ) : (
                    <span className="fw-bolder">{item.name[0]}</span>
                  )}
                </span>

                <div className="flex-grow-1">
                  <h3 className="h5 m-0">{item.name}</h3>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))
    );
  }
  return (
    <section
      className="my-lg-5 py-5 py-sm-7 bg-gradient2 position-relative"
      data-aos="fade-up"
      data-aos-duration="300"
    >
      <div className="divider top d-none d-sm-block"></div>
      <Container>
        <SectionTitle title="المبادئ" subTitle="ما هي مبادئنا" />
        {isLoading && (
          <Row className="mt-5">
            <PrincipleSkeleton />
          </Row>
        )}
        {isError && <Error error={error} />}
        <InfiniteScroll
          className="row mt-5"
          query={principlesQuery}
          loader={<PrincipleSkeleton />}
          scrollThreshold={0}
        >
          {isSuccess && content}
        </InfiniteScroll>
      </Container>
    </section>
  );
};

export default Principles;
