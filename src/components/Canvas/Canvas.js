import React from 'react';
import './Canvas.css';
import Faces from '../Features/Faces/Faces';

const Canvas = () => 
  <div className="container-canvas">
    <div className="canvas" style={{backgroundColor: "#ebeef4"}}>
      <Faces nCara="001"/>
      <Faces nCara="002"/>
    </div>
  </div>

export default Canvas;