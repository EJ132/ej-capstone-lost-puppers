import React, { Component } from "react";
import "./Main.css";
import dogBone from "../../Images/dogBone.png";
import community from "../../Images/community.png";
import map from "../../Images/map.png";
import { Navigate, Link } from "react-router-dom";
import NavBar from "../NavBar/Navbar";
import TokenService from "../../services/token-service";

export default class Main extends Component {
  state = {
    redirect: false,
    where: "",
  };

  //redirects the page clicked on
  switchPage = (link) => {
    if (link === "login" && TokenService.hasAuthToken()) {
      link = "find";
    }

    this.setState({
      redirect: !this.state.redirect,
      where: link,
    });

    return;
  };

  render() {
    const { redirect, where } = this.state;

    //redirects the page to login
    if (redirect) {
      return <Navigate to={`/${where}`} />;
    }

    return (
      <div>
        <NavBar />

        <section className="banner">
          <div className="Overlay">
            <h2>Lost Puppers</h2>
            <p>Find your lost puppy today...</p>
            <button onClick={() => this.switchPage("login")}>
              Get started
            </button>
          </div>
        </section>

        <section className="SecondLayer">
          <div className="three_Icons">
            <div>
              <Link to="/login">
                <img alt="paw" src={dogBone}></img>
              </Link>
              <p>
                Lost your puppy, you came to the right place. Get started by
                clicking on the bone!
              </p>
            </div>
            <div>
              <Link to="/aboutus">
                <img alt="community building" src={community}></img>
              </Link>
              <p>
                Interest in how this site came to life or just want to explore
                more about the creator. Click on the racon above!
              </p>
            </div>
            <div>
              <Link to="/find">
                <img alt="map" src={map}></img>
              </Link>
              <p>Check the map to see if any puppies are wondering near you.</p>
            </div>
          </div>
        </section>

        <section className="ThirdLayer">
          <div className="Third_Overlay">
            <h2>Why use Lost Puppers?</h2>
            <p>
              Lost Puppers is the new way to help you locate your pup that may
              have gotten loose. And if you don't have a dog maybe you can help
              someone else out by finding their dog and earning a little bit of
              cash for yourself. Our pups are like our family and we will do
              anything to find them and get them back home safe. So why not work
              as a community and use Lost Puppers!
            </p>
            <div className="Main_lostDogs Row1">
              <div className="lostDogCard">
                <img
                  alt="puppy"
                  src="https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                ></img>
              </div>
              <div className="lostDogCard mobile">
                <img
                  alt="puppy"
                  src="https://images.unsplash.com/photo-1491604612772-6853927639ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                ></img>
              </div>
            </div>
            <div className="Main_lostDogs Row2">
              <div className="lostDogCard mobile">
                <img
                  alt="puppy"
                  src="https://images.unsplash.com/photo-1504826260979-242151ee45b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                ></img>
              </div>
              <div className="lostDogCard">
                <img
                  alt="puppy"
                  src="https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                ></img>
              </div>
            </div>
          </div>
        </section>

        <footer>&#169; EJ Gonzalez 2019</footer>
      </div>
    );
  }
}
