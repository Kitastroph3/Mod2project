import React from 'react';
import CreateUser from './components/CreateUser';
import Colors from './components/ColorsAPI';
import "./App.css";

function App () {
  return (
    <div id="App">
      <div>UI/UX Helper</div>
      <div>
        <Colors />
        <CreateUser />
      </div>
    </div>
  )
}

export default App;