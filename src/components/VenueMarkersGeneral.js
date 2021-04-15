import React, { Fragment } from 'react'
import {Polygon, LayersControl} from 'react-leaflet';
import MarkerPopup from './MarkerPopup';
import Markertip from './tooltip';


const VenueMarkers = (props) => {
  const { venues } = props

  const polygons1 = venues.filter(venue=>venue.TITLE.includes('BOMBAY')).map((venue, index) => (
    
    <Polygon  key={index} positions={venue.geometry} >
   
     <Markertip data={venue}></Markertip>
     <MarkerPopup data={venue}/>
      
    </Polygon>
  
  ));
  
  return <Fragment>{polygons1}</Fragment>
        };

export default VenueMarkers;
