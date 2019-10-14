import React, { Component } from 'react'
import NavBar from './Navbar'
import '../Stylesheets/Login.css'
import paw from '../Images/paw.png'

export default class Register extends Component {
    render(){
        return (
            <div>
                <NavBar />

                <section className="loginBG">
                    <form className="login" onSubmit={this.handleSubmitLogin}>
                        <img src={paw} alt="paw"/>
                        <label>Name</label>
                        <input placeholder="EJ Gonzalez" name="fullname" type="fullname" required></input>
                        <label>Username</label>
                        <input placeholder="puppy_lover132" name="user_name" type="user_name" required></input>
                        <label>Password</label>
                        <input placeholder="********" name="password" type="password" required></input>
                        <label>Re-enter Password</label>
                        <input placeholder="********" name="re-enter_password" type="password" required></input>
                        <button type="submit">Submit</button>
                    </form>
                </section>

                <footer>&#169; EJ Gonzalez 2019</footer>
            </div>
        )
    }
}