import React, { Component } from "react";
//import MyMap from "./MyMap";
import { Map, TileLayer, Marker } from "react-leaflet";
import './App.css'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 50.0893,
      lng: 14.4284,
      zoom: 12
    };
  }
 
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[this.state.lat, this.state.lng]} />
 
      </Map>
    );
  }
 }

//export default App;