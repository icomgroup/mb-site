import FeatherIcon from "feather-icons-react";
import { Col, Placeholder } from "react-bootstrap";

const FileDetailsSkeleton = () => {
  return (
    <div className="file-details skeleton">
      <div className="head row m-0 justify-content-between flex-wrap align-items-center gap-2">
        <Col xs={3} className="h2 p-0">
          <Placeholder animation="wave" as="div">
            <Placeholder
              xs={12}
              style={{ fontSize: "18px", borderRadius: "10px" }}
            />
          </Placeholder>
        </Col>
        <Col xs={2}>
          <Placeholder animation="wave" as="div">
            <Placeholder xs={12} style={{ borderRadius: "10px" }} />
          </Placeholder>
        </Col>
      </div>
      <div className="p">
        <Placeholder animation="wave" as="div">
          <Placeholder xs={6} style={{ borderRadius: "10px" }} />
          <Placeholder xs={10} style={{ borderRadius: "10px" }} />
        </Placeholder>
      </div>
      <div className="file-pages-num mt-2">
        <hr />
        <Col xs={2} color="primary">
          <Placeholder animation="wave" as="div">
            <Placeholder xs={12} style={{ borderRadius: "10px" }} />
          </Placeholder>
        </Col>
      </div>
      <div className="file-preview">
        <div className="loading-element gap-2 file-icon flex-column d-flex w-100 justify-content-center align-items-center">
          <FeatherIcon icon="file" size={100} />
          <p>Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default FileDetailsSkeleton;
