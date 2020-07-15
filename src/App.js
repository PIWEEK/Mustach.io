import React, {useReducer} from 'react';
// import logo from './logo.svg';
import Header from "./components/Header/Header.js"
import Canvas from "./components/Canvas/Canvas.js"
import './App.css';
import ParametricMenu from './components/ParametricMenu/ParametricMenu.js';
import AllSVGs from './components/AllSVGs/AllSVGs.js';

function App() {
  const initialState = {
    face: {
      id: 'face',
      nTypes: 24,
      typeSelected: '',
      colorSelected: ''
    },
    hairstyle: {
      id: 'hairstyle',
      nTypes: 12,
      typeSelected: '',
      colorSelected: ''
    },
    fringe: {
      id: 'fringe',
      nTypes: 29,
      typeSelected: '',
      colorSelected: ''
    },
    eyes: {
      id: 'eyes',
      nTypes: 9,
      typeSelected: '',
      colorSelected: ''
    },
    eyeBrows: {
      id: 'eye-brows',
      nTypes: 9,
      typeSelected: '',
      colorSelected: ''
    },
    glases: {
      id: 'glases',
      nTypes: 9,
      typeSelected: '',
      colorSelected: ''
    },
    mouth: {
      id: 'mouth',
      colorSelected: '',
      children: {
        "upper": {id:'upper-lip', name: 'Upper Lip', nTypes: 28, typeSelected: ''},
        "smile": {id:'smile', name: 'Smile', nTypes: 15, typeSelected: ''},
        "lower": {id:'lower-lip', name: 'Lower Lip', nTypes: 27, typeSelected: ''}
      },
    },
    neck: {
      id: 'neck',
      nTypes: 9,
      typeSelected: '',
      colorSelected: ''
    },
    accesories: {
      id: 'accesories',
      nTypes: 9,
      typeSelected: '',
      colorSelected: ''
    }
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_COLOR_FACE':
        return {...state, face:{...state.face,colorSelected: action.payload}}
      case 'SET_TYPE_FACE':
        return {...state, face:{...state.face,typeSelected:action.payload}}
      case 'SET_COLOR_HAIRSTYLE':
        return {...state, hairstyle:{...state.hairstyle,colorSelected: action.payload}}
      case 'SET_TYPE_HAIRSTYLE':
        return {...state, hairstyle:{...state.hairstyle,typeSelected:action.payload}}
      case 'SET_COLOR_FRINGE':
        return {...state, fringe:{...state.fringe,colorSelected: action.payload}}
      case 'SET_TYPE_FRINGE':
        return {...state, fringe:{...state.fringe,typeSelected:action.payload}}
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
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
