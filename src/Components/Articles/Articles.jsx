import React from "react";
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import "./Article.css";
import PageArticle from '../ArticlePage/Page'
//STATE

function Article (props){
    //STATE
    const handleClick = () =>{
      console.log("Click sur la div")
    //Permet de laisser le temps de charger la nouvelle page avent de faire le rechargement
    setTimeout(() => {
      window.location.reload();
    }, 100); // 100 millisecondes = 3 secondes
    };
    const title = <h2 id="test">{[props.title, props.id]}</h2>
    const router = createBrowserRouter([
    //Liens vers ma page "PageArticle"
    {
      path: '/',
      element: <>
      <Link to={'/HelloWorld'}>
        <article className="article" onClick={handleClick}>
        <div>{title}</div>
        </article>
        </Link>
    </>
    },
    {
        path:'/HelloWorld',
        element:<PageArticle />
      }
  ])
    //RENDER
    return (
        <RouterProvider router={router}/>
    )
}
export default Article