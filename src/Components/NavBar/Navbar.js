import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import paw from '../../Images/paw.png';
import TokenService from '../../services/token-service'

export default class Navbar extends Component {

handleLogoutClick = () => {
    TokenService.clearAuthToken()
    TokenService.clearUserName()
    }

    renderLogoutLink() {
    return (
        <Link
            onClick={this.handleLogoutClick}
            to='/'>
            Logout
        </Link>
    )
    }

    renderLoginLink() {
    return (
        <Link
            to='/login'>
            Log in
        </Link>
    )
    }

    render () {
        
        return (
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/find">Find a Pupper</Link></li>
                {TokenService.hasAuthToken() ? <li><Link to='/profile'>Profile</Link></li> : null}
                <li>{TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}</li>
                <img alt="paw" src={paw}></img>
            </ul>
        )
    }
}