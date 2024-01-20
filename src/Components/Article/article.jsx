import React from "react";
import "../Article/article.css";
    function Article (props){
        //STATE
    
        //COMPORTEMENT
        const handleClick = () =>{
            console.log("Hello World");
        }
        //RENDER
        return(
            <article className="article" onClick={handleClick}>
            <h2 id="h2-article">{props.title}</h2>
            <img id="image-article" src={props.cover} alt="images-articles"></img>
            </article>
        )
};
export default Article