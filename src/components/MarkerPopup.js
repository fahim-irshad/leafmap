import React from 'react';
import {Popup} from 'react-leaflet';

const MarkerPopup = (props) => {
  const {CHART_NO,TITLE,EDITION,SCALE} = props.data;
 

  return  (<Popup>
  <div className='poup-text'>
  <table id='customers'> 
  <tr>
  <td><b>Name:</b></td>
  <td>{CHART_NO}</td>
  </tr>
  <tr>
  <td><b>Title:</b></td>
  <td>{TITLE}</td>
  </tr>
  <tr>
  <td><b>Scale:</b></td>
  <td>{SCALE}</td>
  </tr>
  <tr>
  <td>p<b>Edition:</b>&nbsp;</td>
  <td>{EDITION}</td>
  </tr>
   </table>
  </div>
  </Popup>);
};

export default MarkerPopup;
