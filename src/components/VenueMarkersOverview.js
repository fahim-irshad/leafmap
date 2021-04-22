import React, { Fragment } from 'react'
import {Polygon} from 'react-leaflet';
import MarkerPopup from './MarkerPopup';
import Markertip from './tooltip';


const VenueMarkersOverview = (props) => {
  const { venues } = props

  const polygons5 = venues.filter(venue=>venue.BAND.includes('general')).map((venue, index) => (
    
    <Polygon  key={index} positions={venue.geometry} >
   
     <Markertip data={venue}></Markertip>
     <MarkerPopup data={venue}/>
      
    </Polygon>
  
  ));
  
  return <Fragment>{polygons5}</Fragment>
        };

export default VenueMarkersOverview;
