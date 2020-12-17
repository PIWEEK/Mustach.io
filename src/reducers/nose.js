
const initialState = {
  id: 'nose',
  position: 0,
  scale: 0,
  subsections: ['Nostrils','Septum'],
  subsectionSelected:'Nostrils',
  nTypesNostrils: 22,
  nostrilsColor:'',
  nostrilsWidth:3,
  nostrilsType:'',
  nTypesSeptum: 19,
  septumColor:'',
  septumWidth: 3,
  septumType:''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOSE':
      return {...state, ...action.payload};
    case 'SET_NOSE_POSITION':
      return {...state, position: action.payload};
    case 'SET_NOSE_SCALE':
      return {...state, scale: action.payload};
    case 'SET_COLOR_NOSTRILS':
      return {...state, nostrilsColor: action.payload}; 
    case 'SET_TYPE_NOSTRILS':
      return {...state, nostrilsType: action.payload};
    case 'SET_COLOR_SEPTUM':
      return {...state, septumColor: action.payload}; 
    case 'SET_TYPE_SEPTUM':
      return {...state, septumType: action.payload};
    case 'SET_SUBSECTION_SELECTED_NOSE':
      return {...state, subsectionSelected: action.payload};
    default:
      return state;
  }
}