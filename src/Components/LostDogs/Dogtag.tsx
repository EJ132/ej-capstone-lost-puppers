/* eslint-disable eqeqeq */
import React from "react";
import { Link } from "react-router-dom";

import "./DogTags.css";

function DogTag(props) {
  const date = new Date(props.dateCreated);

  return (
    <div className="dogTag">
      <Link to={`/find/${props.id}`}>
        <h2>{props.name}</h2>
        <img src={props.img} alt={props.name} />
        <p>{props.category}</p>
        <p>{props.description}</p>
        <p>
          Posted: {date.getUTCFullYear()}/{date.getUTCMonth() + 1}/
          {date.getUTCDate()}
        </p>
      </Link>
    </div>
  );
}

export default DogTag;
