// components/GoogleMap.js
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 52.407795, // Poznań, Poland latitude
  lng: 16.933761, // Poznań, Poland longitude
};

function Map() {
  return (
    <div className="p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl hidden md:block">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_API_MAP_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={11}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;
