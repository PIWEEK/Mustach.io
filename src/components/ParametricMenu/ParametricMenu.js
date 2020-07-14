import React from 'react';
import './ParametricMenu.css';
import Dropdown from '../Dropdown/Dropdown';
import ColorSelector from '../ColorSelector/ColorSelector';

const ParametricMenu = () => 
  <div className="parametric-menu-container">
    <div>
      <Dropdown />
      <ColorSelector />
    </div>
  </div>

export default ParametricMenu;