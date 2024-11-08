import { Nav } from "react-bootstrap";
// import FilesNavItem from "@/layout/RootLayout/Header/FilesNavItem";
import AuthButton from "@/layout/RootLayout/Header/AuthButton";
import { navbarList } from "@/constants/navbar-list";
import NavItem from "@/layout/RootLayout/Header/Menu/NavItem";

const Menu = () => {
  return (
    <Nav as="ul" className="align-items-lg-center me-auto">
      {navbarList.map((item) => (
        <NavItem key={item.link} link={item.link} title={item.title} />
      ))}
      {/* <FilesNavItem /> */}
      <AuthButton />
    </Nav>
  );
};

export default Menu;
