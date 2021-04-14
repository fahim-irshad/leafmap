import React from 'react';
import {Tooltip} from 'react-leaflet';

const Markertip = (props) => {
  const {CHART_NO} = props.data;
  

  return  (<Tooltip>
    <div className='poup-tex'>{CHART_NO}</div>
  </Tooltip>);
};

export default Markertip;
