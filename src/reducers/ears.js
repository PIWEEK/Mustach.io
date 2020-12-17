
const initialState = {
  id: 'ears',
  nTypes: 1,
  color:'',
  type:'',
  position: 0,
  scale: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EARS':
      return {...state, ...action.payload};
    case 'SET_COLOR_EARS':
      return {...state, color: action.payload}; 
    case 'SET_TYPE_EARS':
      return {...state, type: action.payload};
    case 'SET_POSITION_EARS':
      return {...state, position: action.payload};
    case 'SET_SCALE_EARS':
      return {...state, scale: action.payload};
    default:
      return state;
  }
}