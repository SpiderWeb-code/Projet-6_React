import React from "react";
import Logo from "../Components/Logo/logo";
import Nav from "../Components/Navigation/navigation";
import Banner from "../Components/Banner/banner";

function ArticlePage(){
    return(
        <main>
            <header>
                <Logo />
                <Nav />
            </header>
            <Banner />
        </main>
    )
}
export default ArticlePage