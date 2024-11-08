import LogoutButton from "@/components/buttons/LogoutButton";
import { storage } from "@/utils/storage";
import FeatherIcon from "feather-icons-react";
import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const AuthButton = () => {
  const token = storage.getToken();
  if (token) {
    return (
      <>
        <Nav.Item
          as="li"
          className="d-flex align-items-center my-3 my-lg-0 me-lg-5 ms-sm-0 gap-2"
        >
          <Link
            to="/profile/files"
            className="btn btn-sm p-1 px-sm-2 btn-primary rounded-pill shadow-none"
          >
            <FeatherIcon icon="user" size={20} />
          </Link>
          <LogoutButton />
        </Nav.Item>
      </>
    );
  }
  return (
    <Nav.Item as="li">
      <NavLink
        to="/auth/login"
        className="btn btn-sm py-1 py-sm-2 mb-3 mb-sm-0 btn-primary me-sm-2 shadow-none"
      >
        تسجيل الدخول
      </NavLink>
    </Nav.Item>
  );
};

export default AuthButton;
