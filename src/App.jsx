import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import ChartComponent from "./component/ChartComponent";
import Home from "./component/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <Home />

      {/* <ChartComponent /> */}
      <h1>Bonjourno</h1>

      
    </>
  );
}

export default App;
