import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SwitchFormLink = ({ isLogin = true }: { isLogin?: boolean }) => {
  return (
    <Row className="mt-5">
      <Col xs={12} className="text-center">
        <p className="text-muted">
          {isLogin && "ليس لديك حساب؟"}
          {!isLogin && "لديك حساب مسبقاً؟"}
          <Link
            to={`/auth/${isLogin ? "signup" : "login"}`}
            className="text-primary fw-semibold me-1"
          >
            {isLogin && "إنشاء حساب"}
            {!isLogin && "تسجيل الدخول"}
          </Link>
        </p>
      </Col>
    </Row>
  );
};

export default SwitchFormLink;
