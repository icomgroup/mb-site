import { Link } from "react-router-dom";
import logo from "@/assets/images/logo/logo.png";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link to="/" className={className ?? ""}>
      <img src={logo} alt="logo" className="align-self-center logo-img" />
    </Link>
  );
};

export default Logo;
