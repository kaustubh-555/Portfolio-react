import './App.css';
import {FiSun} from "react-icons/fi"
import me from "./DSC_2075.jpg"
import Typer from './components/Typer';
import { useState } from 'react';
import Techstack from './components/Techstack';
import Works from './components/Works';
import About from './components/About';
function App() {
  const[str,setstr]=useState("");
  let index=0;
  let i=0;
  return (
    <div className="App">
      <nav id='navBar'>
        <div id='logo'>
          Kasutubh Suroshi
        </div>
        <div id="links">
        <a href='#showcaseArea'>Home</a>
        <a href='#techstackContainer'>Skills</a>
        <a href='#worksContainer'>Projects</a>
        <a href='#'>Contact</a>
        </div>
        <div id='modeBtn'>
          <FiSun></FiSun>
        </div>
      </nav>
      {/* <img src={me} id='a'></img> */}
      <div id='showcaseArea'>
        <Typer str={str} setstr={setstr} index={index} i={i}></Typer>
        <div id='showcase'>
        </div>
      </div>
      <div>
        <About></About>
      </div>
      <div>
        <Techstack></Techstack>
      </div>

      <div>
        <Works>

        </Works>
      </div>

      
      
    </div>
  );
}

export default App;
