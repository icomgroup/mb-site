import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

import TabTitle from "@/features/Profile/components/TabTitle";
import Header from "@/features/Profile/files/Header";
import MyFilesList from "@/features/Profile/files/MyFilesList";

const Files = () => {
  const [isGridView, setIsGridView] = useState(false);
  return (
    <>
      <TabTitle title="ملفاتي" subtitle="تصفح الملفات" />
      <Row className="mt-2">
        <Col lg={12} className="px-0">
          <Card className="main-card">
            <Card.Body className="px-0">
              <Header setGridView={setIsGridView} isGrid={isGridView} />
              <MyFilesList isGridView={isGridView} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Files;
