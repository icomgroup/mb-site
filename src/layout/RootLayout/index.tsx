import BackToTop from "@/components/BackToTop";
import Footer from "@/layout/RootLayout/Footer";
import Header from "@/layout/RootLayout/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div className="d-flex flex-column h-screen">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
};

export default RootLayout;
