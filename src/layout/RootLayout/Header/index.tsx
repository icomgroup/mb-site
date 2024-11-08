import { useEffect, useRef } from "react";
import { Container, Navbar } from "react-bootstrap";

import Menu from "./Menu";
import Logo from "@/components/logo/Logo";
import { useLocation } from "react-router-dom";

const Header = () => {
  // on scroll add navbar class
  const { pathname } = useLocation();
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const navbar = document.getElementById("sticky");
    window.addEventListener("scroll", (e) => {
      e.preventDefault();
      if (navbar) {
        if (
          document.body.scrollTop >= 240 ||
          document.documentElement.scrollTop >= 240
        ) {
          navbar.classList.add("navbar-sticky");
        } else {
          navbar.classList.remove("navbar-sticky");
        }
      }
    });
  }, []);

  useEffect(() => {
    const nav = document.getElementById("responsive-navbar-nav");
    if (ref.current && nav?.classList?.contains("show")) ref.current.click();
  }, [pathname]);

  return (
    <header>
      <Navbar id="sticky" collapseOnSelect expand="lg" className="main-header">
        <Container>
          <Navbar.Toggle ref={ref} aria-controls="responsive-navbar-nav" />
          <Logo className="me-auto nav-logo" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Menu />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
