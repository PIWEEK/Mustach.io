
const initialState = {
  position: 0,
  scale: 0,
  nTypesUpperLip: 36,
  nTypesSmile: 13,
  nTypesLowerLip: 21,
  upperLipColor:'',
  upperLipType:'',
  smileColor:'',
  smileWidth: 3,
  smileType:'',
  lowerLipColor:'',
  lowerLipType:''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOUTH':
      return {...state, ...action.payload};
    case 'SET_MOUTH_POSITION':
      return {...state, position: action.payload};
    case 'SET_MOUTH_SCALE':
      return {...state, scale: action.payload};
    case 'SET_UPPER_LIP_COLOR':
      return {...state, upperLipColor: action.payload}; 
    case 'SET_UPPER_LIP_TYPE':
      return {...state, upperLipType: action.payload};
    case 'SET_SMILE_COLOR':
      return {...state, eyelashesColor: action.payload}; 
    case 'SET_SMILE_TYPE':
      return {...state, eyelashesType: action.payload};
    case 'SET_LOWER_LIP_COLOR':
      return {...state, lowerLipColor: action.payload}; 
    case 'SET_LOWER_LIP_TYPE':
      return {...state, lowerLipType: action.payload};
    default:
      return state;
  }
}