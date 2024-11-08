import { Badge, Col, Row } from "react-bootstrap";

type Props = {
  title: string;
  subTitle: string;
  description?: string;
};

const SectionTitle = ({ title, subTitle, description }: Props) => {
  return (
    <Row>
      <Col className="text-center" data-aos="fade-up">
        <Badge pill bg="" className="badge-soft-primary px-2 py-1">
          {title}
        </Badge>
        <h2 className="display-4 fw-semibold">{subTitle}</h2>
        {description && <p className="text-muted mx-auto">{description}</p>}
      </Col>
    </Row>
  );
};

export default SectionTitle;
