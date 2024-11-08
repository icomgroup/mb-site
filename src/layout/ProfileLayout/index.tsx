import BackToTop from "@/components/BackToTop";
import Footer from "@/layout/ProfileLayout/Footer";
import Header from "@/layout/ProfileLayout/Header";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <div className="d-flex flex-column h-screen profile">
      <Header />
      <div className="bg-gradient2 py-4 px-sm-3 flex-1">
        <Container className="mt-6 mt-lg-0" as="section">
          <Outlet />
        </Container>
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ProfileLayout;
