export default {
  randomFringe: (store)=>store.dispatch(
    {
      type: "SET_FRINGE",
      payload: {
        color: store.state.palette.paletteSelected[Math.round(Math.random()*store.state.palette.paletteSelected.length-2)],
        type: `fringe-${Math.ceil(Math.random()*store.state.fringe.nTypes)}`,
        position: 0,
      }
    }
  ),
}
