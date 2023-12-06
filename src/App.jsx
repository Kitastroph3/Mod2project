import React from 'react';
import Mode from './components/Mode';
import Profile from './components/Profile';
import Colors from './components/Colors';
import "./App.css";

function App () {
  return (
    <div id="App">
      <Profile />
      <Mode />
      <Colors />
    </div>
  )
}

export default App;