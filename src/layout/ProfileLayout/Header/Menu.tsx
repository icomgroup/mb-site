import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import classNames from "classnames";

import { profileNavbarList } from "@/constants/profile-navbar-list";

const Menu = () => {
  return (
    <Nav as="ul" className="mx-auto auth-menu">
      {profileNavbarList.map((item) => (
        <Nav.Item key={item.link} as="li" className="ps-3">
          <NavLink
            end
            to={item.link}
            className={classNames(
              "nav-link",
              ({ ...isActive }) => isActive && "active"
            )}
          >
            <div className="d-flex align-items-center">
              <span className="icon-xxs ms-1 flex-shrink-0">
                <FeatherIcon icon={item.icon} className="icon-dual" />
              </span>
              <div className="flex-grow-1">{item.title}</div>
            </div>
          </NavLink>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default Menu;
