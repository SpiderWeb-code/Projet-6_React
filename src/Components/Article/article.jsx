import React from "react";
import "../Article/article.scss";
    function Article (props){
        //STATE

        //COMPORTEMENT
        
        //RENDER
        return(
            <article className="article">
            <img id="test" src={props.cover} alt="images-articles"></img>
            <h2>{props.title}</h2>
            </article>
        )
};
export default Article