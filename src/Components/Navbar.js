import React, { Component } from 'react';
import '../Stylesheets/Navbar.css';
import paw from '../Images/paw.png';

export default class Navbar extends Component {
    render () {
        return (
            <ul className="navbar">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Find a Pupper</a></li>
                <li><a href="#">Login</a></li>
                <img src={paw}></img>
            </ul>
        )
    }
}