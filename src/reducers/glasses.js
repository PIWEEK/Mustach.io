
const initialState = {
  color:'',
  type:'',
  position: 0,
  scale: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GLASSES':
      return {...state, ...action.payload};
    case 'SET_COLOR_GLASSES':
      return {...state, color: action.payload}; 
    case 'SET_GLASSES_TYPE':
      return {...state, type: action.payload};
    case 'SET_GLASSES_POSITION':
      return {...state, position: action.payload};
    case 'SET_GLASSES_SCALE':
      return {...state, scale: action.payload};
    default:
      return state;
  }
}