import React from 'react';
import './Canvas.css';
import Faces from '../Features/Faces/Faces';

const Canvas = () => 
  <div className="container-canvas">
    <div className="canvas" style={{backgroundColor: "#ebeef4"}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
        <path d="M19.3633 25.0264C20.921 46.454 28.1731 80.8559 49.7944 80.7393C69.9968 80.411 78.3198 45.4481 79.7143 25.0264" stroke="#000000" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path id="upperlip-S-014" d="M25 44.9998C28.7037 33.7522 34.6296 30.0366 39.0741 30.0366C43.5185 30.0366 45 34.6816 45 34.6816C45 34.6816 46.4815 30.0361 50.9259 30.0361C55.3703 30.0361 61.2963 33.7522 65 44.9994" stroke="#FF7E7E" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="lowerlip-S-009_2" d="M65 46C65 46 65 60.9236 45 60.9236C25 60.9236 25 46 25 46" stroke="#FF7E7E" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="smile-S-005" d="M18 45C23.5588 49 32.5725 46 37.8529 46C43.1334 46 41.9114 49 45 49C48.0886 49 46.8666 46 52.1471 46C57.4275 46 66.4412 49 72 45" stroke="#FF7E7E" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>

export default Canvas;