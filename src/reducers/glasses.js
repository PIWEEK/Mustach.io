
const initialState = {
  id: 'glasses',
  position: {x:108,y:165},
  color:'',
  nTypes: 6,
  type:'',
  scale: 1
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
      return {...state, position: action.payload.y};
    case 'SET_SCALE_GLASSES':
      return {...state, scale: action.payload};
    default:
      return state;
  }
}