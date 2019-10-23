import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import paw from '../../Images/paw.png';
import TokenService from '../../services/token-service'
import Hamburger from './Hamburger/Hamburger'

export default class Navbar extends Component {

    state={
        clicked: false
    }

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

    onClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render () {

        const{clicked} = this.state
        console.log(clicked)
        console.log()

        return (
            <div>

                <Hamburger display={clicked} click={this.onClick} 
                status={ TokenService.hasAuthToken() ? <Link onClick={this.handleLogoutClick} to='/'>Logout</Link> : <Link to='/login'>Log in</Link>}/>

                <ul className="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                    <li><Link to="/find">Find a Pupper</Link></li>
                    <li><Link to='/help'>Help</Link></li>
                    {TokenService.hasAuthToken() ? <li><Link to='/profile'>Profile</Link></li> : null}
                    <li>{TokenService.hasAuthToken()
                        ? this.renderLogoutLink()
                        : this.renderLoginLink()}</li>
                    <Link to='/'><img alt="paw" src={paw}></img></Link>
                </ul>
            </div>
        )
    }
}