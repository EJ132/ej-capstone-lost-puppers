import React, { Component } from 'react'
import '../../Stylesheets/DogTags.css'

export default class Dogtag extends Component {
    render(){
        return(
            <div className="dogTag">
                <h2>{this.props.name}</h2>
                <img src={this.props.img} alt={this.props.name}></img>
                <p>{this.props.category}</p>
                <p>{this.props.description}</p>
                <p>{this.props.dateCreated}</p>
            </div>
        )
    }
}