import React, { Component } from 'react';
import '../Stylesheets/Navbar.css';
import paw from '../Images/paw.png';

export default class Navbar extends Component {
    render () {
        return (
            <ul className="navbar">
                <li><a href="/">Home</a></li>
                <li><a href="/aboutus">About Us</a></li>
                <li><a href="/find">Find a Pupper</a></li>
                <li><a href="/login">Login</a></li>
                <img alt="paw" src={paw}></img>
            </ul>
        )
    }
}