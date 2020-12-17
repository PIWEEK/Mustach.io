import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import './ClickArea.css';

const ClickArea = ({sectionSelected})=>{

  const dispatch = useDispatch();
  const [mousePress, setMousePress] = useState(false)
  const [position, setPosition] = useState({x:0,y:0})

  const onMouseDownHandler = (e) => {
    setMousePress(true)
    setPosition({x:e.clientX, y:e.clientY})
  }
  const onMouseUpHandler = (e) => {
    setMousePress(false)
  }
  const onMouseMoveHandler = (e) => {
    dispatch({
      type:`SET_POSITION_${sectionSelected.toUpperCase()}`,
      payload: {
        x: (e.clientX-position.x)/4,
        y:(e.clientY-position.y)/4
      }  
    })
  }

  return (
  <div
    className="clickArea"
    onMouseDown={onMouseDownHandler} 
    onMouseUp={onMouseUpHandler} 
    onMouseMove={(e)=>{mousePress && onMouseMoveHandler(e)}}
    
  >

  </div>)

}
export default ClickArea;
