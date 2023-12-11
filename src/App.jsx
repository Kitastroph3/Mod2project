import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import "./styles/Header.css"
import "./styles/User.css";
import "./styles/Colors.css";
import TopNav from './components/TopNav';
import About from "./sections/About";
import Users from './sections/Users';
import ColorScheme from "./sections/ColorScheme";
import Footer from './components/Footer';

  
function App () {
  return (
    <div id="App">
      <TopNav />
      <div id="mainContainer">
        <Routes>
          <Route path="/" element={<About />} /> 
          <Route path="/users" element={<Users/>}/> 
          <Route path="/colors" element={<ColorScheme />} /></Routes>
          <Footer />
      </div>
      
    </div>
  )
}

export default App;