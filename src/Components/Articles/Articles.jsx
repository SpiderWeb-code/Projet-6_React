import React from "react";
import "./Article.css"

function Article (props){
    //STATE

    //COMPORTEMENT

    //RENDER
    return(
        <article className="article">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        </article>
    )
}
export default Article