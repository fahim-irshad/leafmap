import React, { Fragment } from 'react'
import {Polygon, LayersControl} from 'react-leaflet';
import MarkerPopup from './MarkerPopup';
import Markertip from './tooltip';


const VenueMarkersCoastal = (props) => {
  const { venues } = props

  const polygons4 = venues.filter(venue=>venue.TITLE.includes('RAS')).map((venue, index) => (
    
    <Polygon  key={index} positions={venue.geometry} >
   
     <Markertip data={venue}></Markertip>
     <MarkerPopup data={venue}/>
      
    </Polygon>
  
  ));
  
  return <Fragment>{polygons4}</Fragment>
        };

export default VenueMarkersCoastal;
