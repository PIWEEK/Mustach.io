import React from 'react';
import './Canvas.css';
import ClickArea from '../ClickArea/ClickArea'
import {useSelector} from 'react-redux'
import Header from '../Header/Header'

const Canvas = ({sectionSelected, setSectionSelected}) => {
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
              <g>
                state.ears.type && <use xlinkHref={`#ears-${state.ears.type}`} style={{fill:state.ears.color, stroke:"none", transformOrigin: "center center", transform:`scale(${state.ears.scale}) translate(${-1*state.ears.position.x}px, ${state.ears.position.y}px)`}} />
                state.ears.type && <use xlinkHref={`#ears-${state.ears.type}`} style={{fill:state.ears.color, stroke:"none", transformOrigin: "center center", transform:`scaleX(-${state.ears.scale}) scaleY(${state.ears.scale}) translate(${-1*state.ears.position.x}px, ${state.ears.position.y}px)`}} />
              </g>

              <g style={{transform:`translateY(${state.fringe.position}px)`}}>
                state.fringe.type && <use xlinkHref={`#fringe-${state.fringe.type}`} style={{fill:state.fringe.color, stroke:"none"}} />
                state.wrinkles.wrinklesforeheadType && <use xlinkHref={`#wrinklesforehead-${state.wrinkles.wrinklesforeheadType}`} style={{stroke:state.wrinkles.wrinklesforeheadColor, fill:"none"}} />
                state.wrinkles.wrinklesforeheadType && <use xlinkHref={`#wrinklesforehead-${state.wrinkles.wrinklesforeheadType}`} style={{stroke:state.wrinkles.wrinklesforeheadColor, fill:"none",transformOrigin: "center center", transform:"scaleX(-1)"}} />
              </g>
              
              <g style={{transform:`translateY(${state.jawline.position}px)`}}>
                state.jawline.type && <use xlinkHref={`#jawline-${state.jawline.type}`} style={{fill:state.jawline.color, stroke:"none"}} />
                state.wrinkles.wrinkleschinType && <use xlinkHref={`#wrinkleschin-${state.wrinkles.wrinkleschinType}`} style={{stroke:state.wrinkles.wrinkleschinColor, fill:"none"}} />
                state.wrinkles.wrinklescheekbonesType && <use xlinkHref={`#wrinklescheekbones-${state.wrinkles.wrinklesType}`} style={{stroke:state.wrinkles.wrinklescheekbonesColor, fill:"none"}} />
                state.wrinkles.wrinklescheekbonesType && <use xlinkHref={`#wrinklescheekbones-${state.wrinkles.wrinklescheekbonesType}`} style={{stroke:state.wrinkles.wrinklescheekbonesColor, fill:"none", transformOrigin:"center center", transform:"scaleX(-1)"}} />
              </g>

              <g style={{transformOrigin: "center center", transform:`scale(-${state.mouth.scale}, ${state.mouth.scale}) translate(${-1*state.mouth.position.x}px, ${state.mouth.position.y}px)`}}>
                state.mouth.lowerlipType && <use xlinkHref={`#lowerlip-${state.mouth.lowerlipType}`} style={{fill:state.mouth.lowerlipColor, stroke:"none"}} />                
                state.mouth.upperlipType && <use xlinkHref={`#upperlip-${state.mouth.upperlipType}`} style={{fill:state.mouth.upperlipColor, stroke:"none"}} />
                state.mouth.smileType && <use xlinkHref={`#smile-${state.mouth.smileType}`} style={{stroke:state.mouth.smileColor, "strokeWidth": state.mouth.smileWidth, fill:"none"}} />
              </g>

              <g style={{transformOrigin:`${state.facialhair.position.x+30}px ${state.facialhair.position.y+30}px`, transform:`rotate(${state.facialhair.rotate}deg) scale(${state.facialhair.scale}) translate(${state.facialhair.position.x}px, ${state.facialhair.position.y}px)`}}>
                state.facialhair.mustachioType && <use xlinkHref={`#mustachio-${state.facialhair.mustachioType}`} style={{fill:state.facialhair.mustachioColor, stroke:"none"}} />
                state.facialhair.beardType && <use xlinkHref={`#beard-${state.facialhair.beardType}`} style={{fill:state.facialhair.beardColor, stroke:"none"}} />
              </g>

              <g style={{transformOrigin:`${state.nose.position.x+30}px ${state.nose.position.y+30}px`, transform:`rotate(${state.nose.rotate}deg) scale(${state.nose.scale}) translate(${state.nose.position.x}px, ${state.nose.position.y}px)`}}>
                state.nose.septumType && <use xlinkHref={`#septum-${state.nose.septumType}`} style={{stroke:state.nose.septumColor, "strokeWidth": state.nose.septumWidth, fill:"none"}} />
                state.nose.nostrilsType && <use xlinkHref={`#nostrils-${state.nose.nostrilsType}`} style={{stroke:state.nose.nostrilsColor, "strokeWidth": state.nose.nostrilsWidth, fill:"none"}} />
              </g>
              
              <g style={{transformOrigin: "center center", transform:`scale(${state.eyes.scale}) translate(${-1*state.eyes.position.x}px, ${state.eyes.position.y}px)`}}>
                state.wrinkles.wrinkleseyesType && <use xlinkHref={`#wrinkleseyes-${state.wrinkles.wrinkleseyesType}`} style={{stroke:state.wrinkles.wrinkleseyesColor, fill:"none"}} />
                state.eyes.whiteType && <use xlinkHref={`#white-${state.eyes.whiteType}`} style={{fill:state.eyes.whiteColor, stroke:"none"}} />
                state.eyes.irisType && <use xlinkHref={`#iris-${state.eyes.irisType}`} style={{fill:state.eyes.irisColor, stroke:"none"}} />
                state.eyes.pupilType && <use xlinkHref={`#pupil-${state.eyes.pupilType}`} style={{fill:state.eyes.pupilColor, stroke:"none"}} />
                state.eyes.eyelidType && <use xlinkHref={`#eyelid-${state.eyes.eyelidType}`} style={{fill:state.eyes.eyelidColor, stroke:"none"}} />
                state.eyes.eyelashesType && <use xlinkHref={`#eyelashes-${state.eyes.eyelashesType}`} style={{stroke:state.eyes.eyelashesColor, "strokeWidth": state.eyes.eyelashesWidth, fill:"none"}} />
              </g>
              <g style={{transformOrigin: "center center", transform:`scale(-${state.eyes.scale}, ${state.eyes.scale}) translate(${-1*state.eyes.position.x}px, ${state.eyes.position.y}px)`}}>
                state.wrinkles.wrinkleseyesType && <use xlinkHref={`#wrinkleseyes-${state.wrinkles.wrinkleseyesType}`} style={{stroke:state.wrinkles.wrinkleseyesColor, fill:"none"}} />
                state.eyes.whiteType && <use xlinkHref={`#white-${state.eyes.whiteType}`} style={{fill:state.eyes.whiteColor, stroke:"none"}} />
                state.eyes.irisType && <use xlinkHref={`#iris-${state.eyes.irisType}`} style={{fill:state.eyes.irisColor, stroke:"none"}} />
                state.eyes.pupilType && <use xlinkHref={`#pupil-${state.eyes.pupilType}`} style={{fill:state.eyes.pupilColor, stroke:"none"}} />
                state.eyes.eyelidType && <use xlinkHref={`#eyelid-${state.eyes.eyelidType}`} style={{fill:state.eyes.eyelidColor, stroke:"none"}} />
                state.eyes.eyelashesType && <use xlinkHref={`#eyelashes-${state.eyes.eyelashesType}`} style={{stroke:state.eyes.eyelashesColor, "strokeWidth": state.eyes.eyelashesWidth, fill:"none"}} />
              </g>
              <g>
                state.eyebrows.type && <use xlinkHref={`#eyebrows-${state.eyebrows.type}`} style={{fill:state.eyebrows.color, stroke:"none", transformOrigin: "center center", transform:`scale(${state.eyebrows.scale}) translate(${-1*state.eyebrows.position.x}px, ${state.eyebrows.position.y}px)`}} />
                state.eyebrows.type && <use xlinkHref={`#eyebrows-${state.eyebrows.type}`} style={{fill:state.eyebrows.color, stroke:"none", transformOrigin: "center center", transform:`scaleX(-${state.eyebrows.scale}) scaleY(${state.eyebrows.scale}) translate(${-1*state.eyebrows.position.x}px, ${state.eyebrows.position.y}px)`}} />
              </g>
              <g>
                state.glasses.type && <use xlinkHref={`#glasses-${state.glasses.type}`} style={{fill:state.glasses.color, stroke:"none", transformOrigin: "center center", transform:`scale(${state.glasses.scale}) translate(${-1*state.glasses.position.x}px, ${state.glasses.position.y}px)`}} />
                state.glasses.type && <use xlinkHref={`#glasses-${state.glasses.type}`} style={{fill:state.glasses.color, stroke:"none", transformOrigin: "center center", transform:`scaleX(-${state.glasses.scale}) scaleY(${state.glasses.scale}) translate(${-1*state.glasses.position.x}px, ${state.glasses.position.y}px)`}} />
              </g>

            </>}
          </svg>
        </div>
        </div>
      </div>
  )
}

export default Canvas;
