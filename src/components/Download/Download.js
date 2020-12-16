import React from 'react';
import './Download.css';

const Download = () => {
  const selectDownload = (opcion)=> {
    console.log('selectDownload', opcion);
  }
  return <div className="download-wrapper">
    <h2>Mustachio</h2>
    <div className="download-button">
      <svg className="download-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 62"><defs/><path fill="#000" d="M20 .3L21.7 54l18-15.6L20 61.4.3 38.4l18 15.7L20 .3z"/></svg>
      <span className="download-text">Download</span>
      <ul className="download-list">
        <li onClick={()=>selectDownload('JPG')}>JPG</li>
        <li onClick={()=>selectDownload('PNG')}>PNG</li>
        <li onClick={()=>selectDownload('SVG')}>SVG</li>
      </ul>
    </div>
    <p className="legal">This is a project by @samuel_mad, @reversotenebros and @estdubois made during the piweek</p>
  </div>
}
export default Download;
