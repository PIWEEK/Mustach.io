
const initialState = {
  id: 'eyebrows',
  color:'',
  nTypes: 2,
  type:'',
  position: {x:0,y:0},
  scale: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EYEBROWS':
      return {...state, ...action.payload};
    case 'SET_COLOR_EYEBROWS':
      return {...state, color: action.payload}; 
    case 'SET_TYPE_EYEBROWS':
      return {...state, type: action.payload};
    case 'SET_POSITION_EYEBROWS':
      return {...state, position: action.payload};
    case 'SET_SCALE_EYEBROWS':
      return {...state, scale: action.payload};
    default:
      return state;
  }
}