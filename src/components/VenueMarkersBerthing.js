import React, { Fragment } from 'react'
import {Polygon, LayersControl} from 'react-leaflet';
import MarkerPopup from './MarkerPopup';
import Markertip from './tooltip';


const VenueMarkersBerthing = (props) => {
  const { venues } = props

  const polygons2 = venues.filter(venue=>venue.TITLE.includes('BERTHING')).map((venue, index) => (
    
    <Polygon  key={index} positions={venue.geometry} >
   
     <Markertip data={venue}></Markertip>
     <MarkerPopup data={venue}/>
      
    </Polygon>
  
  ));
  
  return <Fragment>{polygons2}</Fragment>
        };

export default VenueMarkersBerthing;
