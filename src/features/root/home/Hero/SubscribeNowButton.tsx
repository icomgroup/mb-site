import { storage } from "@/utils/storage";
import { Link } from "react-router-dom";

const SubscribeNowButton = () => {
  return (
    <Link
      to={`${storage.getToken() ? "/files" : "/auth/login"}`}
      className="btn btn-link text-primary fw-semibold me-2"
    >
      اشترك الآن
    </Link>
  );
};

export default SubscribeNowButton;
