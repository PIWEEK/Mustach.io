export default {
  randomJawline: (store)=>store.dispatch(
    {
      type: "SET_FRINGE",
      payload: {
        color: store.state.palette.paletteSelected[Math.round(Math.random()*store.state.palette.paletteSelected.length-2)],
        type: `jawline-${Math.ceil(Math.random()*store.state.jawline.nTypes)}`,
        position: 0,
      }
    }
  ),
}
