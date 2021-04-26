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
      zoom: 5,
    }
   
     
  }

  render() {
    const { currentLocation, zoom } = this.state;

    return (
      <div className="aa"> 
      
    <Map center={currentLocation} zoom={zoom} placeholder={<div><h1>ddddddd</h1></div>} >
        
        <LayersControl position="topright">
          
        <LayersControl.BaseLayer  name="Imagery Base Map">
        
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer checked name="Ocean Base Map">
        <TileLayer
          url="https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token=pRLv2n6tHZvaFBHJG4zCKdRvzvnbEZkdSZyHB4LMZdWUCaGX4Jp7rHAWI7vkubLM"
          attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
         
        
        </LayersControl.BaseLayer>
         
      
        <LayersControl.Overlay name="Overview">
         <LayerGroup>
         <Polygons  venues={data.venues}/>
         </LayerGroup>
         </LayersControl.Overlay>

        <LayersControl.Overlay  name="General">
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
         <span><p>ENC Catalogue</p></span>
     </div>
    );
  }
}

export default MapView;
