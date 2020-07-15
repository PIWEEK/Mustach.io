import React, {useState} from 'react';
import './ParametricMenu.css';
import Dropdown from '../Dropdown/Dropdown';
import ColorSelector from '../ColorSelector/ColorSelector';
import SVGsList from '../SVGsList/SVGsList';

const ParametricMenu = ({state, dispatch}) => {
  const [option, setOption] = useState('face');
  const optiosMenu = Object.entries(state).map(x=>x[0])

  const changeColor = (newColor) => dispatch({type: `SET_COLOR_${option.toUpperCase()}`, payload: newColor})
  const changetypeSelected = (newType) => dispatch({type: `SET_TYPE_${option.toUpperCase()}`, payload: newType})
  
  return ( 
    <div className="parametric-menu-container">
      <div>
        <Dropdown
          optiosMenu={optiosMenu}
          option={option}
          setOption={setOption} 
        />
        <ColorSelector colorSelected={state[option].colorSelected} changeColor={changeColor} />
        <SVGsList feature={state[option]} changetypeSelected={changetypeSelected} />
      </div>
    </div>
  )
}

export default ParametricMenu;