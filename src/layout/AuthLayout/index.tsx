import { Outlet } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import Logo from "@/components/logo/Logo";

const AuthLayout = () => {
  return (
    <div className="bg-gradient2 min-vh-100 align-items-center d-flex justify-content-center pt-2 pt-sm-5 pb-4 pb-sm-5">
      <Container className="d-flex justify-conent-center">
        <Card className="d-inline-block mx-auto auth-card">
          <Card.Body className="p-0 p-xl-5 p-lg-4 p-3">
            <Logo className="mx-auto mb-5 d-flex justify-content-center" />
            <Outlet />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default AuthLayout;
