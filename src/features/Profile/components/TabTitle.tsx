import { ReactNode } from "react";
import { Col, Row } from "react-bootstrap";

type Props = {
  title: string;
  subtitle: string;
  action?: ReactNode;
};
const TabTitle = ({ title, subtitle, action }: Props) => {
  return (
    <Row>
      <Col
        lg={12}
        className="px-0 d-flex align-items-center justify-content-between "
      >
        <div className="page-title">
          <h1 className="h3 my-0">{title}</h1>
          <p className="mt-1 fw-medium">{subtitle}</p>
        </div>
        {action && action}
      </Col>
    </Row>
  );
};

export default TabTitle;
