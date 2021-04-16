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
      currentLocation: { lat: 24.70,
        lng: 65.00},
      zoom: 6,
    }
  }

  render() {
    const { currentLocation, zoom } = this.state;

    return (
      <Map center={currentLocation} zoom={zoom}>
        <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OSM Base Map">
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        />
        </LayersControl.BaseLayer>
         
      
        <LayersControl.Overlay name="General">
         <LayerGroup>
         <Polygons  venues={data.venues}/>
         </LayerGroup>
         </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Overview">
         <LayerGroup>
         <Polygons5  venues={data.venues}/>
         </LayerGroup>
         </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Coastal">
         <LayerGroup>
         <Polygons4  venues={data.venues}/>
         </LayerGroup>
         </LayersControl.Overlay>

         
         <LayersControl.Overlay  name="Approches">
        <LayerGroup>
        <Polygons3  venues={data.venues}/>
        </LayerGroup>
        </LayersControl.Overlay>
        
        <LayersControl.Overlay  name="Harbour">
        <LayerGroup>
        <Polygons1  venues={data.venues}/>
        </LayerGroup>
        </LayersControl.Overlay>
         </LayersControl>

       
      </Map>
    );
  }
}

export default MapView;
