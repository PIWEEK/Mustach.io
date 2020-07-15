import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({optiosMenu, option, setOption}) => {

  const [visible, setVisible] = useState(false);
  const selectOption = (opcion)=> {
    setOption(opcion);
    setVisible(!visible);
  }

  return <div className={`dropdown-container ${visible?'visible':''}`}>
    <h2 onClick={()=>setVisible(!visible)}>{option} </h2>
    <ul className='options-list'>
      {
        optiosMenu.map((x, index)=><li key={index} className={`option ${x===option?'selected': ''}`} onClick={()=>selectOption(x)}>{x}</li>)
      }
    </ul>
  </div>
}

export default Dropdown;