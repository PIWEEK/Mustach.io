
const initialState = {
  position: 0,
  scale: 0,
  subsections: ['Upper Lip','Lower Lip','Smile'],
  subsectionSelected:'Upper Lip',
  nTypesUpperLip: 36,
  nTypesSmile: 13,
  nTypesLowerLip: 21,
  upperlipColor:'',
  upperlipType:'',
  smileColor:'',
  smileWidth: 3,
  smileType:'',
  lowerlipColor:'',
  lowerlipType:''
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
      return {...state, upperlipColor: action.payload}; 
    case 'SET_UPPER_LIP_TYPE':
      return {...state, upperlipType: action.payload};
    case 'SET_SMILE_COLOR':
      return {...state, eyelashesColor: action.payload}; 
    case 'SET_SMILE_TYPE':
      return {...state, eyelashesType: action.payload};
    case 'SET_LOWER_LIP_COLOR':
      return {...state, lowerlipColor: action.payload}; 
    case 'SET_LOWER_LIP_TYPE':
      return {...state, lowerlipType: action.payload};
    case 'SET_SUBSECTION_SELECTED_MOUTH':
      return {...state, subsectionSelected: action.payload};
    default:
      return state;
  }
}