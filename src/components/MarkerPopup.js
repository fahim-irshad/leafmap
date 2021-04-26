import React from 'react';
import {Popup} from 'react-leaflet';

const MarkerPopup = (props) => {
  const {CHART_NO,TITLE,EDITION,SCALE} = props.data;
 

  return  (<Popup>
    <div className='poup-text'>
  <span><b>Name&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</b></span><span>{CHART_NO}</span><br/>
  <span><b>Title&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></span><span>{TITLE}</span><br/>
  <span><b>Scale&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</b></span><span>{SCALE}</span><br/>
  <span><b>Edition&nbsp;:&nbsp;&nbsp;</b></span><span>{EDITION}</span><br/>
  </div>
  </Popup>);
};

export default MarkerPopup;
