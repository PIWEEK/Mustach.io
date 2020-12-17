import palette from "./palette";

const palettes = [
  ['#B9B9B9', 'A3A3A3', '#8D8D8D', '#6F6F6F', '#5E5E5E','#000000'],
  ['#738576', '#FFCFBA', '#FFBC9F', '#F68585', '#E05849','#FFA06B'],
  ['#5C899C', '#7F4841', '#613731', '#64322B', '#301A17', '#000000']
];
const randomPalette = (palettes)=>palettes[Math.round(Math.random(palettes.length-1))]

const initialState = {
  id:"background",
  color: '',
  paletteSelected: randomPalette(palettes)
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COLOR_BACKGROUND':
      return {...state, color: action.payload};
    default:
      return state;
  }
}