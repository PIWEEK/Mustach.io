
const initialState = {
  position: 0,
  scale: 0,
  subsections: ['Eyelid','White','Iris','Pupil','Eyelashes'],
  subsectionSelected:'Eyelid',
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
  eyelashesWidth: 5
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EYES':
      return {...state, ...action.payload};
    case 'SET_SHAPE_EYES':
      return {...state, shape: action.payload};
    case 'SET_POSITION_EYES':
      return {...state, position: action.payload};
    case 'SET_SCALE_EYES':
      return {...state, scale: action.payload};
    case 'SET_COLOR_PUPIL':
      return {...state, pupilColor: action.payload}; 
    case 'SET_TYPE_PUPIL':
      return {...state, pupilType: action.payload};
    case 'SET_COLOR_EYELASHES':
      return {...state, eyelashesColor: action.payload}; 
    case 'SET_TYPE_EYELASHES':
      return {...state, eyelashesType: action.payload};
    case 'SET_COLOR_EYELID':
      return {...state, eyelidColor: action.payload}; 
    case 'SET_TYPE_EYELID':
      return {...state, eyelidType: action.payload, eyewhiteType: action.payload};
    case 'SET_SUBSECTION_SELECTED_EYES':
      return {...state, subsectionSelected: action.payload};
    default:
      return state;
  }
}