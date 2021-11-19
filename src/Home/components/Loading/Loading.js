import React from "react";
import "./Loading.css";
import Lottie from 'react-lottie';
import * as loading from "./loading.json"
import * as done from "./done.json"
const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
  return (
    <div className="loading">
        <Lottie options={defaultOptions} width={200} height={200} />
    </div>
  );
};
export default Loading;
{/*<svg width="200" height="200" id="svg">*/}
{/*  <circle id="dot1" className="shape" />*/}
{/*  <circle id="dot2" className="shape" />*/}
{/*  <circle id="dot3" className="shape" />*/}
{/*  <circle id="dot4" className="shape" />*/}
{/*</svg>*/}