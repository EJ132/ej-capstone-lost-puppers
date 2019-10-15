import React, { Component } from 'react'
import '../Stylesheets/Login.css'
import paw from '../Images/paw.png'
import NavBar from './Navbar'

export default class Register extends Component {

    handleRegister = event => {
        event.preventDefault()
        const { full_name, user_name, password, re_enter_password } = event.target
    
        full_name.value = ''
        user_name.value = ''
        password.value = ''
        re_enter_password.value = ''
        // this.props.onRegistrationSuccess()
      }
      

    render(){

        return (
            <div>

                <NavBar />

                <section className="loginBG">
                    <form className="login" onSubmit={this.handleRegister}>
                        <img src={paw} alt="paw"/>
                        <label>Name</label>
                        <input placeholder="EJ Gonzalez" name="full_name" type="fullname" required></input>
                        <label>Username</label>
                        <input placeholder="puppy_lover132" name="user_name" type="user_name" required></input>
                        <label>Password</label>
                        <input placeholder="********" name="password" type="password" required></input>
                        <label>Re-enter Password</label>
                        <input placeholder="********" name="re_enter_password" type="password" required></input>
                        <button type="submit">Submit</button>
                    </form>
                    <p className="validation">{this.handleRegister}</p>
                </section>

                <footer>&#169; EJ Gonzalez 2019</footer>
            </div>
        )
    }
}