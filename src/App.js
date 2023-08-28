import './App.css';
import {FiSun} from "react-icons/fi"
import me from "./DSC_2075.jpg"
import Typer from './components/Typer';
import { useState } from 'react';
import Techstack from './components/Techstack';
import Works from './components/Works';
import About from './components/About';
import Contact from "./components/Contact"
function App() {
  const[str,setstr]=useState("");
  let index=0;
  let i=0;
  const[focus,setfocus]=useState(1);
  let highlighter=(id)=>{
      console.log(id);
  }
  return (
    <div className="App">
      <div id='navBar' style={{zIndex: "100"}}>
        <div id='logo'>
          Kasutubh Suroshi
        </div>
        <div id="links">
        <a href='#showcaseArea'>Home</a>
        <a href='#aboutnavi'>About</a>
        <a href='#techstackContainer'>Skills</a>
        <a href='#worksContainer'>Projects</a>
        <a href='#footer'>Contact</a>
        </div>
      </div>
        <div id='modeBtn'>
          <FiSun></FiSun>
        </div>
      <div id='showcaseArea' onFocus={highlighter(0)}>
        <Typer str={str} setstr={setstr} index={index} i={i}></Typer>
        <div id='showcase'>
        </div>
      </div>
      <div id='aboutnavi' onFocus={highlighter(1)}>
        <About></About>
      </div>
      <div onFocus={highlighter(2)}>
        <Techstack></Techstack>
      </div>

      <div style={{width: "100%"}} onFocus={highlighter(3)}>
        <Works>

        </Works>
      </div>
      <div onFocus={highlighter(4)}>
        <Contact></Contact>
      </div>
      
      
    </div>
  );
}

export default App;
