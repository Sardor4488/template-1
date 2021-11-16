import React from "react";
import "./Loading.css";
const Loading = () => {
  return (
    <div className="loading">
      <svg width="200" height="200" id="svg">
        <circle id="dot1" className="shape" />
        <circle id="dot2" className="shape" />
        <circle id="dot3" className="shape" />
        <circle id="dot4" className="shape" />
      </svg>
    </div>
  );
};

export default Loading;
