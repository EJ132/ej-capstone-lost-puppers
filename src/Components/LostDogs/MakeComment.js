import React from 'react'

export default function MakeComment(props){
    return (
        <li key={props.id}>
            <h4>{props.user_name}</h4>
            <p>{props.comment}</p>
            <p id="comment_date">{props.date_created}</p>
        </li>
    )
}