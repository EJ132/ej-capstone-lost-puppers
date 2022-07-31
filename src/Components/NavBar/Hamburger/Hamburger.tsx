import React from "react";
import { Link } from "react-router-dom";

import paw from "../../../Images/paw.png";
import TokenService from "../../../services/token-service";

import "./Hamburger.css";

export default function Hamburger(props) {
  return (
    <div className="hamburger_nav">
      <Link to="/">
        <img alt="paw" src={paw} />
      </Link>
      <div
        onClick={props.click}
        className={props.display ? "hamburger_clicked" : "hamburger"}
      >
        <div className="ham_line1" />
        <div className="ham_line2" />
        <div className="ham_line3" />
        <div
          className={
            props.display ? "hamburger_links" : "hamburger_links_clear"
          }
        >
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
            <li>{props.status}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
