import { Card, Col, Row } from "react-bootstrap";

import TabTitle from "@/features/Profile/components/TabTitle";
import File_Details from "@/features/Profile/file-details";
// import useDetectProhibitedExtensions from "@/hooks/useDetectProhibitedExtensions";

const FileDetails = () => {
  // useDetectProhibitedExtensions();
  return (
    <>
      <TabTitle title="ملفاتي" subtitle="تصفح الملفات" />
      <Row className="mt-2">
        <Col lg={12} className="px-0">
          <Card className="main-card">
            <Card.Body className="p-0 py-3 mt-0">
              <File_Details />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default FileDetails;
