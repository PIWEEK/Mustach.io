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
    dispatch({type: 'SET_COLOR_BACKGROUND', payload: palette[0]});
    dispatch({
      type: 'SET_EARS', 
      payload: {
        color: palette[2],
        type: randomize(state.ears.nTypes, 'ceil')
      }
    });

    dispatch({
      type: 'SET_FRINGE', 
      payload: {
        color: palette[1],
        type: randomize(state.fringe.nTypes, 'ceil'),
        position: randomize(5)
      }
    });

    dispatch({
      type: 'SET_JAWLINE', 
      payload: {
        color: palette[1],
        type: randomize(state.jawline.nTypes, 'ceil'),
        position: randomize(5)
      }
    });

    dispatch({
      type: 'SET_MOUTH', 
      payload: {
        upperlipColor:palette[4],
        upperlipType: randomize(state.mouth.nTypesUpperLip, 'ceil'),
        smileColor: palette[4],
        smileType: randomize(state.mouth.nTypesSmile, 'ceil'),
        lowerlipColor: palette[3],
        lowerlipType: randomize(state.mouth.nTypesLowerLip, 'ceil')
      }
    });

    dispatch({
      type: 'SET_MUSTACHIO', 
      payload: {
        color: palette[5],
        type: randomize(state.mustachio.nTypes, 'ceil')
      }
    });

    dispatch({
      type: 'SET_NOSE', 
      payload: {
        nostrilsColor:palette[3],
        nostrilsType: randomize(state.nose.nTypesNostrils, 'ceil'),
        septumColor: palette[3],
        septumType: randomize(state.nose.nTypesSeptum, 'ceil'),
      }
    });

    dispatch({
      type: 'SET_EYES', 
      payload: {
        pupilColor: '#000000',
        eyelidColor: palette[3],
        irisColor: palette[0],
        eyelashesColor: palette[4],
        pupilType: randomize(state.eyes.nTypesPupil, 'ceil'),
        eyelidType: randomize(state.eyes.nTypesEyelid, 'ceil'),
        whiteType: randomize(state.eyes.nTypesWhite, 'ceil'),
        irisType: randomize(state.eyes.nTypesIris, 'ceil'),
        eyelashesType: randomize(state.eyes.nTypesEyelashes, 'ceil'),
      }
    });

    dispatch({
      type: 'SET_EYEBROWS', 
      payload: {
        color: palette[4],
        type: randomize(state.eyebrows.nTypes, 'ceil')
      }
    });
  }


  useEffect(()=>{
    randomColors(state.background.paletteSelected)
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
