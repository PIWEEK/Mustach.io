import React from 'react';
import './Canvas.css';
import {useSelector} from 'react-redux'
import Header from '../Header/Header'

const Canvas = () => {
  const state = useSelector(state=>state)

  return (
    <div className="container-canvas">
      <Header />
      <div className="container-canvas">
        <div className="canvas" style={{backgroundColor: state.background.color?state.background.color:"#ebeef4"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 360 360">
            {<>
              state.ears.type && <use xlinkHref={`#ears-${state.ears.type}`} style={{fill:state.ears.color, stroke:"none", transform:`traslateY(-${state.ears.position})px`}} />
              state.ears.type && <use xlinkHref={`#ears-${state.ears.type}`} style={{fill:state.ears.color, stroke:"none", transformOrigin: "center center", transform:"scaleX(-1)"}} />
              state.fringe.type && <use xlinkHref={`#fringe-${state.fringe.type}`} style={{fill:state.fringe.color, stroke:"none", transform:`traslateY(-${state.fringe.position})px`}} />
              state.mustachio.type && <use xlinkHref={`#jawline-${state.jawline.type}`} style={{fill:state.jawline.color, stroke:"none", transform:`traslateY(${state.jawline.position})px`}} />
              <g>
                state.mouth.lowerLipType && <use xlinkHref={`#lower-lip-${state.mouth.lowerLipType}`} style={{fill:state.mouth.lowerLipColor, stroke:"none"}} />
                state.mouth.upperLipType && <use xlinkHref={`#upper-lip-${state.mouth.upperLipType}`} style={{fill:state.mouth.upperLipColor, stroke:"none"}} />
                state.mouth.smileType && <use xlinkHref={`#smile-${state.mouth.smileType}`} style={{stroke:state.mouth.smileColor, "strokeWidth": state.mouth.smileWidth, fill:"none"}} />
              </g>
              <g>
                state.mustachio.type && <use xlinkHref={`#mustachio-${state.mustachio.type}`} style={{fill:state.mustachio.color, stroke:"none"}} />
                state.mustachio.type && <use xlinkHref={`#mustachio-${state.mustachio.type}`} style={{fill:state.mustachio.color, stroke:"none",transformOrigin: "center center", transform:"scaleX(-1)"}} />
              </g>
              <g>
                state.nose.nostrilsType && <use xlinkHref={`#nostrils-${state.nose.nostrilsType}`} style={{stroke:state.nose.nostrilsColor, "strokeWidth": state.nose.nostrilsWidth, fill:"none"}} />
                state.nose.septumType && <use xlinkHref={`#septum-${state.nose.septumType}`} style={{stroke:state.nose.septumColor, "strokeWidth": state.nose.septumWidth, fill:"none"}} />
              </g>
              <g>
                state.eyes.eyelidType && <use xlinkHref={`#eyelid-${state.eyes.eyelidType}`} style={{fill:state.eyes.eyelidColor, stroke:"none"}} />
                state.eyes.whiteType && <use xlinkHref={`#white-${state.eyes.whiteType}`} style={{fill:state.eyes.whiteColor, stroke:"none"}} />
                state.eyes.irisType && <use xlinkHref={`#iris-${state.eyes.irisType}`} style={{fill:state.eyes.irisColor, stroke:"none"}} />
                state.eyes.pupilType && <use xlinkHref={`#pupil-${state.eyes.pupilType}`} style={{fill:state.eyes.pupilColor, stroke:"none"}} />
                state.eyes.eyelashesType && <use xlinkHref={`#eyelashes-${state.eyes.eyelashesType}`} style={{stroke:state.eyes.eyelashesColor, "strokeWidth": state.mouth.eyelashesWidth, fill:"none"}} />
              </g>
              <g style={{transformOrigin: "center center", transform:"scaleX(-1)"}}>
                state.eyes.eyelidType && <use xlinkHref={`#eyelid-${state.eyes.eyelidType}`} style={{fill:state.eyes.eyelidColor, stroke:"none"}} />
                state.eyes.whiteType && <use xlinkHref={`#white-${state.eyes.whiteType}`} style={{fill:state.eyes.whiteColor, stroke:"none"}} />
                state.eyes.irisType && <use xlinkHref={`#iris-${state.eyes.irisType}`} style={{fill:state.eyes.irisColor, stroke:"none"}} />
                state.eyes.pupilType && <use xlinkHref={`#pupil-${state.eyes.pupilType}`} style={{fill:state.eyes.pupilColor, stroke:"none"}} />
                state.eyes.eyelashesType && <use xlinkHref={`#eyelashes-${state.eyes.eyelashesType}`} style={{stroke:state.eyes.eyelashesColor, "strokeWidth": state.mouth.eyelashesWidth, fill:"none"}} />
              </g>
              state.eyebrows.type && <use xlinkHref={`#eyebrows-${state.eyebrows.type}`} style={{fill:state.eyebrows.color, stroke:"none"}} />
              state.eyebrows.type && <use xlinkHref={`#eyebrows-${state.eyebrows.type}`} style={{fill:state.eyebrows.color, stroke:"none", transformOrigin: "center center", transform:"scaleX(-1)"}} />

            </>}
          </svg> 
        </div>
        </div>
      </div>
  )
}

export default Canvas;
