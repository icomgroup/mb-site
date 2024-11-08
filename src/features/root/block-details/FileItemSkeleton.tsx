import { Col, Placeholder } from "react-bootstrap";

const FileItemSkeleton = () => {
  return new Array(6).fill(0).map((_, idx) => (
    <Col key={idx} lg={4} md={6}>
      <div
        className="file-item overflow-hidden rounded-3 mb-3"
        data-aos="fade-up"
      >
        <Placeholder animation="wave" as="div">
          <Placeholder xs={12} style={{ fontSize: "12rem" }} />
        </Placeholder>
        <div className="flex-grow-1 p-3">
          <Placeholder animation="wave" as="div">
            <div className="gap-2 d-flex flex-wrap justify-content-between">
              <Placeholder xs={2} style={{ borderRadius: "10px", flex: 1 }} />
              <Placeholder xs={2} style={{ borderRadius: "10px", flex: 1 }} />
              <Placeholder xs={2} style={{ borderRadius: "10px", flex: 1 }} />
              <Placeholder xs={2} style={{ borderRadius: "10px", flex: 1 }} />
            </div>
          </Placeholder>
          <h3 className="mt-3 mb-0 fw-large">
            <Placeholder animation="wave" as="div">
              <Placeholder xs={4} style={{ borderRadius: "10px" }} />
            </Placeholder>
          </h3>
          <div className="mb-3 mt-0">
            <Placeholder animation="wave" as="div">
              <Placeholder xs={12} style={{ borderRadius: "10px" }} />
            </Placeholder>
          </div>
          <Placeholder animation="wave" as="div">
            <Placeholder.Button variant="primary" xs={3} />
          </Placeholder>
        </div>
      </div>
    </Col>
  ));
};

export default FileItemSkeleton;
