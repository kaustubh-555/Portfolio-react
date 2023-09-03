import './App.css';
import {FiSun} from "react-icons/fi"
import ass from "./images/asset 1.svg"
import Typer from './components/Typer';
import { useState } from 'react';
import Techstack from './components/Techstack';
import Works from './components/Works';
import About from './components/About';
import {BsLinkedin,BsGithub,BsInstagram,BsFillTelephoneOutboundFill} from "react-icons/bs"
import {SiLeetcode} from 'react-icons/si'
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
        <div>
          <Typer str={str} setstr={setstr} index={index} i={i}></Typer>

        </div>
        <div id='showcase'>
          <img src={ass}></img>
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
      <div id='footer'>
      <div id="footerLogo">
                Kaustubh Suroshi
            </div>
      <ul id="socialBtns">
                    <li id="linkdein"><a href="https://www.linkedin.com/in/kaustubh-suroshi-75434723a" target="_blank"><BsLinkedin></BsLinkedin></a></li>
                    <li id="github"><a href="https://github.com/kaustubh-555" target="_blank"><BsGithub></BsGithub></a></li>
                    <li id="insta"><a href="#" target="_blank"><BsInstagram></BsInstagram></a></li>
                    <li id="leetcode"><a href="https://leetcode.com/kaustubh517suroshi/" target="_blank"><SiLeetcode></SiLeetcode></a></li>
                </ul>
      </div>
      
    </div>
  );
}

export default App;
