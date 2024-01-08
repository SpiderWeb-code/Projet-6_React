import React from "react";
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import "./Article.css";
import PageArticle from '../ArticlePage/Page'

//STATE

function Article (props){
    //STATE
    const title = <h2>{props.title}</h2>
    const router = createBrowserRouter([
    //Liens vers ma page "PageArticle"
    {
      path: '/',
      element: <>
      <Link to={'/HelloWorld'}>
        <article className="article">
        {title}
        </article>
        </Link>
    </>
    },
    {
        path: '/HelloWorld',
        element: <div><PageArticle /></div>
      }
  ])
    //COMPORTEMENT

    //RENDER
    return (
      <RouterProvider router={router}/>
  )
}
export default Article