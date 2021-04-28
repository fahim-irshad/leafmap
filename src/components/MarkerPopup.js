import React from 'react';
import {Popup} from 'react-leaflet';

const MarkerPopup = (props) => {
  const {CHART_NO,TITLE,EDITION,SCALE} = props.data;
 

  return  (<Popup>
  <div className='poup-text'>
  <table id='customers'> 
  <tr>
  <th><span><b>Name:</b></span></th>
  <th><span>{CHART_NO}</span></th>
  </tr>
  <tr>
  <th><span><b>Title:</b></span></th>
  <th><span>{TITLE}</span></th>
  </tr>
  <tr>
  <th><span><b>Scale:</b></span></th>
  <th><span>{SCALE}</span></th>
  </tr>
  <tr>
  <th><span><b>Edition:</b></span></th>
  <th><span>{EDITION}</span></th>
  </tr>
   </table>
  </div>
  </Popup>);
};

export default MarkerPopup;
