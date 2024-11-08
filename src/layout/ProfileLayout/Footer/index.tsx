import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { navbarList } from "@/constants/navbar-list";

const Footer = () => {
  return (
    <footer className="section profile-footer py-4 position-relative">
      <Container>
        <Row className="align-items-center">
          <Col>
            <ul className="list-inline list-with-separator mb-0">
              {navbarList.map((item) => (
                <li key={item.link} className="list-inline-item ms-0">
                  <Link to={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg="auto" className="text-lg-end mt-2 mt-lg-0">
            <p className="fs-14 mb-0">
              {new Date().getFullYear()} © Medboss. جميع الحقوق محفوظة.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
