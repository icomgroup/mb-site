import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { navbarList } from "@/constants/navbar-list";
import Logo from "@/components/logo/Logo";
import FeatherIcon from "feather-icons-react";
import TelegramIcon from "@/assets/images/TelegramIcon";

const Footer = () => {
  return (
    <section
      className="overflow-hidden pt-lg-6 pt-3 pb-3 position-relative"
      data-aos="fade-up"
    >
      <Container>
        <Row className="align-items-center">
          <Col className="text-center">
            <ul className="list-inline list-with-separator">
              {navbarList.map((item) => (
                <li key={item.link} className="list-inline-item me-0">
                  <Link to={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <Logo className="mt-2 mb-3" />
            <ul className="social-list">
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/MEDBOSS.Team"
                  className="fb"
                >
                  <FeatherIcon icon="facebook" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@MedbossTeam"
                  className="yb"
                >
                  <FeatherIcon icon="youtube" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://t.me/MedBOSS_Team"
                  className="tg"
                >
                  <TelegramIcon />
                </a>
              </li>
            </ul>
            <p className="mb-4 fs-14">
              جميع الحقوق محفوظة Medboss © {new Date().getFullYear()}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
