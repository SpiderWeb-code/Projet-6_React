import React from "react";
    function Article (props){
        //STATE
    
        //COMPORTEMENT
    
        //RENDER
        return(
            <article className="article" style={{height:"435px", width:"435px", border:"1px solid black", borderRadius:"10px", margin:"2%", display:"flex", alignItems:"end"}}>
            <h2 style={{margin:"0px 0px 15px 15px", position:"absolute", width:"20%", color:"white"}}>{props.title}</h2>
            <img src={props.cover} alt="images-articles" style={{height:"435px", width:"435px", objectFit:"cover"}}></img>
            </article>
        )
};
export default Article