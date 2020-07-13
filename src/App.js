import React from 'react';
// import logo from './logo.svg';
import Header from "./components/Header/Header.js"
import Canvas from "./components/Canvas/Canvas.js"
import './App.css';
import ParametricMenu from './components/ParametricMenu/ParametricMenu.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <Canvas />
        <ParametricMenu />
      </div>
    </div>
  );
}

export default App;
