import React, { Component } from 'react'
import NavBar from '../NavBar/Navbar'
import './Create.css'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import history from '../../Context/history'

export default class Create extends Component {

    state = {
        error: null
    }

    createPup = ev => {
        ev.preventDefault()

        const {name, image, category, description, zipcode} = ev.target
        console.log(name.value, image.value, category.value, description.value, zipcode.value)

        const owner = TokenService.getUserId()

        this.setState({
            error: null
        })

        AuthApiService.postPup({
            name: name.value,
            image: image.value,
            category: category.value,
            description: description.value,
            zipcode: zipcode.value,
            owner: owner
        })
            .then(pup => {
                name.value = ''
                image.value = ''
                category.value = ''
                description.value = ''
                zipcode.value = ''
            })
            .then(() => history.push('/find'))
            .catch(res => {this.setState({error: res.error})})

        console.log(owner)
    }


    render(){

        const {error} = this.state;

        return(
            <div>

                <NavBar />

                <form className="createPup" onSubmit={this.createPup}>
                    <section className="regError" role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </section>
                    <div>
                        <h2>Create A New Listing</h2>
                        <label>Name</label>
                        <input type='text' name='name' placeholder='Max' required></input>
                        <label id="imgLabel">Img (will support img uploading soon)</label>
                        <input type='text' name='image' placeholder='https://images.dog.ceo/breeds/mix/cheyenne1.jpg' required></input>
                        <label>Zipcode</label>
                        <input type='number' name='zipcode' placeholder='90250' required></input>
                        <label>Description</label>
                        <input id="descInput" placeholder='Please be as descriptive as possible' name='description' type='text' required></input>
                        <label>Category</label>
                        <select name='category' required>
                            <option value="Small">- Small -</option>
                            <option value="Medium">- Medium -</option>
                            <option value="Large">- Large -</option>
                        </select>
                        <button type="submit">Submit</button>
                    </div>
                </form>

                <footer>&#169; EJ Gonzalez 2019</footer>
            </div> 
        )
    }
}

//implementing city feature in future
// <label>City</label>
// <input type='text' name='city' placeholder='Hawthorne' required></input>