import React, { Component } from 'react'
import '../../Stylesheets/DogTags.css'
import {Link} from 'react-router-dom'

export default class Dogtag extends Component {
    render(){
        return(
            <div className="dogTag">
                <Link to={`/find/${this.props.id}`}>
                    <h2>{this.props.name}</h2>
                    <img src={this.props.img} alt={this.props.name}></img>
                    <p>{this.props.category}</p>
                    <p>{this.props.description}</p>
                    <p>{this.props.dateCreated}</p>
                </Link>
            </div>
        )
    }
}

//refactor to be a function