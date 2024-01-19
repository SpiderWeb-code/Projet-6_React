import React from 'react';
import { RouterProvider, createBrowserRouter, Link } from 'react-router-dom';
import Article from "../src/Components/Page-Accueil/Main/article";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Link to={"/helloworld"}><Article /></Link>
        )
    },
    {
        path: '/helloworld',
        element: <div>Hello World</div>
    }
])

const Rooter = () => {
  return <RouterProvider router={router} />
};

export default Rooter;