import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = () => {

  const [option, setOption] = useState('Face');
  const [visible, setVisible] = useState(false);
  const options = ['Face', 'Hairstyle', 'Fringe', 'Eyes', 'Eyebrows', 'Glases', 'Nose', 'Mouth', 'Neck', 'Accesories'];
  const selectOption = (opcion)=> {
    setOption(opcion);
    setVisible(!visible);
  }

  return <div className={`dropdown-container ${visible?'visible':''}`}>
    <h2 onClick={()=>setVisible(!visible)}>{option} </h2>
    <ul className='options-list'>
      {
        options.map(x=><li className={`option ${x===option?'selected': ''}`} onClick={()=>selectOption(x)}>{x}</li>)
      }
    </ul>
  </div>
}

export default Dropdown;