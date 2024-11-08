import { Navigate, useLocation, Outlet } from "react-router-dom";

import { storage } from "@/utils/storage";

/**
 * Private Route forces the authorization before the route can be accessed
 */
const AuthenticatedRoute = () => {
  const location = useLocation();
  const token = storage.getToken();
  /**
   * not logged in so redirect to login page with the return url
   */
  if (!token) {
    return <Navigate to={"/auth/login"} state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default AuthenticatedRoute;
