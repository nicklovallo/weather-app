import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function MapContainer({ weather }) {

  const mapStyles = {        
    height: "40vh",
    width: "40%"
  };
  
  const center = {
    lat: weather.coord.lat,
    lng: weather.coord.lon
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLEMAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={5}
        center={center} 
        />
    </LoadScript>
  );
};

export default MapContainer;