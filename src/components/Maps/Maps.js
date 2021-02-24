import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { GiPositionMarker } from "react-icons/gi";
import "./styles.css";

const Maps = ({ data }) => {
  const [markerStyle, setMarkerStyle] = useState(false);

  const defaultProps = {
    center: {
      lat: data.lat,
      lng: data.lng,
    },
    zoom: 16,
  };
  const Marker = ({ children }) => children;
  const changeStyles = () => {
    setMarkerStyle(!markerStyle);
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100%", width: "100%" }}>
      <div
        onClick={changeStyles}
        className={markerStyle ? "markerbig" : "markersmall"}
      >
        <p className="title">{data.name}</p>
        <div className={markerStyle ? "tel" : "closed"}>{data.tel}</div>
        <div className={markerStyle ? "markerimage" : "closed"}>
          <img src={data.image} />
        </div>
        <div className={markerStyle ? "add" : "closed"}>{data.address}</div>
      </div>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_MAP_KEY,
          libraries: ["places"],
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker className="maker" lat={data.lat} lng={data.lng}>
          <button onClick={changeStyles}>
            <GiPositionMarker className="maker-icon" />
          </button>
        </Marker>
      </GoogleMapReact>
    </div>
  );
};

export default Maps;
