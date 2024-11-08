import { Badge, Col, Container, Row } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";

import TelegramIcon from "@/assets/images/TelegramIcon";
import Map from "@/features/root/home/ContactUs/Map";

const ContactUs = () => {
  return (
    <section className="contact-us-section position-relative overflow-hidden pb-sm-6 pb-5">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col lg={{ span: 5 }}>
            <div
              className="mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="300"
            >
              <Badge pill bg="" className="badge-soft-danger px-2 py-1">
                تواصل معنا
              </Badge>
              <h2 className="h1 display-5 fw-medium mb-2">
                هل لديك أي استفسار؟
              </h2>
              <h2 className="h5 fw-normal text-muted mx-auto mb-4 pb-3">
                يمكنك دوما التواصل معنا متى شئت والاستفسار عن أي شيء
              </h2>
              <a
                href="https://t.me/Medboss_Support"
                target="_blank"
                className="d-flex px-md-1 mb-3"
              >
                <span className="bg-soft-orange avatar avatar-sm rounded icon icon-with-bg icon-xs text-orange ms-3 flex-shrink-0">
                  <FeatherIcon icon="phone-call" className="icon-dual-orange" />
                </span>
                <div className="flex-grow-1">
                  <h5 className="m-0 fw-medium">
                    رقم الهاتف (حساب الدعم على التلغرام)
                  </h5>
                  <div className="text-muted fw-normal h5 my-1">
                    +00 123 456 7890
                  </div>
                </div>
              </a>
              <a
                href="mailto:medbossteam@gmail.com"
                className="d-flex px-md-1 mb-3"
              >
                <span className="bg-soft-primary avatar avatar-sm rounded icon icon-with-bg icon-xs text-primary ms-3 flex-shrink-0">
                  <FeatherIcon icon="mail" className="icon-dual-primary" />
                </span>
                <div className="flex-grow-1">
                  <h5 className="m-0 fw-medium">الإيميل</h5>
                  <div className="text-muted fw-normal h5 my-1">
                    medbossteam@gmail.com
                  </div>
                </div>
              </a>

              <a
                target="_blank"
                href="https://t.me/NationalExambot"
                className="d-flex px-md-1 mb-3"
              >
                <span className="bg-soft-info avatar avatar-sm rounded icon icon-with-bg icon-xs text-info ms-3 flex-shrink-0">
                  <TelegramIcon />
                </span>
                <div className="flex-grow-1">
                  <h5 className="m-0 fw-medium">بوت التواصل على التلغرام</h5>
                  <div className="text-muted fw-normal h5 my-1">
                    NationalExambot@
                  </div>
                </div>
              </a>
            </div>
          </Col>
          <Col lg={{ span: 7 }}>
            <Map />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
