import React, { useState } from 'react';
import './Header.css';
import {useSelector} from 'react-redux'
import Canvg from 'canvg';
import { saveAs } from 'file-saver';

const saveImg = async (opcion, state) => {
  opcion = opcion.toLowerCase()
  async function getSvgRefs(svg, state){
    const refs = [...svg.getElementsByTagName('use')]
    refs.map((ref) => {
      console.log(ref.attributes)
      const href = ref.attributes['xlink:href'].value
      const id = href.substring(1, href.length)
      const style = ref.attributes.style.value

      const stateType = id.split('-')
      const wrinkles = ['wrinklesforehead', 'wrinklesforehead', 'wrinklescheekbones', 'wrinkleschin', 'wrinklesmouth', 'wrinkleseyes']
      if (wrinkles.includes(stateType[0]) && !state.wrinkles[`${stateType[0]}Type`]?.length) {
        return false;
      }
      if (stateType[0] === 'mustachio' && !state.mustachio.type?.length) {
        return false;
      }
      if (stateType[0] === 'glasses' && !state.glasses.type?.length) {
        return false;
      }

      let element = document.getElementById(id).cloneNode(true)
      element.style = style

      let transform = style.search('transform:');
      let transformOrigin = style.search('transform-origin:');
      console.log('transform', transformOrigin, transform)
      let styleTransform = false
      let styleTransformOrigin = false
      if (transform !== -1) {
        styleTransform = style.substring(transform)
        styleTransform = styleTransform.split(';')[0]
      }
      if (transformOrigin !== -1) {
        styleTransformOrigin = style.substring(transformOrigin)
        styleTransformOrigin = styleTransformOrigin.split(';')[0]
      }

      if (styleTransform || styleTransformOrigin) {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
        let styleUse = ''
        if (styleTransformOrigin) {
          styleUse += `${styleTransformOrigin};`
        }
        if (styleTransform) {
          styleUse += `${styleTransform};`
        }
        console.log('styleUse', styleUse)
        g.appendChild(element)
        g.setAttribute('style', styleUse)
        element = g
      }

      const parent = ref.parentElement
      parent.replaceChild(element, ref)

    })
    return svg
  }

  let svg = document.getElementById('canvas-svg').cloneNode(true);
  svg = await getSvgRefs(svg, state);
  console.log('svg', svg)

  if (opcion === 'svg') {
    // const myCanvas = document.getElementById('myCanvasDiv')
    // myCanvas.appendChild(svg)

    svg.setAttribute('width', '600px')
    svg.setAttribute('height', '600px')
    // console.log('svg', svg)
    let outerHTML = svg.outerHTML
    let blob = new Blob([outerHTML], {type: "image/svg+xml;charset=utf-8"})
    saveAs(blob, `avatar.${opcion}`);
  } else{
    // const myCanvas = document.getElementById('myCanvas')
    const myCanvas = document.createElement("canvas")
    myCanvas.width = 300
    myCanvas.height = 300
    const ctx = myCanvas.getContext('2d');
    const v = await Canvg.fromString(ctx, svg.outerHTML.toString());
    v.start()
    myCanvas.toBlob(blob => {
      saveAs(blob, `avatar.${opcion.toLowerCase()}`);
    })
  }
}

const Header = () => {
  const state = useSelector(state=>state)
  const [visible, setVisible] = useState(false);
  const selectDownload = (opcion)=> {
    setVisible(!visible);
    saveImg(opcion, state)
  }

  return <header className="App-header">
    <a href="/"><h1>Mustachio</h1></a>
    <div onClick={()=>setVisible(!visible)} className={`download-button ${visible?'visible':''}`}>
      <svg className="download-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 62"><defs/><path fill="#000" d="M20 .3L21.7 54l18-15.6L20 61.4.3 38.4l18 15.7L20 .3z"/></svg>
      <span className="download-text">Download</span>
      <ul className="download-list">
        <li onClick={()=>selectDownload('JPG')}>JPG</li>
        <li onClick={()=>selectDownload('PNG')}>PNG</li>
        <li onClick={()=>selectDownload('SVG')}>SVG</li>
      </ul>
    </div>
  </header>
}

export default Header;
