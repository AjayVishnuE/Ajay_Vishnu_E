import React from 'react';
import './edgecube.css';

const EdgeCube = ({ edgeSize, frontColor = "#FFFFFF80", backColor = "#FFFFFF1A" }) => {
  return (
    <svg width={edgeSize} height={edgeSize}>
      {/* Hidden/Back edges */}
      <line x1={0} y1={edgeSize * 0.75} x2={edgeSize * 0.5} y2={edgeSize* 1} stroke={frontColor}/>
      <line x1={edgeSize} y1={edgeSize * 0.75} x2={edgeSize * 0.5} y2={edgeSize} stroke={frontColor}/>

      {/* Diagonal lines */}
      <line x1={0} y1={edgeSize * 0.25} x2={edgeSize * 0.5} y2={edgeSize * 0.5} stroke={frontColor}/>
      <line x1={edgeSize * 0.5} y1={edgeSize * 0.5} x2={edgeSize} y2={edgeSize * 0.75} stroke={backColor}/>

      {/* Diagonal from (0, 75) to (100, 25) */}
      <line x1={0} y1={edgeSize * 0.75} x2={edgeSize * 0.5} y2={edgeSize * 0.5} stroke={backColor}/>
      <line x1={edgeSize * 0.5} y1={edgeSize * 0.5} x2={edgeSize} y2={edgeSize * 0.25} stroke={frontColor}/>

      {/* Vertical line split in half */}
      <line x1={edgeSize * 0.5} y1={0} x2={edgeSize * 0.5} y2={edgeSize* 0.5} stroke={backColor}/>
      <line x1={edgeSize * 0.5} y1={edgeSize * 0.5} x2={edgeSize * 0.5} y2={edgeSize} stroke={frontColor}/>

      {/* Visible edges */}
      <line x1={0} y1={edgeSize * 0.25} x2={edgeSize * 0.5} y2={0} stroke={frontColor}/>
      <line x1={edgeSize * 0.5} y1={0} x2={edgeSize} y2={edgeSize * 0.25} stroke={frontColor}/>
      <line x1={0} y1={edgeSize * 0.25} x2={0} y2={edgeSize * 0.75} stroke={frontColor} strokeWidth="2px"/>
      <line x1={edgeSize} y1={edgeSize * 0.25} x2={edgeSize} y2={edgeSize * 0.75} stroke={frontColor} strokeWidth="2px" />
    </svg>
  );
};

export default EdgeCube;

