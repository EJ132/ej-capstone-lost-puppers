import React, { Component } from 'react'
import '../Stylesheets/Main.css'
import Navbar from './Navbar'
import '../Stylesheets/Login.css'
import paw from '../Images/paw.png'

export default class Login extends Component {

    handleSubmitLogin = (event) => {
        event.preventDefault()
        const {user_name, password} = event.target
        const User = {user_name: user_name.value, password: password.value}
        console.log(User)

        // TokenService.saveAuthToken(
        //     TokenService.makeBasicAuthToken(User.user_name, User.password)
        //   )

        user_name.value = ''
        password.value = ''
    }

    render() {
        return (
            <div>

                <Navbar />

                <section className="loginBG">
                    <form className="login" onSubmit={this.handleSubmitLogin}>
                        <img src={paw} alt="paw"/>
                        <label>Username</label>
                        <input placeholder="puppy_lover132" name="user_name" type="user_name" required></input>
                        <label>Password</label>
                        <input placeholder="********" name="password" type="password" required></input>
                        <button type="submit">SignIn</button>
                    </form>
                </section>

                <footer>&#169; EJ Gonzalez 2019</footer>
            </div>
        )
    }
}

// line 39...44 will be filled with dogCards (lost dog cards) components