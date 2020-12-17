
const palettes = [
  ['#B9B9B9', '#A3A3A3', '#8D8D8D', '#6F6F6F', '#5E5E5E','#000000'],
  ['#738576', '#FFCFBA', '#FFBC9F', '#F68585', '#E05849','#FFA06B'],
  ['#5C899C', '#7F4841', '#613731', '#64322B', '#301A17', '#000000'],
  ['#8CB9BE', '#F1D0C2', '#EFC0B1', '#E05849', '#EA9A8B', '#E05849'],
  ['#97C7FF', '#FFE0E0', '#FFD1D1', '#FFB0C6', '#F886A6', '#5333B0'],
  ['#CBBAF7', '#F6CCF4', '#F1A1DD', '#EE7DC3', '#EA1B6B', '#2184F9'],
  ['#D581FC', '#CDBCFF', '#CEB2FF', '#D581FC', '#537AFF', '#537AFF'],
  ['#E076A3', '#F99EA4', '#FB96A9', '#EC8094', '#DA5C81', '#FFCFDD'],
  ['#EF4C42', '#DA8D80', '#DA8070', '#D25D5F', '#471B1B', '#FFFFFF'],
  ['#FF7E7E', '#A85A51', '#9B483E', '#68342F', '#000000', '#000000'],
  ['#FDA491', '#FEBEB0', '#FFAB99', '#FDA08C', '#FF7355', '#FEE1E1'],
  ['#EEB58C', '#C9744F', '#BE6B47', '#AD5B37', '#9A4824', '#520F0F'],
  ['#CFD276', '#FEE0D5', '#FED1C0', '#FDB1B2', '#F78888', '#BC4C4C'],
  ['#8B8426', '#FFB3B3', '#F8A8A8', '#EC8080', '#DA5C5C', '#B73B3B']
];
const randomPalette = (palettes)=>palettes[Math.round(Math.random()*(palettes.length-1))]

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