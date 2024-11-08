import { ReactNode } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import homeQueries from "@/API/home/queries";
import Error from "@/components/feedback/Error";
import NoData from "@/components/feedback/NoData";
import BackendImage from "@/components/images/BackendImage";
import SectionTitle from "@/features/root/home/components/SectionTitle";
import FeaturesSkeleton from "@/features/root/home/Features/FeaturesSkeleton";
import InfiniteScroll from "@/libs/infiniteScroll";

const Features = () => {
  const query = homeQueries.useGetAllFeatures();
  const { data, isLoading, isError, error, isSuccess } = query;
  let content: ReactNode = <NoData />;
  if (data && data.pages[0] && data.pages[0].data.result.data.length !== 0) {
    content = data.pages.map((page) =>
      page.data.result.data.map((feature, index) => (
        <Col lg={4} key={index.toString()}>
          <Card
            className="border-0 shadow-md feature-item"
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <Card.Body>
              <div className="avatar-sm">
                <BackendImage
                  className="rounded-2"
                  url={feature.img}
                  alt={feature.description}
                />
              </div>

              <h4 className="mt-3 mb-2 fw-semibold">{feature.name}</h4>
              <p className="text-muted mb-0">{feature.description}</p>
            </Card.Body>
          </Card>
        </Col>
      ))
    );
  }
  return (
    <section
      className="features-section position-relative py-sm-6 py-5"
      data-aos="fade-up"
      data-aos-duration="300"
    >
      <Container>
        <SectionTitle title="الميزات" subTitle="ماذا تقدم لك Medboss؟" />
        {isLoading && (
          <Row className="mt-5 align-items-stretch">
            <FeaturesSkeleton />
          </Row>
        )}
        {isError && <Error error={error} />}
        <InfiniteScroll
          className="row mt-5 align-items-stretch"
          query={query}
          loader={<FeaturesSkeleton />}
          scrollThreshold={0}
        >
          {isSuccess && content}
        </InfiniteScroll>
      </Container>
    </section>
  );
};

export default Features;
