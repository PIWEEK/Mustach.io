
const initialState = {
  color:'',
  nTypes: '33',
  type:'',
  position: 0,
  scale: 0
}

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'SET_FRINGE':
      return {...state, ...action.payload};
    case 'SET_COLOR_FRINGE':
      return {...state, color: action.payload}; 
    case 'SET_FRINGE_TYPE':
      return {...state, type: action.payload};
    case 'SET_FRINGE_POSITION':
      return {...state, position: action.payload};
    case 'SET_FRINGE_SCALE':
      return {...state, scale: action.payload};
    default:
      return state;
  }
}