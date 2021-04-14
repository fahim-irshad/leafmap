import React from 'react';
import {Popup} from 'react-leaflet';

const MarkerPopup = (props) => {
  const {CHART_NO,TITLE,EDITION,SCALE} = props.data;
 

  return  (<Popup>
    <div className='poup-text'>
  Name:&nbsp;&nbsp;&nbsp;{CHART_NO}<br/>Title:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{TITLE}<br/>Scale:&nbsp;&nbsp;&nbsp;&nbsp;{SCALE}<br/>Edition:&nbsp;&nbsp;{EDITION}</div>
  </Popup>);
};

export default MarkerPopup;
