import "./App.css";
import Diagramma from "./components/Diagramma";
import Info from "./components/Info";
import flag from "./images/flag.svg";

function App() {
  return (
    <div className="App">
      <img src={flag} alt="флаг" className="App__icon" />
      <Diagramma />
      <div className="diagramma__triangle" />
      <Info />
    </div>
  );
}

export default App;
