import React from "react";

import NavBar from "../NavigationBar/NavigationBar";

import "./Help.css";

export default function Help() {
  return (
    <div>
      <NavBar />

      <div
        className="vh-95 p-5 d-flex flex-column justify-content-center"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <h1
          style={{
            fontSize: "4rem",
            color: "#C23A57",
            textDecoration: "underline",
            textUnderlineOffset: 20,
            marginBottom: 40,
          }}
        >
          Help
        </h1>

        <p style={{ fontSize: "1.5rem", fontWeight: "500" }}>
          Making your first post
        </p>
        <ol>
          <li>Sign Up</li>
          <li>Go to the find page</li>
          <li>Click the add a pup button</li>
          <li>
            Fill out the information accordingly *note: For the cordinates feel
            free to use a site such as
            <a
              rel="noopener noreferrer"
              href="https://www.google.com/maps"
              target="_blank"
            >
              {" "}
              Google Maps{" "}
            </a>
            or
            <a
              rel="noopener noreferrer"
              href="https://www.latlong.net"
              target="_blank"
            >
              {" "}
              LatLong
            </a>
          </li>
          <li>
            DONE! Easy as that. Now you can view your dog on the find page or in
            your profile.
          </li>
        </ol>

        <p style={{ fontSize: "1.5rem", fontWeight: "500" }}>Edit a post</p>
        <ol>
          <li>Go to your profile</li>
          <li>Click on the listing you want to edit</li>
          <li>
            {`Click on the "Name" or "Description" of your dog. *note: As of now
            you can only edit the "Name" or "Description" of your dog`}
          </li>
          <li>Hit save then your post will be updated.</li>
        </ol>

        <p style={{ fontSize: "1.5rem", fontWeight: "500" }}>Delete a post</p>
        <ol>
          <li>Go to your profile</li>
          <li>Click on the listing you want to delete</li>
          <li>Tap on delete post and it will be removed</li>
        </ol>
      </div>

      <footer>&#169; EJ Gonzalez 2019</footer>
    </div>
  );
}
