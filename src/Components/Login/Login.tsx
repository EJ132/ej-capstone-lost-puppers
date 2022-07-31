import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../Home/Home";

import config from "../../config";
import history from "../../Context/history";
import paw from "../../Images/paw.png";
import AuthApiService from "../../services/auth-api-service";
import TokenService from "../../services/token-service";
import NavBar from "../NavigationBar/NavigationBar";

import "./Login.css";

export default class Login extends Component {
  state = {
    error: null,
  };

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        TokenService.saveUserName(user_name.value);
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        fetch(`${config.API_ENDPOINT}/profile/${TokenService.getUserName()}`, {
          headers: { authorization: `bearer ${TokenService.getAuthToken()}` },
        })
          .then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
          )
          .then((resJSON) => {
            TokenService.saveUserId(resJSON.id);
          });
        history.push("/");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;

    return (
      <div>
        <NavBar />

        <section className="loginBG">
          <div>
            <form className="login" onSubmit={this.handleSubmitJwtAuth}>
              <section className="loginError" role="alert">
                {error && <p className="red">{error}</p>}
              </section>
              <img src={paw} alt="paw" />
              <label>Username</label>
              <input
                placeholder="puppy_lover132"
                name="user_name"
                type="user_name"
                required
              />
              <label>Password</label>
              <input
                placeholder="********"
                name="password"
                type="password"
                required
              />
              <button type="submit">SignIn</button>
            </form>
            <Link to="/register">Sign Up</Link>
          </div>
        </section>

        <footer>&#169; EJ Gonzalez 2019</footer>
      </div>
    );
  }
}
