export default {
  randomPalette: (store)=>store.dispatch(
    {
      type: 'SET_PALETTE',
      payload: store.state.palette.palettes[Math.round(Math.random()*(store.state.palette.palettes.length-1))]
    }
  ),
}
export const randomPalette = () => dispatch()