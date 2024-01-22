import React from "react";
    function Article (props){
        //STATE
        
        //COMPORTEMENT
        
        //RENDER
        return(
            <article className="article">
            <h2 id="h2-article">{props.title}</h2>
            <img id="image-article" src={props.cover} alt="images-articles"></img>
            </article>
        )
};
export default Article