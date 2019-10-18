import React, { Component } from 'react'
import Navbar from '../Navbar'
import config from '../../config'
import '../../Stylesheets/Profile.css'
import TokenService from '../../services/token-service'
import DogTag from '../LostDogs/Dogtag'

export default class Profile extends Component {

    state = {
        user: {
            fullname: '',
            user_name: '',
            id: null
        },

        userPost : []
    }

    componentDidMount() {

        fetch(`${config.API_ENDPOINT}/profile/${TokenService.getUserName()}`, {
            headers: {'authorization': `bearer ${TokenService.getAuthToken()}`},})
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
        .then(resJSON => {
            this.setState({
                user: resJSON
            })
            TokenService.saveUserId(this.state.user.id)
            this.setCards()
        })

    }

    setCards = () => {

        return fetch(`${config.API_ENDPOINT}/pups`, {
            headers: {'authorization': `bearer ${TokenService.getAuthToken()}`},})
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
        .then(resJSON => {
            // eslint-disable-next-line eqeqeq
            const userPups = resJSON.filter(dog => {

                if(dog.owner === this.state.user.id){
                        return dog
                    }

                // eslint-disable-next-line array-callback-return
                return;
                })
            this.setState({
                userPost: userPups
            })
        })
    }

    
    render(){
        const {user, userPost} = this.state
        return (
            <div>
                <Navbar />
                <div className="profile_page">
                  <div className="profile">
                        <h2>WELCOME</h2>
                        <h3>{user.fullname}</h3>
                    </div>

                    <div className="Post">
                    <h2 id="yourPost">Your Posts</h2>
                        <div className="userPosts">
                        {userPost.map(dogCard => {
                            return <DogTag 
                                name={dogCard.name}
                                img={dogCard.image}
                                description={dogCard.description}
                                category={dogCard.category}
                                dateCreated={dogCard.date_created}
                                id={dogCard.id}
                                key={dogCard.id}
                                owner={dogCard.owner}
                                />
                        })}
                        </div>
                    </div>
                </div>

                <footer>&#169; EJ Gonzalez 2019</footer>
            </div>
        )
    }
}