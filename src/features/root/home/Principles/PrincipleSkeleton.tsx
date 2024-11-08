import { Card, Col, Placeholder } from "react-bootstrap";
import Loading from "@/components/feedback/Loading";

const PrincipleSkeleton = () => {
  const arr = new Array(6).fill(0);
  return arr.map((_, idx) => (
    <Col key={idx} lg={4} data-aos="fade-up" data-duration="600">
      <Card className="shadow-sm">
        <Card.Body className="p-2">
          <div className="d-flex align-items-center">
            <span className="bg-soft-primary avatar avatar-sm rounded-2 icon icon-with-bg icon-xs text-primary ms-3 flex-shrink-0">
              <span className="fw-bolder">
                <Loading small />
              </span>
            </span>

            <div className="flex-grow-1">
              <h3 className="m-0">
                <Placeholder animation="wave" as="div">
                  <Placeholder xs={10} style={{ borderRadius: "10px" }} />
                </Placeholder>
              </h3>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  ));
};

export default PrincipleSkeleton;
