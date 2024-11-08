import { Col, Placeholder, Row } from "react-bootstrap";

const HeroSkeleton = () => {
  return (
    <>
      <Placeholder animation="wave" as="div">
        <Placeholder xs={3} style={{ borderRadius: "10px" }} />
        <div className="mt-3 d-flex flex-column align-items-center gap-3">
          <Placeholder xs={6} style={{ borderRadius: "10px" }} />
          <Placeholder xs={6} style={{ borderRadius: "10px" }} />
        </div>
      </Placeholder>
      <Row className="border-top border-bottom py-4 align-items-center mt-5">
        <Col>
          <span className="fs-14">عدد الملفات</span>
          <h2 className="mt-1 fw-medium h4">
            <Placeholder animation="wave" as="div">
              <Placeholder xs={3} style={{ borderRadius: "10px" }} />
            </Placeholder>
          </h2>
        </Col>
        <Col>
          <span className="fs-14">قيمة الاشتراك</span>
          <h2 className="mt-1 fw-medium h4">
            <Placeholder animation="wave" as="div">
              <Placeholder xs={3} style={{ borderRadius: "10px" }} />
            </Placeholder>
          </h2>
        </Col>
        <Col>
          <span className="fs-14">اشترك الآن</span>
          <Placeholder animation="wave" as="div">
            <Placeholder.Button
              variant="primary"
              style={{ padding: "0px" }}
              xs={4}
            />
          </Placeholder>
        </Col>
      </Row>
    </>
  );
};

export default HeroSkeleton;
