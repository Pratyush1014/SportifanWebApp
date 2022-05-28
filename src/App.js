//import logo from './logo.svg';
//import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Player from "./components/Player";
import Manager from "./components/Manager";
import { useState } from 'react';


function App() {
  const [owner, setOwner] = useState ("none");
  function manage(){
      setOwner('Manager');
  }
  function play(){
    setOwner('Player');
  }
  
  return (
    <div className="App">
      <button type="button" className="btn btn-primary my-3 mx-3" onClick={manage}>Manager</button>
      <button type="button" className="btn btn-primary" onClick={play}>Player</button>
      {owner == 'Manager' ? <Manager /> : owner == 'Player' ? <Player/> : <></>}
  </div>
  );
}

export default App;
