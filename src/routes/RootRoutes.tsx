/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { Route } from "react-router-dom";

import { SuspensedOutlet } from "@/components/routes/SuspensedOutlet";
import RootLayout from "@/layout/RootLayout";

const Home = lazy(() => import("@/pages/root/Home"));
const Blocks = lazy(() => import("@/pages/root/Blocks"));
const FAQ = lazy(() => import("@/pages/root/FAQ"));
const Team = lazy(() => import("@/pages/root/Team"));
const BlockDetails = lazy(() => import("@/pages/root/BlockDetails"));

const RootRoutes = () => {
  return (
    <Route element={<RootLayout />}>
      <Route element={<SuspensedOutlet />}>
        <Route index element={<Home />} />
        <Route path="/files" element={<Blocks />} />
        <Route path="/files/:id" element={<BlockDetails />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/team" element={<Team />} />
      </Route>
    </Route>
  );
};

export default RootRoutes;
