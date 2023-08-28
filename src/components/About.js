import "./About.css"
import expo from "../data"
import boy from "../images/Programming-amico.svg"
const About=()=>{
    let about=expo.about
    return (
        <div className="aboutContainer">
            <h1>
                About Me
            </h1>
            <div id="aboutContent">
                <div id="meDesc">
                    {about}
                </div>
                <div id="boyImg">
                    <img src={boy}></img>
                </div>
            </div>
        </div>
    )
}

export default About