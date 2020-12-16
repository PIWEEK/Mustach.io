
const initialState = {
  color:'',
  nTypes: 16,
  type:'',
  position: 0,
  scale: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_JAWLINE':
      return {...state, ...action.payload};
    case 'SET_COLOR_JAWLINE':
      return {...state, color: action.payload}; 
    case 'SET_JAWLINE_TYPE':
      return {...state, type: action.payload};
    case 'SET_JAWLINE_POSITION':
      return {...state, position: action.payload};
    case 'SET_JAWLINE_SCALE':
      return {...state, scale: action.payload};
    default:
      return state;
  }
}