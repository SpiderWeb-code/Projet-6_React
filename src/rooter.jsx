import React from 'react';
import { RouterProvider, createBrowserRouter, Link } from 'react-router-dom';
import Article from "../src/Components/Page-Accueil/Main/article";
import './index.css';
import Data from '../src/Data/data.json'
import Logo from './Components/Page-Accueil/Header/logo';
import Nav from './Components/Page-Accueil/Header/navigation';
import SectionImage from './Components/Page-Accueil/Main/section-image';
import Footer from '../src/Components/Page-Accueil/Footer/footer';

const router = createBrowserRouter([
    {
        path: "/",
        element: <>
        <header>
    <Logo />
    <Nav />
    </header>
    <SectionImage />
    <Link to={"/helloworld"}>
    <section className='container-article'>
      {Data.map(({title, id, cover}) => (
      //<Article key={id} title={title} cover={cover}/>
        <Article key={id} title={title} cover={cover}/>
      ))}
    </section>
    </Link>
    <Footer /> 
    </>
    },
    {
        path: '/helloworld',
        element: <>
        <header>
          <Logo />
          <Nav />
        </header>
        <section>
        {Data.length > 0 && (
        //Récupéres les premiers éléments de mon tableau Data
        <Article key={Data[0].id} title={Data[0].title} cover={Data[0].cover}/>
        )}
        </section>
        <Footer />
        </>
    }
])

const Rooter = () =>{
    return <RouterProvider router={router} />
  };

export default Rooter;