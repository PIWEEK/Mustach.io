import React from 'react'
import "./Faces.css"

const Faces = ({ nCara }) =>
  <div >
    <svg xmlns='http://www.w3.org/2000/svg' className="face">
      <use xlinkHref={`#cara-${nCara}`} />
    </svg>
  </div>

export default Faces;
