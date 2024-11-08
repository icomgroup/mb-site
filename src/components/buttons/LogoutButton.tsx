import FeatherIcon from "feather-icons-react";
import { Nav } from "react-bootstrap";

import { storage } from "@/utils/storage";
import { useNavigate } from "react-router-dom";

const LogoutButton = ({ className }: { className?: string }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    storage.clearToken();
    navigate("/auth/login", { replace: true });
  };
  return (
    <Nav.Item>
      <button
        onClick={handleLogout}
        className={`btn btn-sm p-1 px-sm-2 btn-outline-primary rounded-pill shadow-none ${className}`}
      >
        <FeatherIcon icon="log-out" size={20} />
      </button>
    </Nav.Item>
  );
};

export default LogoutButton;
