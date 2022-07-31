import * as React from "react";
import "../Login/Login.css";
import paw from "../../Images/paw.png";
import NavBar from "../NavBar/Navbar";
import AuthApiService from "../../services/auth-api-service";
import history from "../../Context/history";

export default class Register extends React.Component {
  state = {
    error: null,
  };

  handleRegister = (event) => {
    event.preventDefault();
    const { fullname, user_name, password, re_enter_password } = event.target;

    this.setState({ error: null });

    // eslint-disable-next-line eqeqeq
    if (password.value !== re_enter_password.value) {
      return this.setState({
        error: "Please enter matching passwords",
      });
    }

    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      fullname: fullname.value,
    })
      .then((user) => {
        fullname.value = "";
        user_name.value = "";
        password.value = "";
        re_enter_password.value = "";
        // this.props.onRegistrationSuccess()
      })
      .then(() => history.push("/login"))
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
          <form className="login" onSubmit={this.handleRegister}>
            <section className="regError" role="alert">
              {error && <p className="red">{error}</p>}
            </section>
            <img src={paw} alt="paw" />
            <label>Name</label>
            <input
              placeholder="EJ Gonzalez"
              name="fullname"
              type="text"
              required
            ></input>
            <label>Username</label>
            <input
              placeholder="puppy_lover132"
              name="user_name"
              type="user_name"
              required
            ></input>
            <label>Password</label>
            <input
              placeholder="********"
              name="password"
              type="password"
              required
            ></input>
            <label>Re-enter Password</label>
            <input
              placeholder="********"
              name="re_enter_password"
              type="password"
              required
            ></input>
            <button type="submit">Submit</button>
          </form>
          {/* <p className="validation">{this.handleRegister}</p> */}
        </section>

        <footer>&#169; EJ Gonzalez 2019</footer>
      </div>
    );
  }
}
