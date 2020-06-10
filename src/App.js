
import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 24.8607,
      lng: 67.0311,
      zoom: 12
    }
    
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