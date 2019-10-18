/* eslint-disable eqeqeq */
import '../../Stylesheets/DogTags.css'
import {Link} from 'react-router-dom'
import React from 'react'

function DogTag(props) {

    let date = new Date(props.dateCreated)

    return (
            <div className="dogTag">
                <Link to={`/find/${props.id}`}><h2>{props.name}</h2></Link>
                    <img src={props.img} alt={props.name}></img>
                    <p>{props.category}</p>
                    <p>{props.description}</p>
                    <p>Posted: {date.getUTCFullYear()}/{date.getUTCMonth()}/{date.getUTCDate()}</p>
            </div>
        )
}

export default DogTag;