import React, { Component } from 'react'
import '../Stylesheets/Main.css'
import Navbar from './Navbar'
import dogBone from '../Images/dogBone.png'
import community from '../Images/community.png'
import map from '../Images/map.png'

export default class Main extends Component {
    render() {
        return (
            <div>

                <Navbar />

                <section className="banner">
                    <div className="Overlay">
                        <h2>Lost Puppers</h2>
                        <p>Find your lost puppy today...</p>
                        <button>Get started</button>
                    </div>
                </section>

                <section className="SecondLayer">
                    <div className="three_Icons">
                        <img alt="paw" src={dogBone}></img>
                        <img alt="community building" src={community}></img>
                        <img alt="map" src={map}></img>
                    </div>
                    <div className="three_text">
                        <p>Lost your puppy, you came to the right place. Get started by clicking on the bone!</p>
                        <p>Dont have a puppy or maybe found one, click the community icon to find out more.</p>
                        <p>Check the map to see if any puppies are wondering near you.</p>
                    </div>
                </section>

                <footer>&#169; EJ Gonzalez 2019</footer>
            </div>
        )
    }
}