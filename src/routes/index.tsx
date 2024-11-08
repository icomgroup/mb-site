import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import AppErrorBoundray from "@/components/error-boundries/AppErrorBoundray";
import { WithScroll } from "@/components/routes/WithScroll";

import RootRoutes from "./RootRoutes";
import PrivateRoutes from "@/routes/PrivateRoutes";
import AuthRoutes from "@/routes/AuthRoutes";

const AppRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<WithScroll />} errorElement={<AppErrorBoundray />}>
        {RootRoutes()}
        {PrivateRoutes()}
        {AuthRoutes()}
        <Route path="*" element={<Navigate to="" replace />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRoutes;
