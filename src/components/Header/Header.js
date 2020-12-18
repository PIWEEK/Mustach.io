import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [visible, setVisible] = useState(false);
  const selectDownload = (opcion)=> {
    setVisible(!visible);
  }

  return <header className="App-header">
    <h1>Mustachio</h1>
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
