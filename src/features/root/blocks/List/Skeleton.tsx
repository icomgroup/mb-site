import { Col, Placeholder } from "react-bootstrap";

const BlockListSkeleton = () => {
  return new Array(6).fill(0).map((_, idx) => (
    <Col key={idx} lg={4}>
      <div className="category-item mb-4 p-4 rounded">
        <Placeholder animation="wave" as="div">
          <Placeholder xs={4} style={{ borderRadius: "10px" }} />
        </Placeholder>
        <div className="text-muted mt-2">
          <Placeholder animation="wave" as="div">
            <Placeholder xs={12} style={{ borderRadius: "10px" }} />
          </Placeholder>
        </div>
        <Placeholder animation="wave" as="div">
          <div className="mt-3 d-flex gap-2 align-items-center justify-content-between">
            <Placeholder.Button variant="primary" xs={3} />
            <Placeholder
              xs={3}
              style={{
                borderRadius: "10px",
                display: "inline-block",
              }}
            />
          </div>
        </Placeholder>
      </div>
    </Col>
  ));
};

export default BlockListSkeleton;
