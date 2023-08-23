import './Typer.css'
import { useState } from 'react';
const Typer=(props)=>{
    let data=["I am a Full Stack Web Developer"]
    const str=props.str;
    const setstr=props.setstr;
    let index=props.index;
    let i=props.i;
    let t=data[index].length;
    // function append(){
    //     let n=data[index].length;
    //     if(i===n){
    //         i=0;
    //         // index=(index+1)%t;
    //         setstr("");
    //     }
    //     else{
    //         setstr(data[index].substring(0,i));
    //         i+=1
    //     }
    //     clearInterval(interval)
    // }
    // let interval=setInterval(append,2000);
    return(
        <div id='typer'>
            <h1>
                Hi there!
                <br></br>
                I am Kasutubh Suroshi
            </h1>
            <h3>
               <div id='typingText'>{str}I am a Web Developer_</div> 
            </h3>
        </div>
    )

}
export default Typer;