import ScrollToHashElement from "@/components/ScrollToHashElement";
import { Outlet, ScrollRestoration } from "react-router-dom";

export function WithScroll() {
  return (
    <>
      <Outlet />
      <ScrollRestoration
        getKey={({ pathname }) => {
          return pathname;
        }}
      />
      <ScrollToHashElement />
    </>
  );
}
