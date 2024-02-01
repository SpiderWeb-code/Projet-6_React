import React from "react";
import Logo from "../Components/Logo/logo";
import Nav from "../Components/Navigation/navigation";
import Banner from "../Components/Banner/banner";
import Error404 from "../Components/Error404/error404";

function NotFound(){
    return(
        <main>
            <header>
                <Logo />
                <Nav />
            </header>
            <section>
                <Error404 />
            </section>
            <Banner />
        </main>
    )
}
export default NotFound