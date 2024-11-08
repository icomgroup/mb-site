import { Card, Col, Row } from "react-bootstrap";

import ChargeForm from "@/features/Profile/balance/ChargeForm";
import MyBalance from "@/features/Profile/balance/MyBalance";
import TabTitle from "@/features/Profile/components/TabTitle";

const Balance = () => {
  return (
    <>
      <TabTitle title="رصيدك" subtitle="تفاصيل الرصيد وشحن رصيد إضافي" />
      <Row className="align-items-stretch mx-0 mt-2">
        <Col lg={6} className="mb-3 mb-lg-0">
          <Card className="m-0 h-100 ">
            <Card.Body>
              <MyBalance />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="m-0 h-100 ">
            <Card.Body>
              <ChargeForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Balance;
