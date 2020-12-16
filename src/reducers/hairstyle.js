
const initialState = {
  color:'',
  type:'',
  position: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_HAIRSTYLE':
      return {...state, ...action.payload};
    case 'SET_COLOR_HAIRSTYLE':
      return {...state, color: action.payload}; 
    case 'SET_HAIRSTYLE_TYPE':
      return {...state, type: action.payload};
    case 'SET_HAIRSTYLE_POSITION':
      return {...state, position: action.payload};
    case 'SET_HAIRSTYLE_SCALE':
      return {...state, scale: action.payload};
    default:
      return state;
  }
}