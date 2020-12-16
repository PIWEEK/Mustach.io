import React, {useEffect} from 'react';
import Canvas from "./components/Canvas/Canvas.js"
import './App.css';
import ParametricMenu from './components/ParametricMenu/ParametricMenu.js';
import AllSVGs from './components/AllSVGs/AllSVGs.js';
import Download from './components/Download/Download.js'
import {useSelector, useDispatch} from 'react-redux'

function App() {
  const state = useSelector(state=>state)
  const dispatch = useDispatch()
  const randomize = (param, round = 'normal') =>{
    if(round === 'nomal') {
      return Math.round(Math.random()*param);
    } else if(round==='ceil') {
      return Math.ceil(Math.random()*param);
    } else {
      return Math.floor(Math.random()*param);
    }
  }
  const randomColors = (palette) => {
    dispatch({type: 'SET_COLOR_BACKGROUND', payload: palette[palette.length-1]});
    const faceColor = palette[randomize(palette.length-2)]
    dispatch({
      type: 'SET_EARS', 
      payload: {
        color: palette[randomize(palette.length-2)],
        type: randomize(state.ears.nTypes, 'ceil')
      }
    });

    dispatch({
      type: 'SET_FRINGE', 
      payload: {
        color: faceColor,
        type: randomize(state.fringe.nTypes, 'ceil'),
        position: randomize(5)
      }
    });

    dispatch({
      type: 'SET_JAWLINE', 
      payload: {
        color: faceColor,
        type: randomize(state.jawline.nTypes, 'ceil'),
        position: randomize(5)
      }
    });

    dispatch({
      type: 'SET_MOUTH', 
      payload: {
        upperLipColor:palette[randomize(palette.length-2)],
        upperLipType: randomize(state.mouth.nTypesUpperLip, 'ceil'),
        smileColor: palette[randomize(palette.length-2)],
        smileType: randomize(state.mouth.nTypesSmile, 'ceil'),
        lowerLipColor: palette[randomize(palette.length-2)],
        lowerLipType: randomize(state.mouth.nTypesLowerLip, 'ceil')
      }
    });

    dispatch({
      type: 'SET_MUSTACHIO', 
      payload: {
        color: palette[randomize(palette.length-2)],
        type: randomize(state.mustachio.nTypes, 'ceil')
      }
    });

    dispatch({
      type: 'SET_NOSE', 
      payload: {
        nostrilsColor:palette[randomize(palette.length-2)],
        nostrilsType: randomize(state.nose.nTypesNostrils, 'ceil'),
        septumColor: palette[randomize(palette.length-2)],
        septumType: randomize(state.nose.nTypesSeptum, 'ceil'),
      }
    });

    dispatch({
      type: 'SET_EYES', 
      payload: {
        pupilColor: palette[randomize(palette.length-2)],
        eyelidColor: palette[randomize(palette.length-2)],
        irisColor: palette[randomize(palette.length-2)],
        eyelashesColor: palette[randomize(palette.length-2)],
        pupilType: randomize(state.eyes.nTypesPupil, 'ceil'),
        eyelidType: randomize(state.eyes.nTypesEyelid, 'ceil'),
        whiteType: randomize(state.eyes.nTypesWhite, 'ceil'),
        irisType: randomize(state.eyes.nTypesIris, 'ceil'),
        eyelashesType: randomize(state.eyes.nTypesEyelashes, 'ceil'),
        nostrilsColor:palette[randomize(palette.length-2)],
        nostrilsType: randomize(state.nose.nTypesNostrils, 'ceil'),
        septumColor: palette[randomize(palette.length-2)],
        septumType: randomize(state.nose.nTypesSeptum, 'ceil'),
      }
    });

    dispatch({
      type: 'SET_EYEBROWS', 
      payload: {
        color: palette[randomize(palette.length-2)],
        type: randomize(state.eyebrows.nTypes, 'ceil')
      }
    });
  }


  useEffect(()=>{
    randomColors(state.palette.selected)
  },[])
  
  return (
    <div className="App">
      <AllSVGs />
      {
        (false == true) &&
          <Download />
      }
      <div className="App-body">
        <Canvas />
        <ParametricMenu/>
      </div>
    </div>
  );
}

export default App;
