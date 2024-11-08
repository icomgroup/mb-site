import TestimonialsSlider from "@/features/root/home/Testimonials/TestimonialsSlider";
import FeatherIcon from "feather-icons-react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";

const Testimonials = () => {
  return (
    <section
      className="testimonials-section section pt-4 pb-6 py-sm-8 mb-5 mb-lg-2 bg-light position-relative"
      data-aos="fade-up"
      data-aos-duration="300"
    >
      <div className="divider top d-none d-sm-block"></div>
      <Container>
        <Row className="header-row align-items-center overflow-hidden mx-auto">
          <Col>
            <Badge pill bg="" className="badge-soft-primary px-2 py-1">
              الآراء
            </Badge>
            <h2 className="display-5 fw-semibold">
              ما يزيد عن 9000 طالب وخريج استفاد من أعمال ميدبوس حتى الآن
            </h2>
          </Col>
          <Col xs="auto" className="navigations-col text-sm-right pt-2 pt-sm-0">
            <div className="navigations">
              <Button
                variant="link"
                className="text-normal p-0"
                id="swiper-custom-prev"
              >
                <FeatherIcon icon="arrow-right" className="icon-dual" />
              </Button>
              <Button
                variant="link"
                className="text-normal p-0 "
                id="swiper-custom-next"
              >
                <FeatherIcon icon="arrow-left" className="icon-dual" />
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="mt-3 mt-sm-5 mx-auto">
          <Col>
            <div className="slider">
              <TestimonialsSlider />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
