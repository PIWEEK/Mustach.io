import React from 'react';
import './SVGsList.css'

const SVGsList = ({feature, changetypeSelected, changeChildSelected, changeChildTypeSelected}) => {

  const childrenMenu = (items) => {
    const children = Object.entries(feature.children).map(x=>x[0])
    return (
      <ul className="children-menu">
        {children.map((x,index)=><li key={index} className={`child-item ${x===feature.childSelected?'selected':''}`} onClick={()=>changeChildSelected(x)}>{feature.children[x].name}</li>)}        
      </ul>
    )
  }
  if(feature.children) {
    const svgIds = Array.from(Array(feature.children[feature.childSelected].nTypes).keys()).map(x => `${feature.children[feature.childSelected].id}-${++x}`)
    return (
      <div>
        {feature.children && childrenMenu()}
        <ul className='vectors-list' style={{height: "calc(100vh - 302px)"}}>
          <li className={`item empty ${feature.children[feature.childSelected].typeSelected===''?'selected':''}`} onClick={()=>changeChildTypeSelected('')}>
          <svg xmlns='http://www.w3.org/2000/svg' style={{stroke: "#b4bedb"}} width="100%" height="100%" viewBox="0 0 200 200">
            <path d="M64.6447 135.355C84.1709 154.881 115.829 154.881 135.355 135.355C154.882 115.829 154.882 84.1706 135.355 64.6444M64.6447 135.355C45.1184 115.829 45.1184 84.1706 64.6447 64.6444C84.1709 45.1182 115.829 45.1182 135.355 64.6444M64.6447 135.355L135.355 64.6444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          </li>
          {
            svgIds.map(x=><li key={x} className={`item ${x===feature.children[feature.childSelected].typeSelected?'selected':''}`} onClick={()=>changeChildTypeSelected(x)}>
              <svg xmlns='http://www.w3.org/2000/svg' className={feature.childSelected} style={{stroke: "#b4bedb"}}  width="100%" height="100%" viewBox="0 0 200 200">
                <use xlinkHref={`#${x}`} />
              </svg>
            </li>)
          }
        </ul>
      </div>
    )
  } else {
    const svgIds = Array.from(Array(feature.nTypes).keys()).map(x => `${feature.id}-${++x}`)
    return (
      <div>
        <ul className='vectors-list' style={{height: "calc(100vh - 220px)"}}>
          <li className={`item empty ${feature.typeSelected===''?'selected':''}`} onClick={()=>changetypeSelected('')}>
          <svg xmlns='http://www.w3.org/2000/svg' style={{stroke: "#b4bedb"}} width="100%" height="100%" viewBox="0 0 200 200">
            <path d="M64.6447 135.355C84.1709 154.881 115.829 154.881 135.355 135.355C154.882 115.829 154.882 84.1706 135.355 64.6444M64.6447 135.355C45.1184 115.829 45.1184 84.1706 64.6447 64.6444C84.1709 45.1182 115.829 45.1182 135.355 64.6444M64.6447 135.355L135.355 64.6444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          </li>
          {
            svgIds.map(x=><li key={x} className={`item ${x===feature.typeSelected?'selected':''}`} onClick={()=>changetypeSelected(x)}>
              <svg xmlns='http://www.w3.org/2000/svg' className={feature.id} style={{stroke: "#b4bedb"}}  width="100%" height="100%" viewBox="0 0 200 200">
                <use xlinkHref={`#${x}`} />
              </svg>
            </li>)
          }
        </ul>
      </div>
    )
  }
}

export default SVGsList;
