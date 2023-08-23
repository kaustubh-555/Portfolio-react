import Floatingdiv from "./Floatingdiv"
import "./Techstack.css"
import html from "../images/html.png"
import css from "../images/css.png"
import javascript from "../images/javascript.svg"
import node from "../images/node.svg"
import mysql from "../images/mysql.svg"
import mongodb from "../images/mongodb.png"
import react from "../images/react.svg"
 const Techstack=()=>{

    return (
        <div id="techstackContainer">
             <h1>
                My Tech Stack
            </h1>
            <div id="floatingContainer">
                <Floatingdiv text={html}></Floatingdiv>
                <Floatingdiv text={css}></Floatingdiv>
                <Floatingdiv text={javascript}></Floatingdiv>
                <Floatingdiv text={react}></Floatingdiv>
                <Floatingdiv text={node}></Floatingdiv>
                <Floatingdiv text={mysql}></Floatingdiv>
                <Floatingdiv text={mongodb}></Floatingdiv>
            </div>

        </div>
    )
 }
 export default Techstack
