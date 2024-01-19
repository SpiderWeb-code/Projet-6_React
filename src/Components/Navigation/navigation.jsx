import React from "react";

function Nav(){
//STATE

//COMPORTEMENT

//RENDER
return(
    <div style={{display:'flex',justifyContent: 'space-between',alignItems: "center", color: "red", width:"400px", padding: "0px 20px 0px 20px"}}>
        <p style={{textDecoration: "underline"}}><strong className="nav-link">Accueil</strong></p>
        <p><strong className="nav-link">A Propos</strong></p>
    </div>
)
}
export default Nav