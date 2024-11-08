import { lazy } from "react";
import { Route } from "react-router-dom";

import AuthenticatedRoute from "@/components/routes/AuthenticatedRoute";
import { SuspensedOutlet } from "@/components/routes/SuspensedOutlet";
import ProfileLayout from "@/layout/ProfileLayout";
import MyFileErrorBoundray from "@/features/Profile/file-details/ErrorHandling/ErrorBoundry";

const ProfileHome = lazy(() => import("@/pages/Profile"));
const Notes = lazy(() => import("@/pages/Profile/Notes"));
const Balance = lazy(() => import("@/pages/Profile/Balance"));
const Files = lazy(() => import("@/pages/Profile/Files"));
const FileDetails = lazy(() => import("@/pages/Profile/FileDetails"));
const DisableExtensions = lazy(
  () => import("@/pages/Profile/DisableExtensions")
);

const PrivateRoutes = () => {
  return (
    <Route path="/profile" element={<AuthenticatedRoute />}>
      <Route element={<ProfileLayout />}>
        <Route element={<SuspensedOutlet />}>
          <Route index element={<ProfileHome />} />
          <Route path="notes" element={<Notes />} />
          <Route path="notes/:id" element={<Notes />} />
          <Route path="balance" element={<Balance />} />
          <Route path="files" element={<Files />} />
          <Route path="disable-extensions" element={<DisableExtensions />} />
          <Route
            path="files/:id"
            element={<FileDetails />}
            errorElement={<MyFileErrorBoundray />}
          />
        </Route>
      </Route>
    </Route>
  );
};

export default PrivateRoutes;
