
const initialState = {
  color:'',
  nTypes: 11,
  type:'',
  position: 0,
  scale: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MUSTACHIO':
      return {...state, ...action.payload};
    case 'SET_COLOR_MUSTACHIO':
      return {...state, color: action.payload}; 
    case 'SET_MUSTACHIO_TYPE':
      return {...state, type: action.payload};
    case 'SET_MUSTACHIO_POSITION':
      return {...state, position: action.payload};
    case 'SET_MUSTACHIO_SCALE':
      return {...state, scale: action.payload};
    default:
      return state;
  }
}