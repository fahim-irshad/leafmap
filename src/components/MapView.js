import React, { Component } from 'react';
import { Map, TileLayer,LayerGroup,LayersControl} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Polygons from './VenueMarkers';
import Polygons1 from './VenueMarkersHarbour';
import Polygons3 from './VenueMarkersApproaches';
import Polygons4 from './VenueMarkersCoastal';
import Polygons5 from './VenueMarkersOverview';


class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 24.824000000000069,
        lng: 67.30},
      zoom: 8,
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
       
        <LayersControl.Overlay checked name="Harbour">
        <LayerGroup>
        <Polygons1  venues={data.venues}/>
        </LayerGroup>
        </LayersControl.Overlay>
        
         
        
        <LayersControl.Overlay checked name="Approches">
        <LayerGroup>
        <Polygons3  venues={data.venues}/>
        </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name="Coastal">
         <LayerGroup>
         <Polygons4  venues={data.venues}/>
         </LayerGroup>
         </LayersControl.Overlay>

         <LayersControl.Overlay name="Overview">
         <LayerGroup>
         <Polygons5  venues={data.venues}/>
         </LayerGroup>
         </LayersControl.Overlay>

         <LayersControl.Overlay name="General">
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
