import React, { Component } from 'react';
import { Map, TileLayer,LayerGroup,LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Markers from './VenueMarkers';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 52.52437, lng: 13.41053 },
      zoom: 12,
    }
  }

  render() {
    const { currentLocation, zoom } = this.state;

    return (
      <Map center={currentLocation} zoom={zoom}>
        <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OSM Base Map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay name="PAK Charts">
         <LayerGroup>
        <Markers venues={data.venues}/>
        </LayerGroup>
        </LayersControl.Overlay>
        </LayersControl>
      </Map>
    );
  }
}

export default MapView;
