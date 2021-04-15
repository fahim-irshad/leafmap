import React, { Fragment } from 'react'
import {Polygon, LayersControl} from 'react-leaflet';
import MarkerPopup from './MarkerPopup';
import Markertip from './tooltip';


const VenueMarkersOverview = (props) => {
  const { venues } = props

  const polygons5 = venues.filter(venue=>venue.TITLE.includes('SIR CREEK')).map((venue, index) => (
    
    <Polygon  key={index} positions={venue.geometry} >
   
     <Markertip data={venue}></Markertip>
     <MarkerPopup data={venue}/>
      
    </Polygon>
  
  ));
  
  return <Fragment>{polygons5}</Fragment>
        };

export default VenueMarkersOverview;
