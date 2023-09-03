import "./Works.css"
import expo from "../data";
import Work from "./Work";
import blog from "../images/BlogSite.png"
import hotel from "../images/hotel.png"
import news from "../images/news.png"
import tictactoe from "../images/tictactoe.png"
import Shooting from "../images/shooting.png"
const Works=()=>{
    let imgarray=[blog,news,hotel,tictactoe,Shooting];
    return (
        <div id="worksContainer">
            <h1>My Projects</h1>
            <div id="works">
                {
                    expo.data.map((element)=>{
                        return <Work data={element} img={imgarray[element.id]}></Work>
                    })
                }
            </div>
        </div>
    )
}
export default Works;