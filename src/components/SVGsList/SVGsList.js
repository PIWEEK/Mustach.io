import React, { useState, useEffect } from 'react';

const SVGsList = ({feature}) => {

  const [featureMenu, setFeatureMenu] = useState('')
  let svgIds = Array.from(Array(feature.nTypes).keys()).map(x => `${feature.id}-00${++x}`)

  useEffect(()=>{
      if(feature.children) {
        setFeatureMenu(feature.children[0].id)
      } else {
        setFeatureMenu(feature.id)
      }

    }, []
  )
  const childrenMenu = (items) => {

    return (
      <ul>
        {items.map((item)=><li onClick={()=>setFeatureMenu(item.name)}>{`${item.name} ${item.nTypes}`}</li>)}
      </ul>
    )
  }
  return (
    <div>
      {feature.children && childrenMenu(feature.children)}
      <ul className='vectors-list'>
        <li className="item"></li>
        {
          svgIds.map(x=><li key={x}>
            <svg xmlns='http://www.w3.org/2000/svg' className="item">
              <use xlinkHref={`#${x}`} />
            </svg>
          </li>)
        }
      </ul>
    </div>
  )
}
export default SVGsList;