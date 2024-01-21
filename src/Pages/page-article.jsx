import React from "react";
import Logo from "../Components/Logo/logo";
import Nav from "../Components/Navigation/navigation";
import Banner from "../Components/Banner/banner";
import Article from "../Components/Article/article";
import { useParams } from "react-router-dom";

function ArticlePage(props){
    let params = useParams()
    console.log(params)
    return(
        <main>
            <header>
                <Logo />
                <Nav />
            </header>
            <Article />
            <Banner />
        </main>
    )
}
export default ArticlePage