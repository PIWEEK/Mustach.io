
const initialState = {
  id: 'wrinkles',
  wrinklescheekbonesPosition: {x:-200,y:305},
  scale: 0,
  subsections: ['Wrinkles Forehead', 'Wrinkles Cheekbones', 'Wrinkles Mouth', 'Wrinkles Chin', 'Wrinkles Eyes'],
  subsectionSelected:'Wrinkles Forehead',
  nTypesWrinklesForehead: 3,
  nTypesWrinklesCheekbones: 9,
  nTypesWrinklesMouth:12,
  nTypesWrinklesChin:8,
  nTypesWrinklesEyes:10,
  wrinklesforeheadType:'',
  wrinklesforeheadColor:'',
  wrinklescheekbonesType:'',
  wrinklescheekbonesColor:'',
  wrinklesmouthType:'',
  wrinklesmouthColor:'',
  wrinkleschinType:'',
  wrinkleschinColor:'',
  wrinkleseyesType:'',
  wrinkleseyesColor:'',
  wrinklesforeheadPosition: {x:100, y:100},
  wrinklescheekbonesPosition: {x:100, y:200},
  wrinklesmouthPosition: {x:120, y:240},
  wrinkleschinPosition: {x:150, y:270},
  wrinkleseyesPosition: {x:101, y:155},
  fill: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WRINKLES':
      return {...state, ...action.payload};
    case 'SET_POSITION_WRINKLES':
      return {...state, position: action.payload.y};
    case 'SET_SCALE_WRINKLES':
      return {...state, scale: action.payload};
    case 'SET_COLOR_WRINKLES_FOREHEAD':
      return {...state, wrinklesforeheadColor: action.payload}; 
    case 'SET_TYPE_WRINKLES_FOREHEAD':
      return {...state, wrinklesforeheadType: action.payload};
    case 'SET_COLOR_WRINKLES_CHEEKBONES':
      return {...state, wrinklescheekbonesColor: action.payload}; 
    case 'SET_TYPE_WRINKLES_CHEEKBONES':
      return {...state, wrinklescheekbonesType: action.payload};
    case 'SET_COLOR_WRINKLES_MOUTH':
      return {...state, wrinklesmouthColor: action.payload}; 
    case 'SET_TYPE_WRINKLES_MOUTH':
      return {...state, wrinklesmouthType: action.payload};
      case 'SET_COLOR_WRINKLES_CHIN':
      return {...state, wrinkleschinColor: action.payload}; 
    case 'SET_TYPE_WRINKLES_CHIN':
      return {...state, wrinkleschinType: action.payload};
      case 'SET_COLOR_WRINKLES_EYES':
      return {...state, wrinkleseyesColor: action.payload}; 
    case 'SET_TYPE_WRINKLES_EYES':
      return {...state, wrinkleseyesType: action.payload};
    case 'SET_SUBSECTION_SELECTED_WRINKLES':
      return {...state, subsectionSelected: action.payload};
    default:
      return state;
  }
}