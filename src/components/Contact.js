import "./Contact.css"
import "../App.css"
import {BsLinkedin,BsGithub,BsInstagram,BsFillTelephoneOutboundFill} from "react-icons/bs"
import {SiLeetcode} from 'react-icons/si'
const Contact=()=>{
    


    return(
        <div id="footer">
            <div id="footerLogo">
                Kaustubh Suroshi
            </div>
            <div id="links">
                <a href='#showcaseArea'>Home</a>
                <a href='#aboutnavi'>About</a>
                <a href='#techstackContainer'>Skills</a>
                <a href='#worksContainer'>Projects</a>
                <a href='#'>Contact</a>
            </div>
            <div id="social">
                <ul id="socialBtns">
                    <li id="linkdein"><a href="https://www.linkedin.com/in/kaustubh-suroshi-75434723a" target="_blank"><BsLinkedin></BsLinkedin></a></li>
                    <li id="github"><a href="https://github.com/kaustubh-555" target="_blank"><BsGithub></BsGithub></a></li>
                    <li id="insta"><a href="#" target="_blank"><BsInstagram></BsInstagram></a></li>
                    <li id="leetcode"><a href="https://leetcode.com/kaustubh517suroshi/" target="_blank"><SiLeetcode></SiLeetcode></a></li>
                </ul>
                <div id="mob">
                    <h2 style={{display: "flex",alignItems: "center"}}>
                       <BsFillTelephoneOutboundFill></BsFillTelephoneOutboundFill><div style={{marginLeft: "10px"}}>9973465656 </div>
                    </h2>
                </div>
            </div>

        </div>
    )
}

export default Contact;