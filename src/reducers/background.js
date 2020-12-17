
const initialState = {
  id:"background",
  color: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COLOR_BACKGROUND':
      return {...state, color: action.payload};
    default:
      return state;
  }
}