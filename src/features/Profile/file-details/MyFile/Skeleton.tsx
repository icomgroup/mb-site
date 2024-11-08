import Loading from "@/components/feedback/Loading";
import FeatherIcon from "feather-icons-react";
import { Col, Placeholder } from "react-bootstrap";

const MyFileSkeleton = () => {
  return (
    <>
      <div className="file-pages-num">
        <hr />
        <Col xs={2}>
          <Placeholder animation="wave" as="div">
            <Placeholder xs={12} style={{ borderRadius: "10px" }} />
          </Placeholder>
        </Col>
      </div>
      <div className="loading-element gap-2 file-icon flex-column d-flex w-100 justify-content-center align-items-center">
        <FeatherIcon icon="file" size={100} />
        <div>
          Loading
          <Loading className="text-primary me-2" small />
        </div>
      </div>
    </>
  );
};

export default MyFileSkeleton;
