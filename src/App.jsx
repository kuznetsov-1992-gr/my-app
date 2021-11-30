import React from "react";
// import logo from './logo.svg';
// import "./Massage.css";
import "./App.css";
// import Monaco from './img/Monaco.jpg'
import { MassageList } from "./Components";
import {ChatList} from "./Components"
import {Router} from "./Router"


function App() {
  
  return (
    <div className="App">
      <Router></Router>
      <div className="flex-racurs">
        <ChatList></ChatList>
        <MassageList></MassageList>
      </div>
    </div>
  );
}

export default App;
