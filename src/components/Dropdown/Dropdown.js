import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({optiosMenu, option, setOption}) => {

  const [visible, setVisible] = useState(false);
  const selectOption = (opcion)=> {
    setOption(opcion);
    setVisible(!visible);
  }

  return <div className={`dropdown-container ${visible?'visible':''}`}>
    <h2 onClick={()=>setVisible(!visible)}>{option}
      <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 31 16"><defs/><path fill="#000" d="M29.9.5l-.4-.4-14 13-14-13-.4.4L15.5 16 29.9.5z"/></svg>
    </h2>
    <ul className='options-list'>
      {
        optiosMenu.map((x, index)=><li key={index} className={`option ${x===option?'selected': ''}`} onClick={()=>selectOption(x)}>{x}</li>)
      }
    </ul>
  </div>
}

export default Dropdown;
