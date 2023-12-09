import React from 'react';
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import TopNav from './components/TopNav';
import About from "./sections/About";
import Users from './sections/Users';
import ColorScheme from "./sections/ColorScheme";
  
function App () {
  return (
    <div id="App">
      <TopNav />
      <div id="mainContainer">
        <Routes>
          <Route path="/" element={<About />} /> 
          <Route path="/users" element={<Users/>}/> 
          <Route path="/colors" element={<ColorScheme/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;