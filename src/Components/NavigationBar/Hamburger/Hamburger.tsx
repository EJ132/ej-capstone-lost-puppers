import React from "react";
import { Link } from "react-router-dom";

import TokenService from "../../../services/token-service";

import "./Hamburger.css";

export default function Hamburger() {
  const [show, setShow] = React.useState(false);

  const onClick = () => {
    setShow(!show);
  };

  return (
    <div
      onClick={onClick}
      className={
        show ? "hamburger_clicked" : "w-6 h-6 flex flex-col justify-evenly"
      }
    >
      <div className={!show ? "ham_line1" : "ham_line1 bg-white"} />
      <div className="ham_line2" />
      <div className={!show ? "ham_line3" : "ham_line3 bg-white"} />

      <div className={show ? "hamburger_links" : "hamburger_links_clear"}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/find">Find a Pupper</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          {TokenService.hasAuthToken() ? (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          ) : null}
          {/* <li>{props.status}</li> */}
        </ul>
      </div>
    </div>
  );
}
