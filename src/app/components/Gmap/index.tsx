import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Gmap = () => {
  const mapStyles = {
    height: "400px",
    width: "90%",
  };

  const defaultCenter = {
    lat: 31.50161,
    lng: 34.46672,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCzpudIIQ7V8VjgtlHjIsZSW700-04qQLY">
      <GoogleMap mapContainerStyle={mapStyles} zoom={4} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Gmap;
