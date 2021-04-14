import React, { Component } from 'react';
import { Map, TileLayer,LayerGroup,LayersControl} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Polygons from './VenueMarkers';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 24.824000000000069,
        lng: 67.30},
      zoom: 10,
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
        <LayersControl.Overlay checked name="PAK Charts">
         <LayerGroup>
        <Polygons  venues={data.venues}/>
        </LayerGroup>
        </LayersControl.Overlay>
        </LayersControl>
      </Map>
    );
  }
}

export default MapView;
