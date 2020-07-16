import React from 'react';
import './Canvas.css';
import Faces from '../Features/Faces/Faces';

const Canvas = ({state}) => 
  <div className="container-canvas">
    <div className="canvas" style={{backgroundColor: "#ebeef4"}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200">
        {
          state.face.typeSelected && <use xlinkHref={`#${state.face.typeSelected}`} style={{fill:"none", stroke:`${state.face.colorSelected?state.face.colorSelected:'#000000'}`}} />
        }
        {
          state.hairstyle.typeSelected && <use xlinkHref={`#${state.hairstyle.typeSelected}`} style={{fill:"none", stroke:`${state.hairstyle.colorSelected?state.hairstyle.colorSelected:'#000000'}`}} />
        }
        {
          state.fringe.typeSelected && <use xlinkHref={`#${state.fringe.typeSelected}`} style={{fill:"none", stroke:`${state.fringe.colorSelected?state.fringe.colorSelected:'#000000'}`}} />
        }
        {
          state.ears.typeSelected && <g>
            <use xlinkHref={`#${state.ears.typeSelected}`} style={{fill:"none", stroke:`${state.ears.colorSelected?state.ears.colorSelected:'#000000'}`}} />
            <use xlinkHref={`#${state.ears.typeSelected}`} style={{fill:"none", stroke:`${state.ears.colorSelected?state.ears.colorSelected:'#000000'}`, transformOrigin: "center center", transform:"scaleX(-1)"}} />
          </g>
        }
      </svg>
    </div>
  </div>

export default Canvas;