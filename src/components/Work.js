import { useState } from "react";
import "./Work.css"
const Work=(props)=>{
    let data=props.data;
    let image=props.img;
    const [hovering,sethovering]=useState(false);
    const hoverHandeler=()=>{
        sethovering(true);
    }
    const unHoverHandeler=()=>{
        sethovering(false);
    }
    const clickHandeler=()=>{
        document.location.href=data.link;
    }
    return(
        <div className="a">
        <div id="eachWork" onMouseEnter={hoverHandeler} onMouseLeave={unHoverHandeler} onClick={clickHandeler}>
            <div className="imageContainer">
                <img src={image} id="image"></img>

                {(hovering)?(<div className="hoverDiv"><p>{data.description}</p></div>):(<div></div>)}
                
            </div>
        </div>
        <div className="workName">{data.name}</div>
        </div>
    )
}
export default Work;