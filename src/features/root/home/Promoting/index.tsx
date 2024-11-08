import { Col, Container, Row } from "react-bootstrap";
import img from "/promoting.jpg";

const Promoting = () => {
  return (
    <section className="promoting-section position-relative overflow-hidden pb-sm-6 pb-5">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col>
            <div
              className="mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="300"
            >
              <h2 className="display-5 fw-medium">
                <span className="highlight highlight-primary">
                  جميع ما تحتاج
                </span>{" "}
                إليه في{" "}
                <span className="highlight highlight-success">مكان واحد</span>{" "}
                اينما كنت
              </h2>
              <p>
                بعد توافر منصة الفريق الجديدة أصبح بإمكانك دراسة الكتب بصيغة
                الكترونية PDF ولو كنت خارج القطر ومتاحة لك على جميع الأجهزة
                والأنظمة، سهلة الاستخدام وبسيطة
              </p>
            </div>
          </Col>
          <Col>
            <img
              data-aos="fade-left"
              data-aos-duration="300"
              src={img}
              alt="medboss team"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Promoting;
