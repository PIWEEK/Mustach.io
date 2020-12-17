
const initialState = {
  id: 'glases'
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
    case 'SET_TYPE_GLASSES':
      return {...state, type: action.payload};
    case 'SET_POSITION_GLASSES':
      return {...state, position: action.payload};
    case 'SET_SCALE_GLASSES':
      return {...state, scale: action.payload};
    default:
      return state;
  }
}