import * as React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import paw from "../../Images/paw.png";
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
    <Navbar expand="md" className="vh-5 my-3">
      <Container fluid className="h-100 ps-4 pe-2 justify-content-center">
        <Row className="h-100 w-100">
          {/* ICON AND TITLE */}
          <Col className="h-100" md={2}>
            <Navbar.Brand className="h-100">
              <Link to="/" className="h-100">
                <img alt="paw" src={paw} className="h-100" />
              </Link>
            </Navbar.Brand>
          </Col>

          <Col
            className="h-100 align-items-center d-flex justify-content-end"
            md={10}
          >
            <Nav>
              {/* HOME LINK */}
              <Nav.Link className="mx-1">
                <Link
                  className="text-secondary-link h6 font-weight-bold text-uppercase text-decoration-none"
                  to="/"
                >
                  Home
                </Link>
              </Nav.Link>

              {/* FINDER A PUPPER LINK */}
              <Nav.Link className="mx-1">
                <Link
                  className="text-secondary-link h6 font-weight-bold text-uppercase text-decoration-none"
                  to="/find"
                >
                  Find a Pupper
                </Link>
              </Nav.Link>

              {/* ABOUT US LINK */}
              <Nav.Link className="mx-1">
                <Link
                  className="text-secondary-link h6 text-uppercase text-decoration-none"
                  to="/aboutus"
                >
                  About Us
                </Link>
              </Nav.Link>

              {/* HELP LINK */}
              <Nav.Link className="mx-1">
                <Link
                  className="text-secondary-link h6 text-uppercase text-decoration-none"
                  to="/help"
                >
                  Help
                </Link>
              </Nav.Link>

              {/* PROFILE LINK OR LOGIN */}
              {TokenService.hasAuthToken() ? (
                <Nav.Link className="mx-1">
                  <Link
                    className="text-secondary-link h6 text-uppercase text-decoration-none"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </Nav.Link>
              ) : (
                <Nav.Link className="mx-1">
                  <Link
                    className="text-primary-link h6 text-uppercase text-decoration-none"
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
