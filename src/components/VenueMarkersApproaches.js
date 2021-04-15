import React, { Fragment } from 'react'
import {Polygon} from 'react-leaflet';
import MarkerPopup from './MarkerPopup';
import Markertip from './tooltip';


const VenueMarkersApproaches = (props) => {
  const { venues } = props

  const polygons3 = venues.filter(venue=>venue.TITLE.includes('APPROACHES')).map((venue, index) => (
    
    <Polygon  key={index} positions={venue.geometry} >
   
     <Markertip data={venue}></Markertip>
     <MarkerPopup data={venue}/>
      
    </Polygon>
  
  ));
  
  return <Fragment>{polygons3}</Fragment>
        };

export default VenueMarkersApproaches;
