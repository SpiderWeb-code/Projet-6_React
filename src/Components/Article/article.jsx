import React from "react";
    function Article (props){
        //STATE

        //COMPORTEMENT
        
        //RENDER
        return(
            <article className="article">
            <div id='info-container'>
            <div id="first-container">
            <h2>{props.title}</h2>
            <p id="location">{props.location}</p>
            </div>
            <div id="second-container">
            <p id="name">{props.name}</p>
            <img src={props.picture} alt="photo_de_profil"></img>
            </div>
            </div>
            <img src={props.cover} alt="images-articles"></img>
            </article>
        )
};
export default Article