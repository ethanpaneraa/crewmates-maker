import React from "react";
import { Link } from "react-router-dom"; 
import "../styles/NavBar.css"; 

const NavBar = () => {

    return (
        <div className="navbar-container">
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/new-crewmate">
                <button>Create a new Crewmate!</button>
            </Link>
            <Link to="/crewmates">
                <button>View Crewmates</button>
            </Link>

            
        </div>
    );

}

export default NavBar; 