import { lazy } from "react";
import { Route } from "react-router-dom";

import { SuspensedOutlet } from "@/components/routes/SuspensedOutlet";
import AuthLayout from "@/layout/AuthLayout";

const Login = lazy(() => import("@/pages/Auth/Login"));
const Signup = lazy(() => import("@/pages/Auth/Signup"));
const ResetPassword = lazy(() => import("@/pages/Auth/ResetPassword"));
const ForgetPassword = lazy(() => import("@/pages/Auth/ForgetPassword"));

const AuthRoutes = () => {
  return (
    <>
      <Route path="auth" element={<AuthLayout />}>
        <Route element={<SuspensedOutlet />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forget-password" element={<ForgetPassword />} />
        </Route>
      </Route>
      <Route path="/" element={<AuthLayout />}>
        <Route element={<SuspensedOutlet />}>
          <Route path="password-reset/:token" element={<ResetPassword />} />
        </Route>
      </Route>
    </>
  );
};

export default AuthRoutes;
