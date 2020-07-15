import React from 'react';

const SVGsList = ({feature}) => {

  // const [featureMenu, setFeatureMenu] = useState('')
  const svgIds = Array.from(Array(feature.nTypes).keys()).map(x => `${feature.id}-00${++x}`)

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
        <li className="item">
        </li>
        {
          svgIds.map(x=><li key={x}>
            <svg xmlns='http://www.w3.org/2000/svg' className="item" style={{stroke: feature.colorSelected}}>
              <use xlinkHref={`#${x}`} />
            </svg>
          </li>)
        }
      </ul>
    </div>
  )
}
export default SVGsList;