import React from 'react';
import './ParametricMenu.css';
import Dropdown from '../Dropdown/Dropdown';
import ColorSelector from '../ColorSelector/ColorSelector';
import SVGsList from '../SVGsList/SVGsList';

const ParametricMenu = () => {
  const miObj = {
    faces: {
      id:'face',
      nTypes: 9
    },
    mouths: {
      children: [
        {id:'upper-lip', name: 'Upper Lip', nTypes: 9},
        {id:'smile', name: 'Smile', nTypes: 9},
        {id:'lower-lip', name: 'Lower Lip', nTypes: 9}
      ]
    }
  }
  return ( 
    <div className="parametric-menu-container">
      <div>
        <Dropdown />
        <ColorSelector />
        <SVGsList feature={miObj.faces}/>
      </div>
    </div>
  )
}

export default ParametricMenu;