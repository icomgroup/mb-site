import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import PageFallback from "@/components/feedback/PageFallback";

export function SuspensedOutlet() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Outlet />
    </Suspense>
  );
}
