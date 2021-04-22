
export const palettes = [
  ['#5C899C', '#7F4841', '#754039', '#64322B', '#301A17', '#000000'],
  ['#7FA28C', '#9C5C4C', '#955443', '#833C33', '#67191C', '#8C222C'],
  ['#FF7E7E', '#A85A51', '#A15148', '#68342F', '#000000', '#000000'],
  ['#98ABDE', '#BF776F', '#B86B63', '#AB554C', '#763129', '#A5483E'],
  ['#C63E40', '#EC8677', '#E27C6D', '#D25D60', '#7A0507', '#FBCBCB'],
  ['#476A6F', '#E4998D', '#E58D80', '#D36A5A', '#A64D0E', '#FFBC8C'],

  ['#F1C881', '#F49F8D', '#F59783', '#F18573', '#C16D5B', '#647959'],

  ['#4A3E85', '#F99EA4', '#F3969C', '#EC8094', '#DA5C81', '#E95581'],
  ['#FF8B5C', '#F2BCA6', '#F3AD91', '#E7916E', '#A3583A', '#5E443A'],
  ['#738576', '#FFCFBA', '#FFBC9F', '#F19882', '#E05849', '#FFA06B'],
  ['#8CB9BE', '#FCCFC5', '#FCC6BB', '#FCA390', '#E05849', '#AD4343'],
  ['#5372A0', '#FFC7B4', '#FFBCA6', '#F38F72', '#DC4F2C', '#EC9192'],
  ['#B9B9B9', '#A3A3A3', '#8D8D8D', '#6F6F6F', '#383838', '#000000']
];
export const randomPalette = (palettes)=>palettes[Math.round(Math.random()*(palettes.length-1))]

const initialState = {
  id:"background",
  color: '',
  paletteSelected: randomPalette(palettes)
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COLOR_BACKGROUND':
      return {...state, color: action.payload};
    case 'SET_PALETTE':
        return {...state, paletteSelected: action.payload};
    default:
      return state;
  }
}