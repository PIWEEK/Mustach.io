
const initialState = {
  color:'',
  nTypes: 2,
  type:'',
  position: 0,
  scale: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EYEBROWS':
      return {...state, ...action.payload};
    case 'SET_COLOR_EYEBROWS':
      return {...state, color: action.payload}; 
    case 'SET_EYEBROWS_TYPE':
      return {...state, type: action.payload};
    case 'SET_EYEBROWS_POSITION':
      return {...state, position: action.payload};
    case 'SET_EYEBROWS_SCALE':
      return {...state, scale: action.payload};
    default:
      return state;
  }
}