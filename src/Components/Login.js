import React, { Component } from 'react'
import '../Stylesheets/Main.css'
import '../Stylesheets/Login.css'
import paw from '../Images/paw.png'
import {Link} from 'react-router-dom'
import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service'
import NavBar from './Navbar'
import history from '../Context/history'

export default class Login extends Component {

    static defaultProps = {
        onLoginSuccess: () => {}
      }

    state = {
        error: null
    }
    
    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { user_name, password } = ev.target
     
        AuthApiService.postLogin({
          user_name: user_name.value,
          password: password.value,
        })
          .then(res => {
            user_name.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.props.onLoginSuccess()
            history.push('/')
          })
          .catch(res => {
            this.setState({ error: res.error })
          })
      }

    render() {
        
        const {error} = this.state;

        return (
            <div>

              <NavBar />

                <section className="loginBG">
                    <div>
                        <form className="login" onSubmit={this.handleSubmitJwtAuth}>
                            <section className="loginError" role='alert'>
                            {error && <p className='red'>{error}</p>}
                            </section>
                            <img src={paw} alt="paw"/>
                            <label>Username</label>
                            <input placeholder="puppy_lover132" name="user_name" type="user_name" required></input>
                            <label>Password</label>
                            <input placeholder="********" name="password" type="password" required></input>
                            <button type="submit">SignIn</button>
                        </form>
                    <Link to="/register">Sign Up</Link>
                    </div>
                </section>

                <footer>&#169; EJ Gonzalez 2019</footer>
            </div>
        )
    }
}

// line 39...44 will be filled with dogCards (lost dog cards) components