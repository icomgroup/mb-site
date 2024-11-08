import FeatherIcon from "feather-icons-react";
import { Dropdown, Nav } from "react-bootstrap";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

type Props = {
  title: string;
  subLinks: [{ title: string; link: string }];
};

const DropdownNavItem = ({ title, subLinks }: Props) => {
  const isActiveRoute = (path: string) => {
    if (location.pathname) {
      return location.pathname.includes(path);
    }
    return false;
  };

  return (
    <Dropdown as={"li"} className="nav-item">
      <Dropdown.Toggle
        as={Nav.Link}
        id="navbarDocs"
        className={classNames(
          isActiveRoute("/docs/introduction") ||
            isActiveRoute("/docs/bootstrap") ||
            isActiveRoute("/docs/change-log")
            ? "active"
            : ""
        )}
      >
        {title}
        <FeatherIcon
          icon="chevron-down"
          className="d-inline-block icon icon-xxs ms-1 mt-lg-0 mt-1"
        />
      </Dropdown.Toggle>

      <Dropdown.Menu renderOnMount>
        <Nav as={"ul"} navbar={false}>
          {subLinks.map((item) => (
            <Nav.Item as="li" key={item.link}>
              <NavLink
                to={item.link}
                end
                className={classNames(
                  "nav-link",
                  ({ ...isActive }) => isActive && "active"
                )}
              >
                {item.title}
              </NavLink>
            </Nav.Item>
          ))}
        </Nav>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownNavItem;
