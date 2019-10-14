import React, { Component } from 'react'
import '../Stylesheets/Main.css'
import Navbar from './Navbar'
import '../Stylesheets/Find.css'
import DogTag from './LostDogs/Dogtag'

export default class Find extends Component {

    state = {
        dogTags: [
            { name:"Chico",
            img:"https://images.unsplash.com/photo-1456318456940-4da16c8fc9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            category:"Small",
            description:"Brown dog very loving and likes squeky toys",
            dateCreated:"January 23, 2020" },
            { name:"Chico",
            img:"https://images.unsplash.com/photo-1456318456940-4da16c8fc9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            category:"Small",
            description:"Brown dog very loving and likes squeky toys",
            dateCreated:"January 23, 2020" },
            { name:"Chico",
            img:"https://images.unsplash.com/photo-1456318456940-4da16c8fc9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            category:"Small",
            description:"Brown dog very loving and likes squeky toys",
            dateCreated:"January 23, 2020" },
            { name:"Chico",
            img:"https://images.unsplash.com/photo-1456318456940-4da16c8fc9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            category:"Small",
            description:"Brown dog very loving and likes squeky toys",
            dateCreated:"January 23, 2020" },
            { name:"Chico",
            img:"https://images.unsplash.com/photo-1456318456940-4da16c8fc9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            category:"Small",
            description:"Brown dog very loving and likes squeky toys",
            dateCreated:"January 23, 2020" },
            { name:"Chico",
            img:"https://images.unsplash.com/photo-1456318456940-4da16c8fc9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            category:"Small",
            description:"Brown dog very loving and likes squeky toys",
            dateCreated:"January 23, 2020" },
            { name:"Chico",
            img:"https://images.unsplash.com/photo-1456318456940-4da16c8fc9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            category:"Small",
            description:"Brown dog very loving and likes squeky toys",
            dateCreated:"January 23, 2020" },
            { name:"Chico",
            img:"https://images.unsplash.com/photo-1456318456940-4da16c8fc9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            category:"Small",
            description:"Brown dog very loving and likes squeky toys",
            dateCreated:"January 23, 2020" },
            { name:"Chico",
            img:"https://images.unsplash.com/photo-1456318456940-4da16c8fc9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            category:"Small",
            description:"Brown dog very loving and likes squeky toys",
            dateCreated:"January 23, 2020" },
            { name:"Chico",
            img:"https://images.unsplash.com/photo-1456318456940-4da16c8fc9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            category:"Small",
            description:"Brown dog very loving and likes squeky toys",
            dateCreated:"January 23, 2020" },
        ]
    }

    renderDogTags() {
        const { dogTags = [] } = this.state
        return dogTags.map(dogCard => 
            <DogTag 
            name={dogCard.name}
            img={dogCard.img}
            description={dogCard.description}
            dateCreated={dogCard.dateCreated}
            />
            )
    }

    render() {
        return (
            <div>

                <Navbar />

                <div className="findContainer">
                    <div className="sidebar">
                        <h2>Sort</h2>
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

// line 39...44 will be filled with dogCards (lost dog cards) components