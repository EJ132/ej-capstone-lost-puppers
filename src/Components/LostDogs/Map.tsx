import * as React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Link } from "react-router-dom";

import LostPuppersSVG from "../../Assets/lostpuppers.svg";

import "./Map.css";

export default function Map(props) {
  const pupArray = props.dogTags;

  const [viewport, setViewport] = React.useState({
    latitude: 0,
    longitude: 0,
    zoom: 10,
  });

  const [selectedPup, setSelectedPup] = React.useState(null);

  // ALLOWS USERS TO PUSH THE 'ESC' BTN WHEN CLICKED ON A CARD

  React.useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPup(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      setViewport({
        latitude: data.coords.latitude,
        longitude: data.coords.longitude,
        zoom: 12,
      });
    });
  }, []);

  if (viewport.latitude === 0) {
    return (
      <h1 className="w-100 h-80 text-center d-flex align-items-center justify-content-center">
        Loading...
      </h1>
    );
  }

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      mapboxApiAccessToken={
        "pk.eyJ1IjoiZWoxMzIiLCJhIjoiY2syMmR0dnloMXFoNjNjcDQ3emdtNHdvdyJ9.IHpa4a-zkVKnytP0_TCyaw"
      }
      onViewportChange={(vp: any) => {
        setViewport(vp);
      }}
    >
      {pupArray.map((pup) => {
        return (
          <Marker
            className=""
            key={pup.id}
            latitude={pup.lat}
            longitude={pup.long}
          >
            <button
              type="button"
              style={{ border: "none", backgroundColor: "transparent" }}
              onClick={(e) => {
                e.preventDefault();
                setSelectedPup(pup);
              }}
            >
              <img src={LostPuppersSVG} style={{ width: 64 }} alt="paw" />
            </button>
          </Marker>
        );
      })}
      {selectedPup ? (
        <Popup
          latitude={selectedPup.props.lat}
          longitude={selectedPup.props.long}
          onClose={() => {
            setSelectedPup(null);
          }}
        >
          <div className="popup">
            <Link to={`/find/${selectedPup.props.id}`}>
              <h2>{selectedPup.props.name}</h2>
              <img src={selectedPup.props.img} alt={selectedPup.props.name} />
              <p>{selectedPup.props.category}</p>
              <p>{selectedPup.props.description}</p>
            </Link>
          </div>
        </Popup>
      ) : null}
    </ReactMapGL>
  );
}
