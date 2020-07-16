import React from 'react';
import './Canvas.css';

const Canvas = ({state}) => 
  <div className="container-canvas">
    <div className="canvas" style={{backgroundColor: state.background.colorSelected?state.background.colorSelected:"#ebeef4"}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200">
        {
          state.face.typeSelected && <use xlinkHref={`#${state.face.typeSelected}`} style={{fill:state.background.colorSelected?state.background.colorSelected:"#ebeef4", stroke:`${state.face.colorSelected?state.face.colorSelected:'#000000'}`}} />
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
        {
          state.eyebrows.typeSelected && <g>
            <use xlinkHref={`#${state.eyebrows.typeSelected}`} style={{fill:"none", stroke:`${state.eyebrows.colorSelected?state.eyebrows.colorSelected:'#000000'}`}} />
            <use xlinkHref={`#${state.eyebrows.typeSelected}`} style={{fill:"none", stroke:`${state.eyebrows.colorSelected?state.eyebrows.colorSelected:'#000000'}`, transformOrigin: "center center", transform:"scaleX(-1)"}} />
          </g>
        }
        {
          (state.nose.children.nostril.typeSelected || state.nose.children.septum.typeSelected) && <g>
            {state.nose.children.nostril.typeSelected && <use xlinkHref={`#${state.nose.children.nostril.typeSelected}`} style={{fill:"none", stroke:`${state.nose.colorSelected?state.nose.colorSelected:'#000000'}`}} />}
            {state.nose.children.septum.typeSelected && <use xlinkHref={`#${state.nose.children.septum.typeSelected}`} style={{fill:"none", stroke:`${state.nose.colorSelected?state.nose.colorSelected:'#000000'}`}} />}
          </g>
        }
        {
          (state.mouth.children.upper.typeSelected || state.mouth.children.smile.typeSelected || state.mouth.children.lower.typeSelected) && <g>
            {state.mouth.children.upper.typeSelected && <use xlinkHref={`#${state.mouth.children.upper.typeSelected}`} style={{fill:"none", stroke:`${state.mouth.colorSelected?state.mouth.colorSelected:'#000000'}`}} />}
            {state.mouth.children.smile.typeSelected && <use xlinkHref={`#${state.mouth.children.smile.typeSelected}`} style={{fill:"none", stroke:`${state.mouth.colorSelected?state.mouth.colorSelected:'#000000'}`}} />}
            {state.mouth.children.lower.typeSelected && <use xlinkHref={`#${state.mouth.children.lower.typeSelected}`} style={{fill:"none", stroke:`${state.mouth.colorSelected?state.mouth.colorSelected:'#000000'}`}} />}
          </g>
        }
      </svg>
    </div>
  </div>

export default Canvas;