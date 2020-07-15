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
      <ul className='vectors-list' style={{height: "calc(100vh - 220px)"}}>
        <li className={`item empty ${feature.typeSelected===''?'selected':''}`} onClick={()=>changetypeSelected('')}>
        <svg xmlns='http://www.w3.org/2000/svg' style={{stroke: "#b4bedb"}} width="100%" height="100%" viewBox="0 0 200 200">
          <path d="M64.6447 135.355C84.1709 154.881 115.829 154.881 135.355 135.355C154.882 115.829 154.882 84.1706 135.355 64.6444M64.6447 135.355C45.1184 115.829 45.1184 84.1706 64.6447 64.6444C84.1709 45.1182 115.829 45.1182 135.355 64.6444M64.6447 135.355L135.355 64.6444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
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