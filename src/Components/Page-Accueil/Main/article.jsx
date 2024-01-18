import React from "react";
    function Article (props){
        //STATE
    
        //COMPORTEMENT
        const handleClick = () =>{
            console.log("Hello World");
        }
        //RENDER
        return(
            <article className="article" onClick={handleClick} style={{height:"435px", maxWidth:"435px", width:"100%", border:"1px solid black", borderRadius:"10px", margin:"2%", display:"flex", alignItems:"end", cursor:"pointer"}}>
            <h2 style={{margin:"0px 0px 15px 15px", position:"absolute", maxWidth:"20%", color:"white"}}>{props.title}</h2>
            <img src={props.cover} alt="images-articles" style={{height:"435px", maxWidth:"435px", width:"100%", objectFit:"cover"}}></img>
            </article>
        )
};
export default Article