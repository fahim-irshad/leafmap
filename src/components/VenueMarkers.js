import React, { Fragment } from 'react'
import {Polygon} from 'react-leaflet';
import MarkerPopup from './MarkerPopup';
import Markertip from './tooltip';


const VenueMarkers = (props) => {
  const { venues } = props

  const polygons = venues.filter(venue=>venue.TITLE.includes('BOMBAY')).map((venue, index) => (
    
    <Polygon  key={index} positions={venue.geometry} >
   
     <Markertip data={venue}></Markertip>
     <MarkerPopup data={venue}/>
      
    </Polygon>
  
  ));
  
  return <Fragment>{polygons}</Fragment>
        };

export default VenueMarkers;
