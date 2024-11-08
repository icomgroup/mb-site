import faqsQueries from "@/API/faq/queries";
import Error from "@/components/feedback/Error";
import NoData from "@/components/feedback/NoData";
import FAQContent from "@/features/root/FAQ/FAQContent";
import FAQSkeleton from "@/features/root/FAQ/FAQSkeleton";
import InfiniteScroll from "@/libs/infiniteScroll";
import { Col, Container, Row } from "react-bootstrap";

const FAQList = () => {
  const faqsQuery = faqsQueries.useGetAllFAQsQuery();
  const { data, isLoading, isError, error } = faqsQuery;
  const isEmpty =
    data &&
    data.pages[0] &&
    data.pages[0] &&
    data.pages[0].data.result.data.length === 0;
  return (
    <section className="section py-6 pt-sm-6 position-relative">
      {isError && <Error error={error} />}
      <Container data-aos="fade-up" data-aos-duration="300">
        <Row className="justify-content-center mt-5">
          <Col md={10} lg={8}>
            {isLoading && <FAQSkeleton />}
            {data && !isEmpty && (
              <InfiniteScroll query={faqsQuery} loader={<FAQSkeleton />}>
                <FAQContent data={data.pages} />
              </InfiniteScroll>
            )}
            {isEmpty && <NoData />}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQList;
