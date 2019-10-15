import React, { Component } from 'react'
import '../Stylesheets/AboutUs.css'
import NavBar from './Navbar'

export default class AboutUs extends Component {
    render() {
        return (
            <div>

                <NavBar />

                <section className="banner_aboutUs">
                    <div className="Overlay_aboutUs">
                        <h2>About Us || The Creator</h2>
                        <p>
                        Hey you guys! My name is EJ Gonzalez, I am 19 years old and I created Lost Puppers.
                        The reason I created this site is because I seen that there were no dedicated sites to 
                        helping people find their lost dogs. As an owner of 3 dogs and two running away at one point,
                        I know how scary it can be to lose your dog. I am hoping through this site, the community can 
                        come together to help each other find their lost pets.
                        </p>
                
                        <p>
                        Lost Puppers was first initiated as a project for a coding bootcamp, but is now
                        available for everyone to use. If you ever lose a pup or have found one this is the site
                        to come to. It is dedicated to helping families reunite with their lost puppies. We all know
                        how scary it can be to come home and your dog is missing. Take your first
                        steps now by signing up and if this site was able to help you please feel free to donate. 
                        </p>
                    </div>
                </section>
                <footer>&#169; EJ Gonzalez 2019</footer>
            </div>
        )
    }
}

// line 39...44 will be filled with dogCards (lost dog cards) components

// <section className="banner_aboutUs">
//     <div className="Overlay_aboutUs">
//         <h2>About Us || The Creator</h2>
//         <p>
//         Hey you guys! My name is EJ Gonzalez, I am 19 years old and I created Lost Puppers.
//         The reason I created this site is because I seen that there were no dedicated sites to 
//         helping people find their lost dogs. As an owner of 3 dogs and two running away at one point,
//         I know how scary it can be to lose your dog. I am hoping through this site, the community can 
//         come together to help each other find their lost pets.
//         </p>

//         <p>
//         Lost Puppers was first initiated as a project for a coding bootcamp, but is now
//         available for everyone to use. If you ever lose a pup or have found one this is the site
//         to come to. It is dedicated to helping families reunite with their lost puppies. We all know
//         how scary it can be to come home and your dog is missing. Take your first
//         steps now by signing up and if this site was able to help you please feel free to donate. 
//         </p>
//     </div>
// </section>