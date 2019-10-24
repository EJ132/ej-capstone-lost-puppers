import React, {useState, useEffect} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import paw from '../../Images/paw.png';
import config from '../../config';
import {Link} from 'react-router-dom';
import './Map.css'

export default function Map(props){

    const pupArray = props.dogTags

    const [viewport, setViewport] = useState({
        latitude: 33.8877101,
        longitude: -118.3652527,
        zoom: 10
    })

    const [selectedPup, setSelectedPup] = useState(null);

    // ALLOWS USERS TO PUSH THE 'ESC' BTN WHEN CLICKED ON A CARD

    useEffect(() => {
        const listener = e => {
            if(e.key === 'Escape'){
                setSelectedPup(null)
            }
        };
            window.addEventListener('keydown', listener);

            return () => {
                window.removeEventListener('keydown', listener)
            }
    }, []);

    return (
        <ReactMapGL {...viewport} 
        width="100%"
        height= "93%"
        mapboxApiAccessToken={"pk.eyJ1IjoiZWoxMzIiLCJhIjoiY2syMmR0dnloMXFoNjNjcDQ3emdtNHdvdyJ9.IHpa4a-zkVKnytP0_TCyaw"}
        onViewportChange={viewport => {
            setViewport(viewport)
        }}>
            {pupArray.map(pup => {
                return <Marker className="markerBtn" key={pup.props.id} latitude={pup.props.lat} longitude={pup.props.long}>
                    <button onClick={e => {
                        e.preventDefault()
                        setSelectedPup(pup)
                    }}>
                        <img src={paw} alt="paw"/>
                    </button>
                </Marker>
                })}
            {selectedPup ? (
                <Popup 
                latitude={selectedPup.props.lat} 
                longitude={selectedPup.props.long}
                onClose = {() => {
                        setSelectedPup(null)
                }}>
                    <div className="popup">
                        <Link to={`/find/${selectedPup.props.id}`}>
                        <h2>{selectedPup.props.name}</h2>
                        <img src={selectedPup.props.img} alt={selectedPup.props.name}></img>
                        <p>{selectedPup.props.category}</p>
                        <p>{selectedPup.props.description}</p>
                        </Link>
                    </div>
                </Popup>
            ) : null
            }
        </ReactMapGL>

    )
}