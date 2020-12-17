import React, { useState } from 'react';
import './Dropdown.css';
import { useSelector } from 'react-redux';

const Dropdown = ({optiosMenu, option, setOption, setSectionSelected}) => {

  const [visible, setVisible] = useState(false);
  const state = useSelector(state => state);
  const selectOption = (opcion)=> {
    if(state[opcion].subsections){
      setOption({...option, section:opcion, subSection: state.subsectionSelected});
      setSectionSelected(opcion)
    } else {
      setOption({...option, section:opcion});
      setSectionSelected(opcion)
    }

    setVisible(!visible);
  }

  return <div className={`dropdown-container ${visible?'visible':''}`}>
    <h2 onClick={()=>setVisible(!visible)}>{option.section}
      <svg className="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 31 16"><defs/><path fill="#000" d="M29.9.5l-.4-.4-14 13-14-13-.4.4L15.5 16 29.9.5z"/></svg>
    </h2>
    <ul className='options-list'>
      {
        optiosMenu.map((x, index)=><li key={index} className={`option ${x===option.section?'selected': ''}`} onClick={()=>selectOption(x)}>{x}</li>)
      }
    </ul>
  </div>
}

export default Dropdown;
