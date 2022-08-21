import React from "react";
import { Link } from "react-router-dom";

import "../Home/Home";

import LostPuppersSVG from "../../Assets/lostpuppers.svg";
import config from "../../config";
import history from "../../Context/history";
import AuthApiService from "../../services/auth-api-service";
import TokenService from "../../services/token-service";
import NavBar from "../NavigationBar/NavigationBar";

import "./Login.css";

export default function Login() {
  const [error, setError] = React.useState(null);

  const handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    setError({ error: null });
    // eslint-disable-next-line @typescript-eslint/naming-convention
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
          .then((profileRes) =>
            !profileRes.ok
              ? profileRes.json().then((e) => Promise.reject(e))
              : profileRes.json()
          )
          .then((resJSON) => {
            TokenService.saveUserId(resJSON.id);
          });
        history.push("/");
      })
      .catch((res) => {
        setError({ error: res.error });
      });
  };

  return (
    <div>
      <NavBar />

      <div
        className="vh-95 pb-5 d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <form className="d-flex flex-column" onSubmit={handleSubmitJwtAuth}>
          {error && <p className="red">{error}</p>}

          <img
            src={LostPuppersSVG}
            alt="lost puppers logo"
            style={{ width: 250 }}
          />

          <div className="d-flex flex-column pb-2">
            <label>Username</label>
            <input
              placeholder="puppy_lover132"
              name="user_name"
              type="user_name"
              required
              className="mt-1 py-2 px-3"
              // Glass morph effect
              style={{
                borderRadius: "0.25rem",
                border: "1px solid #c23a57",
                boxShadow: "0 0 0 0.15rem rgb(194, 58, 87, 0.25)",
                backgroundColor: "rgba(194,58,87,.075)",
              }}
            />
          </div>

          <div className="d-flex flex-column pb-2">
            <label>Password</label>
            <input
              placeholder="********"
              name="password"
              type="password"
              required
              className="mt-1 py-2 px-3"
              style={{
                borderRadius: "0.25rem",
                border: "1px solid #c23a57",
                boxShadow: "0 0 0 0.15rem rgb(194, 58, 87, 0.25)",
                backgroundColor: "rgba(194,58,87,.075)",
              }}
            />
          </div>

          <button className="mt-3 btn btn-primary" type="submit">
            SignIn
          </button>
        </form>
      </div>

      {/* <div className="vh-100">
        <form className="" onSubmit={handleSubmitJwtAuth}>
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
      </div> */}

      <footer>&#169; EJ Gonzalez 2019</footer>
    </div>
  );
}
