const palettes = [
  ["#2f31c2", "#6c95c8", "#8b83ce","#d38cf5","#f58ca9","#fff5eb"],
  ['#7676b1', '#8a9f86', '#72a0cd', '#f67a6d', '#e2b667', '#fbeae4'], 
  ['#bdbc8d', '#c3ae95', '#e59c6e','#ff9c5c','#e4c053','#f5f1e7']
];
const randomPalette = (palettes)=>palettes[Math.round(Math.random(palettes.length-1))]
const initialState = {
  types: palettes,
  selected: randomPalette(palettes),
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PALETTE':
      return {...state, paletteSelected: action.payload};
    default:
      return state;
  }
}