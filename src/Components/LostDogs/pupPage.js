import React, { Component } from 'react'
import Navbar from '../Navbar'
import config from '../../config'
import TokenService from '../../services/token-service'
import '../../Stylesheets/pupPage.css'
import history from '../../Context/history'

export default class pupPage extends Component {

    state = {
        specDogTag: {}
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
        })

        return;
    }

    goBack = () => {
        history.push('/find')
    }

    render(){
        return(
            <div className="pupPage_main">
                <Navbar />

                <button onClick={this.goBack}>Back</button>

                <div className="pupPage">
                    <h2>{this.state.specDogTag.name}</h2>
                    <img alt={this.state.specDogTag.description} src={this.state.specDogTag.image}/>
                    <p>{this.state.specDogTag.category}</p>
                    <p id="pupPage_desc">{this.state.specDogTag.description}</p>
                    <p id="pupPage_date">{this.state.specDogTag.date_created}</p>
                </div>

                <footer>&#169; EJ Gonzalez 2019</footer>
            </div>
        )
    }
}