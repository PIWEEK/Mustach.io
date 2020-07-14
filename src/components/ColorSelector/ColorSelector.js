import React, {useState} from 'react';
import './ColorSelector.css';

const ColorSelector = () => {
  const [colorSelected, setColorSelected] = useState('')
  const [colorPickerValue, setColorPickerValue] = useState('')
  const colors = ['#ff5757', '#e6eaf3', '#9db39a', '#ebeef4', '#fbeeee', '#b8c5b6', '#ffd9d9', '#b3a7cd']
  const changeColorSelected = (newColor) => {
    setColorSelected(newColor);
  }
  const onChangeHandler = (e)=>{
    console.log('////////////', e.target.value)
    setColorPickerValue(e.target.value);
    setColorSelected(e.target.value);
  }
  return (
    <ul className='color-selector-container'>
      {
        colorSelected && !colors.some(x=> x === colorSelected)
        ? <label htmlFor="picker" className="color-item" style={{"background-color": colorSelected}}></label>
        : <label htmlFor="picker" className="color-item default"></label>
      }
      <input id="picker" type="color" value={colorPickerValue} onChange={(e)=>onChangeHandler(e)}></input>
      <span className="separator"></span>
      {
        colors.map((x, index) => <li key={index} className='color-item' style={{"background-color": x}} onClick={()=>changeColorSelected(x)}></li>)
      }
    </ul>
  )
}

export default ColorSelector;