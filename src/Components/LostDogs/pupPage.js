/* eslint-disable eqeqeq */
import React, { Component } from 'react'
import Navbar from '../Navbar'
import config from '../../config'
import TokenService from '../../services/token-service'
import MakeComment from './MakeComment'
import '../../Stylesheets/pupPage.css'
import history from '../../Context/history'
import AuthApiService from '../../services/auth-api-service'


export default class pupPage extends Component {

    state = {
        specDogTag: {},
        comments: [],
        error: null
    }

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/pups/${this.props.match.params.id}`, {
            headers: {'authorization': `bearer ${TokenService.getAuthToken()}`},
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
        )
        .then(resJSON => {
            this.setState({
                specDogTag: resJSON
            })
            this.timeRead()
        })

        fetch(`${config.API_ENDPOINT}/pups/${this.props.match.params.id}/comments`, {
            headers: {'authorization': `bearer ${TokenService.getAuthToken()}`},
        })
            .then(res => 
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
            .then(resJSON => {
                this.setState({
                    comments: resJSON
                })
            })

        this.scrollToBottom()

        return;
    }

    componentDidUpdate(){
        this.scrollToBottom()
    }

    goBack = () => {
        history.push('/find')
    }

    handleDelete = cardId => {
        fetch(`${config.API_ENDPOINT}/pups/${cardId}`, {
        method: 'DELETE',
        headers: { 'authorization': `bearer ${TokenService.getAuthToken()}`}
        })
        .then(res => {
            history.push('/profile')
            return;
            })
    }

    timeRead = obj => {
        let date = new Date(obj);
        let year = date.getUTCFullYear();
        let month = date.getUTCMonth();
        let day = date.getUTCDate();

        return `${year}/${month + 1}/${day}`
    }

    handleComment = ev => {
        ev.preventDefault();
        const {comment} = ev.target

        AuthApiService.postComment({
            pup_id: this.props.match.params.id,
            comment: comment.value
        })
            .then(pup => {
                comment.value = ''
            })
            .then(() => this.componentDidMount())
            .catch(res => {this.setState({error: res.error})})
    }

    scrollToBottom = messageView => {
        let element = document.getElementById('commentSection')
        element.scrollTop = element.scrollHeight;
    }

    handleEditComment = ev => {
        const target = ev.target;
        const value = target.value;
        const name = target.name;

        console.log(value)

        this.setState({
            specDogTag: {
                ...this.state.specDogTag,
                [name]: value
            }
        })
    }

    handleEditCommentSubmit = event => {
        event.preventDefault()
        console.log(this.state.specDogTag)

        const values = JSON.stringify({name: this.state.specDogTag.name, description: this.state.specDogTag.description})
        console.log(values)

        fetch(`${config.API_ENDPOINT}/pups/${this.props.match.params.id}`, {
            headers: {'authorization': `bearer ${TokenService.getAuthToken()}`,
                      'content-type': 'application/json' },
            method: 'PATCH',
            body: values,
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
        )

        console.log('Handle edit comment submission')
    }

    render(){
        return(
            <div className="pupPage_main">
                <Navbar />

                <div className="pupContainer">

                <button id="backBtn" onClick={this.goBack}>Back</button>

                {TokenService.getUserId() == this.state.specDogTag.owner ? 
                    <div className="pupPage">
                        <form onSubmit={this.handleEditCommentSubmit}>
                            <input id='name' type='text' onChange={this.handleEditComment} name='name' ref='name' value={this.state.specDogTag.name}></input>
                            <img alt={this.state.specDogTag.description} src={this.state.specDogTag.image}/>
                            <p>{this.state.specDogTag.category}</p>
                            <p id="pupPage_date">Posted: {this.timeRead(this.state.specDogTag.date_created)}</p>
                            <textarea id="EDIT_pupPage_desc" type='text' onChange={this.handleEditComment} name='description' ref='description' value={this.state.specDogTag.description}></textarea>
                            <button type='submit' id="saveDogTag">Save</button>
                        </form>
                        {TokenService.getUserId() == this.state.specDogTag.owner ? <button onClick={() => {
                            this.handleDelete(this.props.match.params.id)
                        }} id="deleteDogTag">Delete</button> : null}
                    </div> 
                    :
                    <div className="pupPage">
                        <h2>{this.state.specDogTag.name}</h2>
                        <img alt={this.state.specDogTag.description} src={this.state.specDogTag.image}/>
                        <p>{this.state.specDogTag.category}</p>
                        <p id="pupPage_desc">{this.state.specDogTag.description}</p>
                        <p id="pupPage_date">Posted: {this.timeRead(this.state.specDogTag.date_created)}</p>
                        {TokenService.getUserId() == this.state.specDogTag.owner ? <button onClick={() => {
                            this.handleDelete(this.props.match.params.id)
                        }} id="deleteDogTag">Delete</button> : null}
                    </div>
                }

                <div className="messages">
                    <h2>Messages</h2>
                    <div id="commentSection" onLoad={id => this.scrollToBottom(id)}>
                        <ul className="comments">
                            {this.state.comments.map(comment => 
                                <MakeComment 
                                    user_name={comment.user.user_name}
                                    comment={comment.comment}
                                    key={comment.id} 
                                    date_created={this.timeRead(comment.date_created)}
                                />)}
                        </ul>
                    </div>
                    <form onSubmit={this.handleComment}>
                    <input type="text" name="comment" placeholder="Any information on dog"></input>
                    <button type="submit">Submit</button>
                    </form>
                </div>

                </div>

                <footer>&#169; EJ Gonzalez 2019</footer>
            </div>
        )
    }
}