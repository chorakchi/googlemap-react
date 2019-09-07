import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

function App({ ...props }) {
  return (
    <div>
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 52.5200,
          lng: 13.4050
        }}
      />
    </div>
  );
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCPKCrczVJ4mA1VuVNdQxq-q0FrsJNUTgk'
})(App);
