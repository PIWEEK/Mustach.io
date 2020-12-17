
const initialState = {
  position: 0,
  scale: 0,
  nTypesPupil: 1,
  nTypesEyelid: 15,
  nTypesWhite: 12,
  nTypesIris: 1,
  nTypesEyelashes: 12,
  pupilColor: '',
  eyelidColor: '',
  whiteColor: '',
  irisColor: '',
  eyelashesColor: '',
  pupilType: '',
  eyelidType: '',
  whiteType: '',
  irisType: '',
  eyelashesType: '',
  eyelashesWidth: 3
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EYES':
      return {...state, ...action.payload};
    case 'SET_EYES_SHAPE':
      return {...state, shape: action.payload};
    case 'SET_POSITION_EYES':
      return {...state, position: action.payload};
    case 'SET_EYES_SCALE':
      return {...state, scale: action.payload};
    case 'SET_PUPIL_COLOR':
      return {...state, pupilColor: action.payload}; 
    case 'SET_PUPIL_TYPE':
      return {...state, pupilType: action.payload};
    case 'SET_EYELASHES_COLOR':
      return {...state, eyelashesColor: action.payload}; 
    case 'SET_EYELASHES_TYPE':
      return {...state, eyelashesType: action.payload};
    case 'SET_EYELID_COLOR':
      return {...state, eyelidColor: action.payload}; 
    case 'SET_EYELID_TYPE':
      return {...state, eyelidType: action.payload, eyewhiteType: action.payload};
    default:
      return state;
  }
}