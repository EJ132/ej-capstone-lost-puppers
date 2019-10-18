/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import '../Stylesheets/Main.css'
import '../Stylesheets/Find.css'
import '../Stylesheets/DogTags.css'
import DogTag from './LostDogs/Dogtag'
import config from '../config'
import NavBar from './Navbar'
import {Link} from 'react-router-dom'
import TokenService from '../services/token-service'

export default class Find extends Component {

    state = {
        dogTags: [],
        filter: null,
        filter_name: '',
        filter_zip: null,
        filter_zipVal: ''
    }

    filterResults = ev => {

        this.setState({
            filter: true,
            filter_name: ev.target.value
        })

        this.renderDogTags()

    }

    //need to implement when zipcode field is empty to set back to null or show all results

    filterByZip = ev => {

        this.setState({
            filter_zip: true,
            filter_zipVal: ev.target.value
        })

        this.renderDogTags()
    }

    clearFilter = () => {
        this.setState({
            filter: null,
            filter_name: '',
            filter_zip: null,
            filter_zipVal: ''
        })
    }

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/pups`, {method: 'GET'})
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
        )
        .then(resJSON => {
            this.setState({
                dogTags: resJSON
            })
        })

        return;
    }

    handleDelete = cardId => {
        fetch(`${config.API_ENDPOINT}/pups/${cardId}`, {
        method: 'DELETE',
        headers: { 'authorization': `bearer ${TokenService.getAuthToken()}`}
        })
        .then(res => {
            this.setState({
                // eslint-disable-next-line eqeqeq
                dogTags: this.state.dogTags.filter(dog => dog.id != cardId)
            })
            return;
            })
    }

    renderDogTags() {

        let filteredResults = this.state.dogTags;

        if (this.state.filter) {
           // eslint-disable-next-line eqeqeq
           filteredResults = filteredResults.filter(dogCard => dogCard.category == this.state.filter_name)
        }

        // eslint-disable-next-line eqeqeq
        if (this.state.filter_zipVal == ''){
            return filteredResults.map(dogCard => {
                return <DogTag 
                name={dogCard.name}
                img={dogCard.image}
                description={dogCard.description}
                category={dogCard.category}
                dateCreated={dogCard.date_created}
                id={dogCard.id}
                key={dogCard.id}
                owner={dogCard.owner}
                delete={this.handleDelete}
                />
            });
        }

        if (this.state.filter_zip) {
            // eslint-disable-next-line eqeqeq
            filteredResults = filteredResults.filter(dogCard => dogCard.zipcode == this.state.filter_zipVal)
        }

        return filteredResults.map(dogCard => {
            return <DogTag 
            name={dogCard.name}
            img={dogCard.image}
            description={dogCard.description}
            category={dogCard.category}
            dateCreated={dogCard.date_created}
            id={dogCard.id}
            key={dogCard.id}
            owner={dogCard.owner}
            delete={this.handleDelete}
            />
        });
    }

    zipOptions = () => {

        const dogZips = this.state.dogTags.map(dog => dog.zipcode)
        const newArray = dogZips.filter((elem, i, arr) => {
            if (arr.indexOf(elem) === i) {
              return elem
            }
          })

        return (
        <select className="zipCodes" name='category' onChange={this.filterByZip}>
            {newArray.map(dog => {
             return <option key={dog} value={dog}>{dog}</option> })}
        </select>
    )}

    render() {
        return (
            <div>

                <NavBar />

                <div className="findContainer">
                    <div className="sidebar">
                        <h2>Sort</h2>
                            <div>
                                <form className="dogSizeFilter">
                                    <label>Dog Size</label>
                                    <div>
                                        <input type="radio" name="size" onChange={this.filterResults} value="Small" checked={this.state.filter_name === 'Small'}/>
                                        <label htmlFor="small">Small</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="size" onChange={this.filterResults} value="Medium" checked={this.state.filter_name === 'Medium'}/>
                                        <label htmlFor="medium">Medium</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="size" onChange={this.filterResults} value="Large" checked={this.state.filter_name === 'Large'}/>
                                        <label htmlFor="large">Large</label>
                                    </div>
                                    <div>
                                        <input type="button" id="filterButton" name="size" onClick={this.clearFilter} value="Clear"/>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <label className="AreaCode">Area Code</label>
                                {this.zipOptions()}
                            </div>
                            <div className="addPup">
                                <Link to="/create">+ Add Pup</Link>
                            </div>
                    </div>

                    <div className="lostdogs">
                        <h2>Lost Pups</h2>

                        <div className="dogContainer">
                            {this.renderDogTags()}
                        </div>
                    </div>
                </div>

                <footer>&#169; EJ Gonzalez 2019</footer>
            </div>
        )
    }
}



//implement automatic y axis for the messages