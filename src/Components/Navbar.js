import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Stylesheets/Navbar.css';
import paw from '../Images/paw.png';

export default class Navbar extends Component {
    render () {
        return (
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/find">Find a Pupper</Link></li>
                <li><Link to="/login">Login</Link></li>
                <img alt="paw" src={paw}></img>
            </ul>
        )
    }
}