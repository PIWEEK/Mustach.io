
export const palettes = [
  ['#B9B9B9', '#A3A3A3', '#8D8D8D', '#6F6F6F', '#5E5E5E', '#000000'],
  ['#738576', '#FFCFBA', '#FFBC9F', '#F68585', '#E05849', '#FFA06B'],
  ['#5C899C', '#7F4841', '#754039', '#64322B', '#301A17', '#000000'],
  ['#CBBAF7', '#F6CCF4', '#e8bae6', '#EE7DC3', '#EA1B6B', '#2184F9'],
  ['#D581FC', '#CDBCFF', '#CEB2FF', '#D581FC', '#537AFF', '#537AFF'],
  ['#E076A3', '#F99EA4', '#FB96A9', '#EC8094', '#DA5C81', '#FFCFDD'],
  ['#D25D5F', '#DA8D80', '#DA8070', '#D25D5F', '#924648', '#FFD5CE'],
  ['#FF7E7E', '#A85A51', '#A15148', '#68342F', '#000000', '#000000'],
  ['#5A849C', '#FEBEB0', '#FFAB99', '#FDA08C', '#FF7355', '#FEE1E1'],
  ['#EEB58C', '#C9744F', '#BE6B47', '#AD5B37', '#9A4824', '#520F0F'],
  ['#CFD2C4', '#FEE0D5', '#FFD4C7', '#F4C4B5', '#DC9A86', '#B4B6C1'],
  ['#8B8426', '#FFB3B3', '#F8A8A8', '#EC8080', '#DA5C5C', '#B73B3B']
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