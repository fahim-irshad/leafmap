import React from 'react';
import {Tooltip} from 'react-leaflet';

const Markertip = (props) => {
  const {CHART_NO} = props.data;
  

  return  (<Tooltip sticky d opacity={1}>
    <div className='poup-text'>{CHART_NO}</div>
  </Tooltip>);
};

export default Markertip;
