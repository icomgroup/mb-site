import { Container, Navbar } from "react-bootstrap";
import Menu from "@/layout/ProfileLayout/Header/Menu";
import LogoutButton from "@/components/buttons/LogoutButton";
import Logo from "@/components/logo/Logo";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const Header = () => {
  const { pathname } = useLocation();
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const nav = document.getElementById("topnav-menu-content4");
    if (ref.current && nav?.classList?.contains("show")) ref.current.click();
  }, [pathname]);

  return (
    <header>
      <Navbar
        id={"sticky"}
        collapseOnSelect
        expand="lg"
        className="topnav-menu profile-navbar py-lg-5"
      >
        <Container>
          <Logo className="logo me-3 me-sm-0 nav-logo" />
          <Navbar.Toggle
            ref={ref}
            className="ms-3"
            aria-controls="topnav-menu-content4"
          />

          <Navbar.Collapse id="topnav-menu-content4" className="bg-white">
            <Menu />
            <LogoutButton className="me-5 mx-sm-0 my-3 my-sm-0" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
