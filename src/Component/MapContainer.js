import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import mappin from "../Icons/mappin.svg";

const containerStyle = {
  height: "100vh",
  position: "relative",
};

const center = {
  lat: 25.11811,
  lng: 55.20048,
};
export default class MapContainer extends Component {
  constructor(props) {
    super(props);
  }
  displayMarkers = () => {
    return this.props.restaurants.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: Number(store.latitude),
            lng: Number(store.longitude),
          }}
          icon={mappin}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };

  render() {
    return (
      <LoadScript googleMapsApiKey="AIzaSyBxCyWonmAawH3NUSXBXchQ6iUFrjKZ8hM">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          ref={(ref) => {
            this.map = ref;
          }}
        >
          {this.displayMarkers()}
        </GoogleMap>
      </LoadScript>
    );
  }
}
