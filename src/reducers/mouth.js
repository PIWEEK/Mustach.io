
const initialState = {
  id: 'mouth',
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
    case 'SET_POSITION_MOUTH':
      return {...state, position: action.payload.y};
    case 'SET_SCALE_MOUTH':
      return {...state, scale: action.payload};
    case 'SET_COLOR_UPPER_LIP':
      return {...state, upperlipColor: action.payload}; 
    case 'SET_TYPE_UPPER_LIP':
      return {...state, upperlipType: action.payload};
    case 'SET_COLOR_SMILE':
      return {...state, smileColor: action.payload}; 
    case 'SET_TYPE_SMILE':
      return {...state, smileType: action.payload};
    case 'SET_COLOR_LOWER_LIP':
      return {...state, lowerlipColor: action.payload}; 
    case 'SET_TYPE_LOWER_LIP':
      return {...state, lowerlipType: action.payload};
    case 'SET_SUBSECTION_SELECTED_MOUTH':
      return {...state, subsectionSelected: action.payload};
    default:
      return state;
  }
}