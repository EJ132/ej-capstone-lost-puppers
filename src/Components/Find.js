import React, { Component } from 'react'
import '../Stylesheets/Main.css'
import Navbar from './Navbar'
import '../Stylesheets/Find.css'

export default class Find extends Component {
    render() {
        return (
            <div>

                <Navbar />

                <div className="findContainer">
                    <div className="sidebar">
                        <h2>Sort</h2>
                    </div>

                    <div className="lostdogs">
                        <h2>Lost Pups</h2>
                    </div>
                </div>

                <footer>&#169; EJ Gonzalez 2019</footer>
            </div>
        )
    }
}

// line 39...44 will be filled with dogCards (lost dog cards) components