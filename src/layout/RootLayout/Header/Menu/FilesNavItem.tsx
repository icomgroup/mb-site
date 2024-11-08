import FeatherIcon from "feather-icons-react";
import { Nav, Dropdown, Row, Col } from "react-bootstrap";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

const FilesNavItem = () => {
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
        id="navbarLandings"
        className={classNames(isActiveRoute("/landing") ? "active" : "")}
      >
        الملفات
        <FeatherIcon
          icon="chevron-down"
          className="d-inline-block icon icon-xxs ms-1 mt-lg-0 mt-1"
        />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-lg" renderOnMount>
        <Row className="mx-0">
          <Col md={6} className="p-lg-0">
            <label className="nav-title fw-semibold fs-14 text-dark text-uppercase mb-3">
              كتلة أولى
            </label>
            <Nav as="ul" navbar={false}>
              <Nav.Item as="li">
                <NavLink
                  to="/landing/app"
                  end
                  className={classNames(
                    "nav-link",
                    ({ ...isActive }) => isActive && "active"
                  )}
                >
                  <div className="d-flex align-items-center">
                    <span className="bg-soft-primary text-primary avatar avatar-xs shadow rounded icon icon-with-bg icon-xxs me-3 flex-shrink-0">
                      <FeatherIcon
                        icon="smartphone"
                        className="icon-dual-primary"
                      />
                    </span>
                    <div className="flex-grow-1">ملف 1</div>
                  </div>
                </NavLink>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={6} className="p-lg-0">
            <label className="nav-title fw-semibold fs-14 text-dark text-uppercase mb-3">
              كتلة ثانية
            </label>
            <Nav as="ul" navbar={false}>
              <Nav.Item as="li">
                <NavLink
                  to="/landing/agency"
                  end
                  className={classNames(
                    "nav-link",
                    ({ ...isActive }) => isActive && "active"
                  )}
                >
                  <div className="d-flex align-items-center">
                    <span className="bg-soft-secondary text-secondary avatar avatar-xs shadow rounded icon icon-with-bg icon-xxs me-3 flex-shrink-0">
                      <FeatherIcon
                        icon="framer"
                        className="icon-dual-secondary"
                      />
                    </span>
                    <div className="flex-grow-1">ملف 2</div>
                  </div>
                </NavLink>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FilesNavItem;
