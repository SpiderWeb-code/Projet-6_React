import React from "react";
import Nav from "../Components/Navigation/navigation";
import Banner from "../Components/Banner/banner";
import Error404 from "../Components/Error404/error404";

function NotFound(){
    return(
        <main>
            <header id="header-not_found">
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