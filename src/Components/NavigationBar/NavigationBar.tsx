import * as React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import LostPuppersSVG from "../../Assets/lostpuppers.svg";
import TokenService from "../../services/token-service";

export default function NavigationBar() {
  const [clicked, setClicked] = React.useState(false);

  function handleLogoutClick() {
    TokenService.clearAuthToken();
    TokenService.clearUserName();
  }

  function renderLogoutLink() {
    return (
      <Link onClick={() => handleLogoutClick()} to="/">
        Logout
      </Link>
    );
  }

  function renderLoginLink() {
    return <Link to="/login">Log in</Link>;
  }

  function onClick() {
    setClicked(!clicked);
  }

  return (
    <Navbar sticky="top" expand="md" className="vh-5 py-2">
      <Container fluid className="h-100 pe-2 justify-content-center">
        <Row className="h-100 w-100">
          {/* ICON AND TITLE */}
          <Col className="h-100 p-0 d-flex align-items-center" md={2}>
            <Navbar.Brand className="p-0">
              <Link to="/" className="p-0">
                <img
                  alt="lost puppers logo"
                  src={LostPuppersSVG}
                  style={{ width: 72 }}
                />
              </Link>
            </Navbar.Brand>
          </Col>

          <Col
            className="h-100 align-items-center d-flex justify-content-end"
            md={10}
          >
            <Nav>
              {/* HOME LINK */}
              <Nav.Link className="p-0">
                <Link
                  className="px-2 w-100 h-100 d-flex align-items-center text-dark h6 font-weight-bold text-uppercase text-decoration-none"
                  to="/"
                >
                  Home
                </Link>
              </Nav.Link>

              {/* FINDER A PUPPER LINK */}
              <Nav.Link className="p-0">
                <Link
                  className="px-2 w-100 h-100 d-flex align-items-center text-dark h6 font-weight-bold text-uppercase text-decoration-none"
                  to="/find"
                >
                  Find a Pupper
                </Link>
              </Nav.Link>

              {/* ABOUT US LINK */}
              <Nav.Link className="p-0">
                <Link
                  className="px-2 w-100 h-100 d-flex align-items-center text-dark h6 font-weight-bold text-uppercase text-decoration-none"
                  to="/aboutus"
                >
                  About Us
                </Link>
              </Nav.Link>

              {/* HELP LINK */}
              <Nav.Link className="p-0">
                <Link
                  className="px-2 w-100 h-100 d-flex align-items-center text-dark h6 font-weight-bold text-uppercase text-decoration-none"
                  to="/help"
                >
                  Help
                </Link>
              </Nav.Link>

              {/* PROFILE LINK OR LOGIN */}
              {TokenService.hasAuthToken() ? (
                <Nav.Link className="p-0">
                  <Link
                    className="px-2 w-100 h-100 d-flex align-items-center text-dark h6 font-weight-bold text-uppercase text-decoration-none"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </Nav.Link>
              ) : (
                <Nav.Link className="p-0">
                  <Link
                    className="px-2 w-100 h-100 d-flex align-items-center text-primary-link h6 font-weight-bold text-uppercase text-decoration-none"
                    to="/login"
                  >
                    Login
                  </Link>
                </Nav.Link>
              )}
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
