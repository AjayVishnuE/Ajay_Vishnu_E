import React from "react";
import "./Navbar.css";
import { NavbarDataset } from "../../constants/constants";

function Navbar(){

    // document.getElementById("myDiv").addEventListener("click", function() {
    //   this.style.backgroundColor = 'red';  // Change to any color you prefer
    // });

    const redirectset = ["#Home","#About","#Works","#Resume","#Contact"];
    return (
        <div className=" navbar">
            <div className="navbar-items-container">
                {
                    NavbarDataset.map((item,index) => {
                        return(
                            <div className="navbar-items">   
                                <a href={redirectset[index]}>
                                    <h1 id="nav-text" className="navbar-item-1" >{item}</h1>
                                </a>
                            </div>
                        )
                    })  
                }
            </div>
        </div>
    );
}

export default Navbar;
