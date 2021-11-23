// import logo from './logo.svg';
// import "./Massage.css";
import "./App.css";
import Massage from "./Massage.jsx";
// import Monaco from './img/Monaco.jpg'

function App() {
  const road = "Monaco";
  return (
    <div className="App">
      <Massage className="Massage" road={road}></Massage>
    </div>
  );
}

export default App;
 