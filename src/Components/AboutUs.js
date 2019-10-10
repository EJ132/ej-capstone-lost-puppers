import React, { Component } from 'react'
import '../Stylesheets/AboutUs.css'
import Navbar from './Navbar'
// import homebackground from '../Images/homebackground.jpg'

export default class AboutUs extends Component {
    render() {
        return (
            <div>

                <Navbar />

                <section className="banner">
                    <div className="Overlay">
                        <div className="aboutUs">
                            <h2>About Us</h2>
                            <p>Lost Puppers was first initiated as a project for a coding bootcamp, but is now
                            available for everyone to use. If you ever lose a pup or have found one this is the site
                            to come to. It is dedicated to helping families reunite with their puppies.</p>
                        </div>

                        <div className="aboutUs">
                            <h2>About The Creator</h2>
                            <p>Hey you guys! My name is EJ Gonzalez, I am 19 years old and I created Lost Puppers.
                            The reason I created this site is because I seen that there were no dedicated sites to 
                            helping people find their lost dogs. As an owner of 3 dogs and two running away at one point,
                            I know how scary it can be to lose your dog. I am hoping through this site the community can 
                            come together to help each other find their lost pets.</p>
                        </div>
                    </div>
                </section>

                <footer>&#169; EJ Gonzalez 2019</footer>
            </div>
        )
    }
}

// line 39...44 will be filled with dogCards (lost dog cards) components