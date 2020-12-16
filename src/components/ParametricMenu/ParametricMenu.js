import React, {useState} from 'react';
import './ParametricMenu.css';
import Dropdown from '../Dropdown/Dropdown';
import ColorSelector from '../ColorSelector/ColorSelector';
import SVGsList from '../SVGsList/SVGsList';
import {useSelector, useDispatch} from 'react-redux'


const ParametricMenu = () => {
  const dispatch = useDispatch();
  const state = useSelector(state=>state)
  const [option, setOption] = useState({section:'background', subSection:''});
  const optiosMenu = Object.entries(state).map(x=>x[0])

  const changeColor = (newColor) => dispatch({
    type: `SET_COLOR_${(!option.subSection?option.section : option.subSection).toUpperCase()}`,
    payload: newColor
  })
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
        <ColorSelector 
          colorSelected={!option.subSection?state[option.section].color:state[option.section][`${option.subSection}Color`]}
          changeColor={changeColor}
          colors = {state.palette.selected}/>
        {/* {option!=='background' && <SVGsList feature={state[option]} changetypeSelected={changetypeSelected} changeChildSelected={changeChildSelected} changeChildTypeSelected={changeChildTypeSelected}/>} */}
      </div>
      <p className="legal">This is a project by @samuel_mad, @reversotenebros and @estdubois made during the piweek</p>
    </div>
  )
}

export default ParametricMenu;
