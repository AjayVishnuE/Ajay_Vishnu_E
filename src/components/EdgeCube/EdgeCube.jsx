import React from 'react';
import './edgecube.css';

const EdgeCube = ({ edgeSize = 200, frontColor = "#FFFFFF80", backColor = "#FFFFFF1A" }) => {
  // Calculate coordinates based on edgeSize
  const halfSize = edgeSize / 2;
  const quarterSize = edgeSize / 4;
  const threeQuarterSize = (edgeSize * 3) / 4;

  return (
    <div className="edgecube-container">
      <svg className="cube-svg" viewBox={`0 0 ${edgeSize} ${edgeSize}`} preserveAspectRatio="xMidYMid meet">
        <g transform={`translate(${quarterSize}, ${quarterSize})`}>
          {/* Hidden/Back edges */}
          <line style={{ stroke: frontColor }} className="front-edge" x1="0" y1={threeQuarterSize} x2={halfSize} y2={edgeSize} />
          <line style={{ stroke: frontColor }} className="front-edge" x1={edgeSize} y1={threeQuarterSize} x2={halfSize} y2={edgeSize} />

          {/* Diagonal lines split into two */}
          <line style={{ stroke: frontColor }} className="front-edge" x1="0" y1={quarterSize} x2={halfSize} y2={halfSize} />
          <line style={{ stroke: backColor }} className="back-edge" x1={halfSize} y1={halfSize} x2={edgeSize} y2={threeQuarterSize} />

          <line style={{ stroke: backColor }} className="back-edge" x1="0" y1={threeQuarterSize} x2={halfSize} y2={halfSize} />
          <line style={{ stroke: frontColor }} className="front-edge" x1={halfSize} y1={halfSize} x2={edgeSize} y2={quarterSize} />

          {/* Vertical line split in half */}
          <line style={{ stroke: backColor }} className="back-edge" x1={halfSize} y1="0" x2={halfSize} y2={halfSize} />
          <line style={{ stroke: frontColor }} className="front-edge" x1={halfSize} y1={halfSize} x2={halfSize} y2={edgeSize} />

          {/* Visible edges */}
          <line style={{ stroke: frontColor }} className="front-edge" x1="0" y1={quarterSize} x2={halfSize} y2="0" />
          <line style={{ stroke: frontColor }} className="front-edge" x1={halfSize} y1="0" x2={edgeSize} y2={quarterSize} />
          <line style={{ stroke: frontColor }} className="front-edge" x1={halfSize} y1={halfSize} x2={edgeSize} y2={quarterSize} />
          <line style={{ stroke: frontColor }} className="front-edge" x1="0" y1={quarterSize} x2="0" y2={threeQuarterSize} />
          <line style={{ stroke: frontColor }} className="front-edge" x1={edgeSize} y1={quarterSize} x2={edgeSize} y2={threeQuarterSize} />
        </g>
      </svg>
    </div>
  );
};

export default EdgeCube;
