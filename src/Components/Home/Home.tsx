import * as React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

import community from "../../Assets/community.png";
import dogBone from "../../Assets/dogBone.png";
import LostPuppersSVG from "../../Assets/lostpuppers.svg";
import map from "../../Assets/map.png";
import TokenService from "../../services/token-service";
import NavBar from "../NavigationBar/NavigationBar";

import "./Home.css";

// const LostPuppersSVG = require("../../Assets/lostpuppers.svg");

export default function Home() {
  const [redirect, setRedirect] = React.useState(false);
  const [where, setWhere] = React.useState("");

  // redirects the page clicked on
  function switchPage(link) {
    if (link === "login" && TokenService.hasAuthToken()) {
      setRedirect(true);
      setWhere("find");
    }
  }

  if (redirect) {
    return <Navigate to={`/${where}`} />;
  }

  return (
    <div>
      <NavBar />

      <div className="vh-95" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="lg:mx-5 px-5 d-flex flex-col lg:flex-row justify-content-center align-items-center h-90">
          <img
            src={LostPuppersSVG}
            style={{ minWidth: 600, maxWidth: 600 }}
            alt="Lost Puppers"
          />

          <div style={{ flex: 0.8 }}>
            <h1 className="header">Lost Puppers</h1>
            <p className="subHeader mt-2 md:mt-0">
              Welcome, {`let's`} get started:
            </p>

            <div className="flex flex-row justify-center md:justify-start items-center mt-2 md:mt-0">
              <button
                type="button"
                onClick={() => switchPage("login")}
                className="me-3 my-2 actionButton"
              >
                Lost a Pup
              </button>
              <button
                type="button"
                className="actionButton"
                onClick={() => switchPage("login")}
              >
                Found a Pup
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="SecondLayer">
        <div className="three_Icons">
          <div>
            <Link to="/login">
              <img alt="paw" src={dogBone} />
            </Link>
            <p>
              Lost your puppy, you came to the right place. Get started by
              clicking on the bone!
            </p>
          </div>
          <div>
            <Link to="/aboutus">
              <img alt="community building" src={community} />
            </Link>
            <p>
              Interested in how this site came to life or just want to explore
              more about the creator. Click on the racon above!
            </p>
          </div>
          <div>
            <Link to="/find">
              <img alt="map" src={map} />
            </Link>
            <p>Check the map to see if any puppies are wondering near you.</p>
          </div>
        </div>
      </section>

      <div
        className="flex flex-col lg:flex-row items-center section_3_container p-5"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="lg:mr-10" style={{ flex: 1 }}>
          <h1 className="section_3_header">Why use Lost Puppers?</h1>
          <p style={{ fontSize: "1.5rem" }}>
            Lost Puppers is the new way to help you locate your pup that may
            have gotten loose. And if you {`don't`} have a dog maybe you can
            help someone else out by finding their dog. Our pups are family and
            we will do anything to find them and get them back home safe. So why
            not work as a community and use Lost Puppers!
          </p>
        </div>

        <div className="flex flex-1 flex-col items-center">
          <div className="flex flex-row w-100 justify-center my-5">
            <img
              alt="puppy"
              src="https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              className="me-5 roundedPuppy"
            />

            <img
              alt="puppy"
              src="https://images.unsplash.com/photo-1491604612772-6853927639ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              className="roundedPuppy"
            />
          </div>

          <div className="d-flex flex-row w-100 justify-content-center">
            <img
              alt="puppy"
              src="https://images.unsplash.com/photo-1504826260979-242151ee45b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              className="me-5 roundedPuppy"
            />

            <img
              alt="puppy"
              src="https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              className="roundedPuppy"
            />
          </div>
        </div>
      </div>

      <footer>&#169; EJ Gonzalez 2019</footer>
    </div>
  );
}
