import React, { Component } from 'react'
import NavBar from '../NavBar/Navbar'
import './Create.css'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import history from '../../Context/history'

export default class Create extends Component {

    state = {
        error: null,
        selectedFile: null,
        submitted: null
    }

    //ALL INFO IS APPENDED INTO A FORM DATA TO BE SENT AS FORM DATA (FILE UPLOADING)

    createPup = ev => {
        ev.preventDefault()

        const {name, image, category, description, zipcode, lat, long} = ev.target

        const owner = TokenService.getUserId()

        const formData = new FormData();
        formData.append('image', this.state.selectedFile, this.state.selectedFile.name);
        formData.append('name', name.value);
        formData.append('category', category.value);
        formData.append('description', description.value);
        formData.append('zipcode', zipcode.value);
        formData.append('lat', lat.value);
        formData.append('long', long.value);
        formData.append('owner', owner)

        this.setState({
            error: null,
            submitted: true
        })

        AuthApiService.postPup(formData)
            .then(pup => {
                name.value = ''
                image.value = ''
                category.value = ''
                description.value = ''
                zipcode.value = ''
                lat.value = ''
                long.value = ''
            })
            .then(() => history.push('/find'))
            .catch(res => {this.setState({error: res.error})})
    }

    fileUpload = e => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }


    render(){

        const {error, submitted} = this.state;

        return(
            <div>

                <NavBar />

                <form className="createPup" encType='multipart/form-data' onSubmit={this.createPup}>
                    <section className="regError" role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </section>
                    <div>
                        <h2>Create A New Listing</h2>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' placeholder='Max' required></input>
                        <label id="imgLabel" htmlFor='image'>Image</label>
                        <input type='file' name='image' id='image' onChange={(e) => this.fileUpload(e)} required></input>
                        <label htmlFor='zipcode'>Zipcode</label>
                        <input type='number' name='zipcode' placeholder='90250' required></input>
                        <label htmlFor='lat'>Lat (Get cordinates on google)</label>
                        <input type='float' step='0.0000001' name='lat' placeholder='33.8877101' required></input>
                        <label htmlFor='long'>Long</label>
                        <input type='float' step='0.0000001' name='long' placeholder='-118.3652527' required></input>
                        <label htmlFor='description'>Description</label>
                        <input id="descInput" placeholder='Please be as descriptive as possible' name='description' type='text' required></input>
                        <label htmlFor='category'>Category</label>
                        <select name='category' required>
                            <option value="Small">- Small -</option>
                            <option value="Medium">- Medium -</option>
                            <option value="Large">- Large -</option>
                        </select>
                        <button type="submit">Submit</button>
                        {submitted ? <p id="submitted">Submitted</p> : null}
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