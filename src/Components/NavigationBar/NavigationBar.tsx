import * as React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import paw from "../../Images/paw.png";
import TokenService from "../../services/token-service";

import Hamburger from "./Hamburger/Hamburger";

import "../../index.css";

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
    <Navbar expand="lg" className="vh-10 px-3">
      <Container fluid className="h-100">
        {/* ICON AND TITLE */}
        <Navbar.Brand className="h-100">
          <Row className="h-100 align-items-center">
            <Col className="h-100 p-2">
              <img alt="paw" src={paw} className="h-100" />
            </Col>
            <Col>
              <h1 className="text-light">Lost Puppers</h1>
            </Col>
          </Row>
        </Navbar.Brand>

        <Nav>
          {/* HOME LINK */}
          <Nav.Link>
            <Link
              className="text-light h6 font-weight-bold text-uppercase text-decoration-none"
              to="/"
            >
              Home
            </Link>
          </Nav.Link>

          {/* FINDER A PUPPER LINK */}
          <Nav.Link>
            <Link
              className="text-light h6 font-weight-bold text-uppercase text-decoration-none"
              to="/find"
            >
              Find a Pupper
            </Link>
          </Nav.Link>

          {/* ABOUT US LINK */}
          <Nav.Link>
            <Link
              className="text-light h6 text-uppercase text-decoration-none"
              to="/aboutus"
            >
              About Us
            </Link>
          </Nav.Link>

          {/* HELP LINK */}
          <Nav.Link>
            <Link
              className="text-light h6 text-uppercase text-decoration-none"
              to="/help"
            >
              Help
            </Link>
          </Nav.Link>

          {/* PROFILE LINK OR LOGIN */}
          {TokenService.hasAuthToken() ? (
            <Nav.Link>
              <Link
                className="text-light h6 text-uppercase text-decoration-none"
                to="/profile"
              >
                Profile
              </Link>
            </Nav.Link>
          ) : (
            <Nav.Link>
              <Link
                className="text-link h6 text-uppercase text-decoration-none"
                to="/login"
              >
                Login
              </Link>
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

// <div>
//   <Hamburger
//     display={clicked}
//     click={() => onClick()}
//     status={
//       TokenService.hasAuthToken() ? (
//         <Link onClick={() => handleLogoutClick()} to="/">
//           Logout
//         </Link>
//       ) : (
//         <Link to="/login">Log in</Link>
//       )
//     }
//   />

//   <ul className="navbar">
//     <li>
//       <Link to="/">Home</Link>
//     </li>
//     <li>
//       <Link to="/aboutus">About Us</Link>
//     </li>
//     <li>
//       <Link to="/find">Find a Pupper</Link>
//     </li>
//     <li>
//       <Link to="/help">Help</Link>
//     </li>
//     {TokenService.hasAuthToken() ? (
//       <li>
//         <Link to="/profile">Profile</Link>
//       </li>
//     ) : null}
//     <li>
//       {TokenService.hasAuthToken() ? renderLogoutLink() : renderLoginLink()}
//     </li>
//     <Link to="/">
//       <img alt="paw" src={paw} />
//     </Link>
//   </ul>
// </div>
