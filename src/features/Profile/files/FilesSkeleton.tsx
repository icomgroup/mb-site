import { Col, Placeholder } from "react-bootstrap";

const FilesSkeleton = ({ isGridView }: { isGridView: boolean }) => {
  return new Array(4).fill(0).map((_, idx) => (
    <Col key={idx} className="px-0 px-sm-3 text-center" lg={isGridView ? 4 : 6}>
      <div
        className={`${
          isGridView ? "grid-file-item" : "list-file-item"
        } profile-file-item overflow-hidden rounded-3 mb-3 w-full`}
      >
        <div className="img-box">
          <Placeholder animation="wave" as="div">
            <Placeholder
              xs={12}
              style={{ fontSize: isGridView ? "12rem" : "6rem" }}
            />
          </Placeholder>
        </div>
        <div className="flex-grow-1 py-3 px-3">
          <Placeholder animation="wave" as="div"></Placeholder>
          <h3 className="fw-large m-0 h4 mb-2 text-align-right">
            <Placeholder animation="wave" as="div">
              <Placeholder xs={4} style={{ borderRadius: "10px" }} />
            </Placeholder>
          </h3>
          <div className=" d-flex align-items-center gap-2 flex-wrap">
            <Placeholder xs={2} style={{ borderRadius: "10px", flex: 1 }} />
            <Placeholder xs={2} style={{ borderRadius: "10px", flex: 1 }} />
            <Placeholder xs={2} style={{ borderRadius: "10px", flex: 1 }} />
            <Placeholder xs={2} style={{ borderRadius: "10px", flex: 1 }} />
          </div>
        </div>
      </div>
    </Col>
  ));
};

export default FilesSkeleton;
