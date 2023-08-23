import "./Floatingdiv.css"

const Floatingdiv=(props)=>{

    let text=props.text;

    return (
        <div className="floatingdiv">
            {/* {text} */}
            <img src={text} width={100}></img>
        </div>
    )
}
export default Floatingdiv;