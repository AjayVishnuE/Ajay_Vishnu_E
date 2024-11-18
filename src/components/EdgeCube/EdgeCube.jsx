import React, { useState, useEffect } from 'react';
import './edgecube.css';

const EdgeCube = ({ edgeSize, frontColor = "#FFFFFF80", backColor = "#FFFFFF1A" }) => {
  // State to toggle colors
  const [isHovered, setIsHovered] = useState(false);
  const [toggle, setToggle] = useState(false);

  // Effect to handle the toggling effect when hovered
  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setToggle((prev) => !prev);
      }, 400); // Change color every 500ms (adjust as needed)
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  // Switch colors based on toggle state
  const currentFrontColor = toggle ? backColor : frontColor;
  const currentBackColor = toggle ? frontColor : backColor;

  return (
    <svg
      width={edgeSize}
      height={edgeSize}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hidden/Back edges */}
      <line x1={0} y1={edgeSize * 0.75} x2={edgeSize * 0.5} y2={edgeSize * 1} stroke={frontColor} />
      <line x1={edgeSize} y1={edgeSize * 0.75} x2={edgeSize * 0.5} y2={edgeSize} stroke={frontColor} />

      {/* Diagonal lines */}
      <line x1={0} y1={edgeSize * 0.25} x2={edgeSize * 0.5} y2={edgeSize * 0.5} stroke={currentFrontColor} />
      <line x1={edgeSize * 0.5} y1={edgeSize * 0.5} x2={edgeSize} y2={edgeSize * 0.75} stroke={currentBackColor} />

      {/* Diagonal from (0, 75) to (100, 25) */}
      <line x1={0} y1={edgeSize * 0.75} x2={edgeSize * 0.5} y2={edgeSize * 0.5} stroke={currentBackColor} />
      <line x1={edgeSize * 0.5} y1={edgeSize * 0.5} x2={edgeSize} y2={edgeSize * 0.25} stroke={currentFrontColor} />

      {/* Vertical line split in half */}
      <line x1={edgeSize * 0.5} y1={0} x2={edgeSize * 0.5} y2={edgeSize * 0.5} stroke={currentBackColor} />
      <line x1={edgeSize * 0.5} y1={edgeSize * 0.5} x2={edgeSize * 0.5} y2={edgeSize} stroke={currentFrontColor} />

      {/* Visible edges */}
      <line x1={0} y1={edgeSize * 0.25} x2={edgeSize * 0.5} y2={0} stroke={frontColor} />
      <line x1={edgeSize * 0.5} y1={0} x2={edgeSize} y2={edgeSize * 0.25} stroke={frontColor} />
      <line x1={0} y1={edgeSize * 0.25} x2={0} y2={edgeSize * 0.75} stroke={frontColor} strokeWidth="2px" />
      <line x1={edgeSize} y1={edgeSize * 0.25} x2={edgeSize} y2={edgeSize * 0.75} stroke={frontColor} strokeWidth="2px" />
    </svg>
  );
};

export default EdgeCube;

