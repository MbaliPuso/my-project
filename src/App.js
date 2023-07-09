import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York" />
      <footer class="text-center">This project was coded by Mbali Puso and is <a href="https://github.com/MbaliPuso/my-project" target="_blank" rel="noopener noreferrer">open-sourced on Github</a>{" "} and hosted on {" "}<a href="https://lively-sunshine-0e1301.netlify.app/" target="_blank" rel="noopener noreferrer">Netlify</a></footer>
      </div>
    </div>
  );
}

export default App;
