import { Card, Col, Placeholder } from "react-bootstrap";

const FeaturesSkeleton = () => {
  return new Array(6).fill(0).map((_, index) => (
    <Col md={4} key={index.toString()}>
      <Card
        className="border-0 shadow-md feature-item"
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <Card.Body>
          <div className="avatar-sm">
            <Placeholder animation="wave" as="div">
              <Placeholder
                xs={12}
                style={{
                  fontSize: "3rem",
                  color: "var(--bs-primary)",
                  borderRadius: "5px",
                  width: "3rem",
                }}
              />
            </Placeholder>
          </div>

          <h3 className="mt-3 mb-0 fw-semibold">
            <Placeholder animation="wave" as="div">
              <Placeholder
                xs={5}
                style={{ borderRadius: "10px", fontSize: "15px" }}
              />
            </Placeholder>
          </h3>
          <div className="text-muted mb-0">
            <Placeholder animation="wave" as="div">
              <Placeholder
                xs={12}
                style={{ borderRadius: "10px", fontSize: "10px" }}
              />
              <Placeholder
                xs={10}
                style={{ borderRadius: "10px", fontSize: "10px" }}
              />
            </Placeholder>
          </div>
        </Card.Body>
      </Card>
    </Col>
  ));
};

export default FeaturesSkeleton;
