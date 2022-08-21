/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

import aboutMe from "../../Assets/aboutMe.jpg";
import NavBar from "../NavigationBar/NavigationBar";

import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div>
      <NavBar />

      <div
        className="vh-95 p-5 d-flex flex-row"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div
          className="d-flex flex-column justify-content-center"
          style={{ flex: 1 }}
        >
          <h1
            style={{
              fontSize: "4rem",
              textDecoration: "underline",
              color: "#C23A57",
              textUnderlineOffset: 20,
              marginBottom: 40,
            }}
          >
            My Story
          </h1>
          <p style={{ fontSize: "1.5rem" }}>
            Howdy puppy owners! My name is EJ Gonzalez, I am 21 years old and I
            created Lost Puppers. The idea of creating this site sparked when I
            noticed that there were no easy to use dedicated sites for helping
            people find their lost dogs. As an owner of 3 dogs and two running
            away at one point, I know how scary it can be to lose your best
            friend. I am hoping that through this site, the community can come
            together to help each other find their lost pets.
          </p>

          <p style={{ fontSize: "1.5rem" }}>
            If you ever lose a pup or found one this is the site to come to. It
            is dedicated to helping families reunite with their lost puppies.
            Take your first steps now by signing up and if this site was able to
            help you please feel free to donate.
          </p>
        </div>

        <div
          className="d-flex align-items-center justify-content-center"
          style={{ width: "40%" }}
        >
          <img
            src={aboutMe}
            alt="portrait of husky"
            style={{ width: 400, borderRadius: 8 }}
          />
        </div>
      </div>
      <footer>&#169; EJ Gonzalez 2019</footer>
    </div>
  );
}
