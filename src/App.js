import React from 'react';
// import logo from './logo.svg';
import Header from "./components/Header/Header.js"
import Canvas from "./components/Canvas/Canvas.js"
import './App.css';
import ParametricMenu from './components/ParametricMenu/ParametricMenu.js';
import AllSVGs from './components/AllSVGs/AllSVGs.js';

function App() {
  return (
    <div className="App">
      <AllSVGs />
      <Header />
      <div className="App-body">
        <Canvas />
        <ParametricMenu />
      </div>
    </div>
  );
}

export default App;
