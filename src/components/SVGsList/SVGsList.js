import React from 'react';
import './SVGsList.css'

const SVGsList = ({feature, changetypeSelected}) => {

  // const [featureMenu, setFeatureMenu] = useState('')
  const svgIds = Array.from(Array(feature.nTypes).keys()).map(x => `${feature.id}-${++x}`)

  // const childrenMenu = (items) => {
  //   return (
  //     <ul>
  //       {items.map((item)=><li onClick={()=>setFeatureMenu(item.name)}>{`${item.name} ${item.nTypes}`}</li>)}
  //     </ul>
  //   )
  // }
  return (
    <div>
      {/* {feature.children && childrenMenu(feature.children)} */}
      <ul className='vectors-list'>
        <li className={`item empty ${feature.typeSelected===''?'selected':''}`} onClick={()=>changetypeSelected('')}>
        </li>
        {
          svgIds.map(x=><li key={x} className={`item ${x===feature.typeSelected?'selected':''}`} onClick={()=>changetypeSelected(x)}>
            <svg xmlns='http://www.w3.org/2000/svg' style={{stroke: "#b4bedb"}}>
              <use xlinkHref={`#${x}`} />
            </svg>
          </li>)
        }
      </ul>
    </div>
  )
}
export default SVGsList;