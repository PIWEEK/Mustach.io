import React, {useState} from 'react';
import './ParametricMenu.css';
import Dropdown from '../Dropdown/Dropdown';
import ColorSelector from '../ColorSelector/ColorSelector';
import SVGsList from '../SVGsList/SVGsList';

const ParametricMenu = ({state, dispatch}) => {
  const [option, setOption] = useState('background');
  const optiosMenu = Object.entries(state).map(x=>x[0])

  const changeColor = (newColor) => dispatch({type: `SET_COLOR_${option.toUpperCase()}`, payload: newColor})
  const changetypeSelected = (newType) => dispatch({type: `SET_TYPE_${option.toUpperCase()}`, payload: newType})
  const changeChildSelected = (newChild) => dispatch({type: `SET_CHILD_${option.toUpperCase()}`, payload: newChild})
  const changeChildTypeSelected = (newType) => dispatch({type: `SET_TYPE_${option.toUpperCase()}_${state[option].childSelected.toUpperCase()}`, payload: newType})

  return (
    <div className="parametric-container">
      <div className="parametric-menu">
        <Dropdown
          optiosMenu={optiosMenu}
          option={option}
          setOption={setOption}
        />
        <ColorSelector colorSelected={state[option].colorSelected} changeColor={changeColor} colors = {state.background.paletes[state.background.paleteIndexSelected]}/>
        {option!=='background' && <SVGsList feature={state[option]} changetypeSelected={changetypeSelected} changeChildSelected={changeChildSelected} changeChildTypeSelected={changeChildTypeSelected}/>}
      </div>
      <p className="legal">This is a project by @samuel_mad, @reversotenebros and @estdubois made during the piweek</p>
    </div>
  )
}

export default ParametricMenu;
