export default {
  randomBackground: (store)=>store.dispatch(
    {
      type: 'SET_COLOR_BACKGROUND',
      payload: store.state.palette.paletteSelected[store.state.palette.paletteSelected.length-1]
    }
  ),
}
