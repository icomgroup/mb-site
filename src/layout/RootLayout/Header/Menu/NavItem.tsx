import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import classNames from "classnames";

type Props = {
  title: string;
  link: string;
};

const NavItem = ({ title, link }: Props) => {
  return (
    <Nav.Item as="li">
      <NavLink
        to={link}
        end
        className={classNames(
          "nav-link",
          ({ ...isActive }) => isActive && "active"
        )}
      >
        {title}
      </NavLink>
    </Nav.Item>
  );
};

export default NavItem;
