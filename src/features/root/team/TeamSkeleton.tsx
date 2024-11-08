import { Col, Placeholder } from "react-bootstrap";

const TeamSkeleton = () => {
  return new Array(6).fill(0).map((_, index) => {
    return (
      <Col lg={4} md={6} key={index.toString()} className=" mb-4">
        <div className="p-2 rounded p-md-3 team-item">
          <Placeholder animation="wave" as="div">
            <Placeholder xs={12} style={{ fontSize: "12rem" }} />
          </Placeholder>
          <div className="flex-grow-1 mt-3">
            <div className="mt-0 mb-1 ">
              <Placeholder animation="wave" as="div">
                <Placeholder xs={6} style={{ borderRadius: "10px" }} />
              </Placeholder>
            </div>
            <div className="text-primary">
              <Placeholder animation="wave" as="div">
                <Placeholder
                  xs={3}
                  style={{ borderRadius: "10px", fontSize: "0.9rem" }}
                />
              </Placeholder>
            </div>
            <Placeholder animation="wave" as="div">
              <Placeholder xs={10} style={{ borderRadius: "10px" }} />
              <Placeholder xs={12} style={{ borderRadius: "10px" }} />
            </Placeholder>
          </div>
        </div>
      </Col>
    );
  });
};

export default TeamSkeleton;
