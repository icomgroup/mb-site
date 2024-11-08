import { Col, Container, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

type Props = {
  title: string;
  subtitle: string;
  bg?: string;
  bgPc?: string;
};

const PageHeader = ({ bg, bgPc, title, subtitle }: Props) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  let backgroundImage = isMobile ? bg : bgPc;
  if (bg && !bgPc) {
    backgroundImage = bg;
  }
  return (
    <section
      className={`hero-4 ${backgroundImage ? "" : "bg-gradient2"}`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={7} className="text-center">
            <h1 className="hero-title">{title}</h1>
            <p className="text-muted">{subtitle}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PageHeader;
