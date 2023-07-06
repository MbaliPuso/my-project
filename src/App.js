import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York" />
      <footer>This project was coded by Mbali Puso and is open-sourced on Github</footer>
      </div>
    </div>
  );
}

export default App;
