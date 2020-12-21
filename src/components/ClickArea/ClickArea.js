import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './ClickArea.css';

const ClickArea = ({sectionSelected})=>{

  const dispatch = useDispatch();
  const [mousePress, setMousePress] = useState(false)
  const [position, setPosition] = useState({x:0,y:0})
  const stateValue = useSelector((state => state[sectionSelected]))

  const onMouseDownHandler = (e) => {
    setMousePress(true)
    console.log(e.clientX, e.clientY)
    setPosition({x:e.clientX, y:e.clientY})
  }
  const onMouseUpHandler = (e) => {
    setMousePress(false)
  }
  const onMouseMoveHandler = (e) => {
    const isPositionXY = typeof(stateValue.position) === 'object';
    console.log(typeof(stateValue.position))
    if(e.altKey && !e.ctrlKey){
      dispatch({
        type:`SET_SCALE_${sectionSelected.toUpperCase()}`,
        payload: stateValue.scale +((e.clientX-position.x)/1000) 
      });
    } else {
      dispatch({
        type:`SET_POSITION_${sectionSelected.toUpperCase()}`,
        payload: {
          x: ((isPositionXY?stateValue.position.x:stateValue.position) + (e.clientX-position.x))/5,
          y: ((isPositionXY?stateValue.position.y:stateValue.position) + (e.clientY-position.y))/5
        }  
      })
    }
  }

  return (
  <div
    className="clickArea"
    onMouseDown={onMouseDownHandler} 
    onMouseUp={onMouseUpHandler} 
    onMouseMove={(e)=>{mousePress && onMouseMoveHandler(e)}}
    onMouseLeave={()=>setMousePress(false)}    
  >
  </div>)

}
export default ClickArea;
