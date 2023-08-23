import "./About.css"
import expo from "../data"
const About=()=>{
    let about=expo.about
    return (
        <div className="aboutContainer">
            <h1>
                About Me
            </h1>
            <p>
                {about}
            </p>
        </div>
    )
}

export default About