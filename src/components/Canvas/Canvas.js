import React from 'react';
import './Canvas.css';
import ClickArea from '../ClickArea/ClickArea'
import {useSelector} from 'react-redux'
import Header from '../Header/Header'

const Canvas = ({sectionSelected}) => {
  const state = useSelector(state=>state)
  return (
    <div className="container-canvas">
      <Header />
      <div className="container-canvas">
        {!(sectionSelected==="background") && <ClickArea sectionSelected={sectionSelected}/>}
        <div className="canvas" style={{backgroundColor: state.background.color ? state.background.color:"#ebeef4"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 360 360">
            {<>
              <g style={{transform:`translateY(${state.hairstyle.position}px)`}}>
                state.hairstyle.type && <use xlinkHref={`#hairstyle-${state.hairstyle.type}`} style={{fill:state.hairstyle.color, stroke:"none", transform:`traslateY(-${state.hairstyle.position})px`}} />
              </g>
              <g style={{transformOrigin: "center center", transform:`translateY(${state.ears.position}px)`}}>
                state.ears.type && <use xlinkHref={`#ears-${state.ears.type}`} style={{fill:state.ears.color, stroke:"none"}} />
                state.ears.type && <use xlinkHref={`#ears-${state.ears.type}`} style={{fill:state.ears.color, stroke:"none", transformOrigin: "center center", transform:`scaleX(-${state.ears.scale})`}} />
              </g>
              <g style={{transform:`translateY(${state.fringe.position}px)`}}>
                state.fringe.type && <use xlinkHref={`#fringe-${state.fringe.type}`} style={{fill:state.fringe.color, stroke:"none"}} />
                state.wrinkles.wrinklesforeheadType && <use xlinkHref={`#wrinklesforehead-${state.wrinkles.wrinklesforeheadType}`} style={{stroke:state.wrinkles.wrinklesforeheadColor, fill:"none"}} />
                state.wrinkles.wrinklesforeheadType && <use xlinkHref={`#wrinklesforehead-${state.wrinkles.wrinklesforeheadType}`} style={{stroke:state.wrinkles.wrinklesforeheadColor, fill:"none",transformOrigin: "center center", transform:"scaleX(-1)"}} />
              </g>
              <g style={{transform:`translateY(${state.jawline.position}px)`}}>
                state.jawline.type && <use xlinkHref={`#jawline-${state.jawline.type}`} style={{fill:state.jawline.color, stroke:"none"}} />
                state.wrinkles.wrinkleschinType && <use xlinkHref={`#wrinkleschin-${state.wrinkles.wrinkleschinType}`} style={{stroke:state.wrinkles.wrinkleschinColor, fill:"none"}} />
                state.wrinkles.wrinklescheekbonesType && <use xlinkHref={`#wrinklescheekbones-${state.wrinkles.wrinklescheekbonesType}`} style={{stroke:state.wrinkles.wrinklescheekbonesColor, fill:"none"}} />
                state.wrinkles.wrinkleschinType && <use xlinkHref={`#wrinkleschin-${state.wrinkles.wrinkleschinType}`} style={{stroke:state.wrinkles.wrinkleschinColor, fill:"none", transformOrigin:"center center", transform:"scaleX(-1)"}} />
                state.wrinkles.wrinklescheekbonesType && <use xlinkHref={`#wrinklescheekbones-${state.wrinkles.wrinklescheekbonesType}`} style={{stroke:state.wrinkles.wrinklescheekbonesColor, fill:"none", transformOrigin:"center center", transform:"scaleX(-1)"}} />
              </g>
              <g  style={{transformOrigin: "center center", transform:`scale(${state.mouth.scale})  translateY(${state.mouth.position}px)`}}>
                state.wrinkles.wrinklesmouthType && <use xlinkHref={`#wrinklesmouth-${state.wrinkles.wrinklesmouthType}`} style={{stroke:state.wrinkles.wrinklesmouthColor, fill:"none",transformOrigin: "center center", transform:"scaleX(-1)"}} />
                state.wrinkles.wrinklesmouthType && <use xlinkHref={`#wrinklesmouth-${state.wrinkles.wrinklesmouthType}`} style={{stroke:state.wrinkles.wrinklesmouthColor, fill:"none"}} />
                state.mouth.lowerlipType && <use xlinkHref={`#lowerlip-${state.mouth.lowerlipType}`} style={{fill:state.mouth.lowerlipColor, stroke:"none"}} />
                state.mouth.upperlipType && <use xlinkHref={`#upperlip-${state.mouth.upperlipType}`} style={{fill:state.mouth.upperlipColor, stroke:"none"}} />
                state.mouth.smileType && <use xlinkHref={`#smile-${state.mouth.smileType}`} style={{stroke:state.mouth.smileColor, "strokeWidth": state.mouth.smileWidth, fill:"none"}} />
              </g>
              <g style={{transformOrigin: "center center", transform:`scale(${state.mustachio.scale}) translateY(${state.mustachio.position}px)`}}>
                state.mustachio.type && <use xlinkHref={`#mustachio-${state.mustachio.type}`} style={{fill:state.mustachio.color, stroke:"none"}} />
                state.mustachio.type && <use xlinkHref={`#mustachio-${state.mustachio.type}`} style={{fill:state.mustachio.color, stroke:"none",transformOrigin: "center center", transform:"scaleX(-1)"}} />
              </g>
              <g style={{transform:`scale(${state.nose.scale}) translate(${state.nose.position.x}px, ${state.nose.position.y}px)`}}>
                state.nose.nostrilsType && <use xlinkHref={`#nostrils-${state.nose.nostrilsType}`} style={{stroke:state.nose.nostrilsColor, "strokeWidth": state.nose.nostrilsWidth, fill:"none"}} />
                state.nose.septumType && <use xlinkHref={`#septum-${state.nose.septumType}`} style={{stroke:state.nose.septumColor, "strokeWidth": state.nose.septumWidth, fill:"none"}} />
              </g>
              <g style={{transformOrigin: "center center", transform:`scale(${state.eyes.scale}) translate(${-1*state.eyes.position.x}px, ${state.eyes.position.y}px)`}}>
                state.wrinkles.wrinkleseyesType && <use xlinkHref={`#wrinkleseyes-${state.wrinkles.wrinkleseyesType}`} style={{stroke:state.wrinkles.wrinkleseyesColor, fill:"none"}} />
                state.eyes.eyelidType && <use xlinkHref={`#eyelid-${state.eyes.eyelidType}`} style={{fill:state.eyes.eyelidColor, stroke:"none"}} />
                state.eyes.whiteType && <use xlinkHref={`#white-${state.eyes.whiteType}`} style={{fill:state.eyes.whiteColor, stroke:"none"}} />
                state.eyes.irisType && <use xlinkHref={`#iris-${state.eyes.irisType}`} style={{fill:state.eyes.irisColor, stroke:"none"}} />
                state.eyes.pupilType && <use xlinkHref={`#pupil-${state.eyes.pupilType}`} style={{fill:state.eyes.pupilColor, stroke:"none"}} />
                state.eyes.eyelashesType && <use xlinkHref={`#eyelashes-${state.eyes.eyelashesType}`} style={{stroke:state.eyes.eyelashesColor, "strokeWidth": state.eyes.eyelashesWidth, fill:"none"}} />
              </g>
              <g style={{transformOrigin: "center center", transform:`scale(-${state.eyes.scale}, ${state.eyes.scale}) translate(${-1*state.eyes.position.x}px, ${state.eyes.position.y}px)`}}>
                state.wrinkles.wrinkleseyesType && <use xlinkHref={`#wrinkleseyes-${state.wrinkles.wrinkleseyesType}`} style={{stroke:state.wrinkles.wrinkleseyesColor, fill:"none"}} />
                state.eyes.eyelidType && <use xlinkHref={`#eyelid-${state.eyes.eyelidType}`} style={{fill:state.eyes.eyelidColor, stroke:"none"}} />
                state.eyes.whiteType && <use xlinkHref={`#white-${state.eyes.whiteType}`} style={{fill:state.eyes.whiteColor, stroke:"none"}} />
                state.eyes.irisType && <use xlinkHref={`#iris-${state.eyes.irisType}`} style={{fill:state.eyes.irisColor, stroke:"none"}} />
                state.eyes.pupilType && <use xlinkHref={`#pupil-${state.eyes.pupilType}`} style={{fill:state.eyes.pupilColor, stroke:"none"}} />
                state.eyes.eyelashesType && <use xlinkHref={`#eyelashes-${state.eyes.eyelashesType}`} style={{stroke:state.eyes.eyelashesColor, "strokeWidth": state.eyes.eyelashesWidth, fill:"none"}} />
              </g>
              <g>
                state.eyebrows.type && <use xlinkHref={`#eyebrows-${state.eyebrows.type}`} style={{stroke:state.eyebrows.color, fill:"none", transformOrigin: "center center", transform:`scale(${state.eyebrows.scale}) translate(${-1*state.eyebrows.position.x}px, ${state.eyebrows.position.y}px)`}} />
                state.eyebrows.type && <use xlinkHref={`#eyebrows-${state.eyebrows.type}`} style={{stroke:state.eyebrows.color, fill:"none", transformOrigin: "center center", transform:`scaleX(-${state.eyebrows.scale}) scaleY(${state.eyebrows.scale}) translate(${-1*state.eyebrows.position.x}px, ${state.eyebrows.position.y}px)`}} />
              </g>
              <g>
                state.glasses.type && <use xlinkHref={`#glasses-${state.glasses.type}`} style={{fill:state.glasses.color, stroke:"none", transformOrigin: "center center", transform:`scaleX(${state.glasses.scale})  translateY(${state.glasses.position}px)`}} />
                state.glasses.type && <use xlinkHref={`#glasses-${state.glasses.type}`} style={{fill:state.glasses.color, stroke:"none", transformOrigin: "center center", transform:`scaleX(-${state.glasses.scale}) translateY(${state.glasses.position}px)`}} />
              </g>
            </>}
          </svg>
        </div>
        </div>
      </div>
  )
}

export default Canvas;
