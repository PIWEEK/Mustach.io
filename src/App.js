import React, {useReducer, useEffect} from 'react';
// import logo from './logo.svg';
import Header from "./components/Header/Header.js"
import Canvas from "./components/Canvas/Canvas.js"
import './App.css';
import ParametricMenu from './components/ParametricMenu/ParametricMenu.js';
import AllSVGs from './components/AllSVGs/AllSVGs.js';

function App() {
  const initialState = {
    background: {
      id: 'background',
      colorSelected: '',
      paletes: [
        ["#2f31c2", "#6c95c8", "#8b83ce","#d38cf5","#f58ca9","#fff5eb"],
        ['#7676b1', '#8a9f86', '#72a0cd', '#f67a6d', '#e2b667', '#fbeae4'], 
        ['#bdbc8d', '#c3ae95', '#e59c6e','#ff9c5c','#e4c053','#f5f1e7']
      ],
      paleteIndexSelected: 0
    },
    face: {
      id: 'face',
      nTypes: 31,
      typeSelected: '',
      colorSelected: ''
    },
    mouth: {
      id: 'mouth',
      colorSelected: '',
      childSelected: 'upper',
      children: {
        "upper": {id:'upperlip', name: 'Upper Lip', nTypes: 42, typeSelected: ''},
        "smile": {id:'smile', name: 'Smile', nTypes: 15, typeSelected: ''},
        "lower": {id:'lowerlip', name: 'Lower Lip', nTypes: 27, typeSelected: ''}
      },
    },
    nose: {
      id: 'nose',
      colorSelected: '',
      childSelected: 'nostril',
      children: {
        "nostril": {id:'nostril', name: 'Nostril', nTypes: 12, typeSelected: ''},
        "septum": {id:'septum', name: 'Septum', nTypes: 9, typeSelected: ''}
      },
    },
    eyes: {
      id: 'eyes',
      colorSelected: '',
      childSelected: 'pupil',
      children: {
        "pupil": {id:'pupil', name: 'Pupil', nTypes: 3, typeSelected: ''},
        "narrow": {id:'eyesnarrow', name: 'Eyes Narrow', nTypes: 26, typeSelected: ''},
        "normal": {id:'eyesnormal', name: 'Eyes Normal', nTypes: 26, typeSelected: ''},
        "wide": {id:'eyeswide', name: 'Eyes Wide', nTypes: 26, typeSelected: ''}
      },
    },
    eyebrows: {
      id: 'eyebrows',
      nTypes: 22,
      typeSelected: '',
      colorSelected: ''
    },
    fringe: {
      id: 'fringe',
      nTypes: 29,
      typeSelected: '',
      colorSelected: ''
    },
    hairstyle: {
      id: 'hairstyle',
      nTypes: 34,
      typeSelected: '',
      colorSelected: ''
    },
    ears: {
      id: 'ears',
      nTypes: 8,
      typeSelected: '',
      colorSelected: ''
    },
    wrinkles: {
      id: 'wrinkles',
      colorSelected: '',
      childSelected: 'mouth',
      children: {
        "mouth": {id:'wrinklesmouth', name: 'Mouth', nTypes: 15, typeSelected: ''},
        "head": {id:'wrinklesforhead', name: 'Head', nTypes: 7, typeSelected: ''}
      },
    },
    neck: {
      id: 'neck',
      nTypes: 12,
      typeSelected: '',
      colorSelected: ''
    },
    glasses: {
      id: 'glasses',
      nTypes: 10,
      typeSelected: '',
      colorSelected: ''
    },
    "facial hair": {
      id: 'facialhair',
      colorSelected: '',
      childSelected: 'beard',
      children: {
        "beard": {id:'beard', name: 'Beard', nTypes: 4, typeSelected: ''},
        "mustachio": {id:'mustachio', name: 'Mustachio', nTypes: 18, typeSelected: ''}
      }
    }
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_COLOR_BACKGROUND':
        return {...state, background:{...state.background,colorSelected: action.payload}}
      case 'SET_COLOR_FACE':
        return {...state, face:{...state.face,colorSelected: action.payload}}
      case 'SET_TYPE_FACE':
        return {...state, face:{...state.face,typeSelected:action.payload}}
      case 'SET_COLOR_NECK':
        return {...state, neck:{...state.neck,colorSelected: action.payload}}
      case 'SET_TYPE_NECK':
        return {...state, neck:{...state.neck,typeSelected:action.payload}}
      case 'SET_COLOR_HAIRSTYLE':
        return {...state, hairstyle:{...state.hairstyle,colorSelected: action.payload}}
      case 'SET_TYPE_HAIRSTYLE':
        return {...state, hairstyle:{...state.hairstyle,typeSelected:action.payload}}
      case 'SET_COLOR_FRINGE':
        return {...state, fringe:{...state.fringe,colorSelected: action.payload}}
      case 'SET_TYPE_FRINGE':
        return {...state, fringe:{...state.fringe,typeSelected:action.payload}}
      case 'SET_COLOR_EARS':
        return {...state, ears:{...state.ears,colorSelected: action.payload}}
      case 'SET_TYPE_EARS':
        return {...state, ears:{...state.ears,typeSelected:action.payload}}
      case 'SET_COLOR_EYEBROWS':
        return {...state, eyebrows:{...state.eyebrows,colorSelected: action.payload}}
      case 'SET_TYPE_EYEBROWS':
        return {...state, eyebrows:{...state.eyebrows,typeSelected:action.payload}}
      case 'SET_COLOR_GLASSES':
        return {...state, glasses:{...state.glasses,colorSelected: action.payload}}
      case 'SET_TYPE_GLASSES':
        return {...state, glasses:{...state.glasses,typeSelected:action.payload}}
      case 'SET_COLOR_MOUTH':
        return {...state, mouth:{...state.mouth,colorSelected: action.payload}}
      case 'SET_CHILD_MOUTH':
        return {...state, mouth:{...state.mouth,childSelected:action.payload}}
      
      
      case 'SET_TYPE_MOUTH_UPPER':
        return {...state, mouth:{...state.mouth, children:{...state.mouth.children, upper: {...state.mouth.children.upper,typeSelected:action.payload}}}}
      case 'SET_TYPE_MOUTH_SMILE':
        return {...state, mouth:{...state.mouth, children:{...state.mouth.children, smile: {...state.mouth.children.smile,typeSelected:action.payload}}}}
      case 'SET_TYPE_MOUTH_LOWER':
        return {...state, mouth:{...state.mouth, children:{...state.mouth.children, lower: {...state.mouth.children.lower,typeSelected:action.payload}}}}

      case 'SET_COLOR_NOSE':
        return {...state, nose:{...state.nose,colorSelected: action.payload}}
      case 'SET_CHILD_NOSE':
        return {...state, nose:{...state.nose,childSelected:action.payload}}
      case 'SET_TYPE_NOSE_NOSTRIL':
        return {...state, nose:{...state.nose, children:{...state.nose.children, nostril: {...state.nose.children.nostril,typeSelected:action.payload}}}}
      case 'SET_TYPE_NOSE_SEPTUM':
        return {...state, nose:{...state.nose, children:{...state.nose.children, septum: {...state.nose.children.septum,typeSelected:action.payload}}}}
      
      case 'SET_COLOR_EYES':
        return {...state, eyes:{...state.eyes,colorSelected: action.payload}}
      case 'SET_CHILD_EYES':
        return {...state, eyes:{...state.eyes,childSelected:action.payload}}
      case 'SET_TYPE_EYES_PUPIL':
          return {...state, eyes:{...state.eyes, children:{...state.eyes.children, pupil: {...state.eyes.children.pupil,typeSelected:action.payload}}}}
      case 'SET_TYPE_EYES_NARROW':
        return {...state, eyes:{...state.eyes, children:{...state.eyes.children, narrow: {...state.eyes.children.narrow,typeSelected:action.payload}, normal: {...state.eyes.children.normal,typeSelected:''}, wide: {...state.eyes.children.wide,typeSelected:''}}}}
      case 'SET_TYPE_EYES_NORMAL':
        return {...state, eyes:{...state.eyes, children:{...state.eyes.children, narrow: {...state.eyes.children.narrow,typeSelected:''}, normal: {...state.eyes.children.normal,typeSelected:action.payload}, wide: {...state.eyes.children.wide,typeSelected:''}}}}
      case 'SET_TYPE_EYES_WIDE':
        return {...state, eyes:{...state.eyes, children:{...state.eyes.children, narrow: {...state.eyes.children.narrow,typeSelected:''}, normal: {...state.eyes.children.normal,typeSelected:''}, wide: {...state.eyes.children.wide,typeSelected:action.payload}}}}
            
      case 'SET_COLOR_WRINKLES':
        return {...state, wrinkles:{...state.wrinkles,colorSelected: action.payload}}
      case 'SET_CHILD_WRINKLES':
        return {...state, wrinkles:{...state.wrinkles,childSelected:action.payload}}
      case 'SET_TYPE_WRINKLES_MOUTH':
        return {...state, wrinkles:{...state.wrinkles, children:{...state.wrinkles.children, mouth: {...state.wrinkles.children.mouth,typeSelected:action.payload}}}}
      case 'SET_TYPE_WRINKLES_HEAD':
        return {...state, wrinkles:{...state.wrinkles, children:{...state.wrinkles.children, head: {...state.wrinkles.children.head,typeSelected:action.payload}}}}

        case 'SET_COLOR_FACIAL HAIR':
        return {...state, "facial hair":{...state["facial hair"],colorSelected: action.payload}}
      case 'SET_CHILD_FACIAL HAIR':
        return {...state, "facial hair":{...state["facial hair"],childSelected:action.payload}}
      case 'SET_TYPE_FACIAL HAIR_BEARD':
        return {...state, "facial hair":{...state["facial hair"], children:{...state["facial hair"].children, beard: {...state["facial hair"].children.beard,typeSelected:action.payload}}}}
      case 'SET_TYPE_FACIAL HAIR_MUSTACHIO':
        return {...state, "facial hair":{...state["facial hair"], children:{...state["facial hair"].children, mustachio: {...state["facial hair"].children.mustachio,typeSelected:action.payload}}}}

      case 'SET_PALETE_INDEX':
        return {...state, background:{...state.background, paleteIndexSelected: action.payload}}
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const randomGenerate = (palete)=> {
    dispatch({type: 'SET_COLOR_BACKGROUND', payload: palete[palete.length-1]})
    dispatch({type: 'SET_COLOR_FACE', payload: palete[Math.round(Math.random()*(palete.length-2))]})
    dispatch({type: 'SET_COLOR_MOUTH', payload: palete[Math.round(Math.random()*(palete.length-2))]})
    dispatch({type: 'SET_COLOR_NOSE', payload: palete[Math.round(Math.random()*(palete.length-2))]})
    dispatch({type: 'SET_COLOR_EYES', payload: palete[Math.round(Math.random()*(palete.length-2))]})
    dispatch({type: 'SET_COLOR_EYEBROWS', payload: palete[Math.round(Math.random()*(palete.length-2))]})
    dispatch({type: 'SET_COLOR_FRINGE', payload: palete[Math.round(Math.random()*(palete.length-2))]})
    dispatch({type: 'SET_COLOR_HAIRSTYLE', payload: palete[Math.round(Math.random()*(palete.length-2))]})
    dispatch({type: 'SET_COLOR_EARS', payload: palete[Math.round(Math.random()*(palete.length-2))]})
    dispatch({type: 'SET_COLOR_WRINKLES', payload: palete[Math.round(Math.random()*(palete.length-2))]})
    dispatch({type: 'SET_COLOR_NECK', payload: palete[Math.round(Math.random()*(palete.length-2))]})
    dispatch({type: 'SET_COLOR_GLASSES', payload: palete[Math.round(Math.random()*(palete.length-2))]})
    dispatch({type: 'SET_COLOR_FACIAL HAIR', payload: palete[Math.round(Math.random()*(palete.length-2))]})
    
    
    const isGlasses = Math.round(Math.random())
    const isWrinkles = Math.round(Math.random())
    const isFace = Math.round(Math.random()*(state.face.nTypes))
    const isHairstyle = Math.round(Math.random()*(state.hairstyle.nTypes))
    dispatch({type: 'SET_TYPE_FACE', payload: `${state.face.id}-${isFace?isFace:1}`})
    dispatch({type: 'SET_TYPE_MOUTH_UPPER', payload: `${state.mouth.children.upper.id}-${Math.round(Math.random()*(state.mouth.children.upper.nTypes))}`})
    dispatch({type: 'SET_TYPE_MOUTH_SMILE', payload: `${state.mouth.children.smile.id}-${Math.round(Math.random()*(state.mouth.children.smile.nTypes))}`})
    dispatch({type: 'SET_TYPE_MOUTH_LOWER', payload: `${state.mouth.children.lower.id}-${Math.round(Math.random()*(state.mouth.children.lower.nTypes))}`})
    dispatch({type: 'SET_TYPE_NOSE_NOSTRIL', payload: `${state.nose.children.nostril.id}-${Math.round(Math.random()*(state.nose.children.nostril.nTypes))}`})
    dispatch({type: 'SET_TYPE_NOSE_SEPTUM', payload: `${state.nose.children.septum.id}-${Math.round(Math.random()*(state.nose.children.septum.nTypes))}`})
    dispatch({type: 'SET_TYPE_EYEBROWS', payload: `${state.eyebrows.id}-${Math.round(Math.random()*(state.eyebrows.nTypes))}`})
    dispatch({type: 'SET_TYPE_FRINGE', payload: `${state.fringe.id}-${Math.round(Math.random()*(state.fringe.nTypes))}`})
    dispatch({type: 'SET_TYPE_HAIRSTYLE', payload: `${state.hairstyle.id}-${isHairstyle?isHairstyle:1}`})
    dispatch({type: 'SET_TYPE_EARS', payload: `${state.ears.id}-${Math.round(Math.random()*(state.ears.nTypes))}`})
    isWrinkles && dispatch({type: 'SET_TYPE_WRINKLES_MOUTH', payload: `${state.wrinkles.children.mouth.id}-${Math.round(Math.random()*(state.wrinkles.children.mouth.nTypes))}`})
    Math.round(Math.random()) && dispatch({type: 'SET_TYPE_WRINKLES_HEAD', payload: `${state.wrinkles.children.head.id}-${Math.round(Math.random()*(state.wrinkles.children.head.nTypes))}`})
    dispatch({type: 'SET_TYPE_NECK', payload: `${state.neck.id}-${Math.round(Math.random()*(state.neck.nTypes))}`})
    isGlasses && dispatch({type: 'SET_TYPE_GLASSES', payload: `${state.glasses.id}-${Math.round(Math.random()*(state.glasses.nTypes))}`})
    if(!isWrinkles){
      Math.round(Math.random()) && dispatch({type: 'SET_TYPE_FACIAL HAIR_BEARD', payload: `${state['facial hair'].children.beard.id}-${Math.round(Math.random()*(state['facial hair'].children.beard.nTypes))}`})
      Math.round(Math.random()) && dispatch({type: 'SET_TYPE_FACIAL HAIR_MUSTACHIO', payload: `${state['facial hair'].children.mustachio.id}-${Math.round(Math.random()*(state['facial hair'].children.mustachio.nTypes))}`})
    }
    if(!isGlasses) {
      dispatch({type: 'SET_TYPE_EYES_PUPIL', payload: `${state.eyes.children.pupil.id}-${Math.round(Math.random()*(state.eyes.children.pupil.nTypes))}`})
      Math.round(Math.random()) && dispatch({type: 'SET_TYPE_EYES_NARROW', payload: `${state.eyes.children.narrow.id}-${Math.round(Math.random()*(state.eyes.children.narrow.nTypes))}`})
      Math.round(Math.random()) && dispatch({type: 'SET_TYPE_EYES_NORMAL', payload: `${state.eyes.children.normal.id}-${Math.round(Math.random()*(state.eyes.children.normal.nTypes))}`})
      Math.round(Math.random()) && dispatch({type: 'SET_TYPE_EYES_WIDE', payload: `${state.eyes.children.wide.id}-${Math.round(Math.random()*(state.eyes.children.wide.nTypes))}`})
    }
  }

  useEffect(()=>{
    const paleteIndex = Math.round(Math.random()*(state.background.paletes.length-1))
    dispatch({type: 'SET_PALETE_INDEX', payload: paleteIndex})
    randomGenerate(state.background.paletes[paleteIndex])


    window.addEventListener('keydown',(e)=>{
      if(e.keyCode===66){
        dispatch({type: 'SET_TYPE_HAIRSTYLE', payload: `${state.hairstyle.id}-32`})
        dispatch({type: 'SET_TYPE_FRINGE', payload:'' })
      }
    });


  },[])
  
  const ayuda=(e)=>{
    console.log(e.keyCode)
  }

  return (
    <div className="App" onKeyPress={(e)=>ayuda(e)}>
      <AllSVGs />
      <Header />
      <div className="App-body">
        <Canvas state={state}/>
        <ParametricMenu state={state} dispatch={dispatch}/>
      </div>
    </div>
  );
}

export default App;
