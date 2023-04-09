import React from "react";
import "../styles/CrewmateInfo.css"; 
import { Link } from "react-router-dom"; 
const CrewmateInfo = (crewmate) => {


    return (
        <div className="crewmate-info">
            <Link to={"crewmate/" + crewmate.id}>
                <h2 className="crewmate-name">{crewmate.name}</h2>
                <h3 className="crewmate-speed">{crewmate.speed}</h3>
                <h3 className="crewmate-color">{crewmate.color}</h3>
                <h3 className="crewmate-role">{crewmate.role}</h3>
                <Link to={"edit/" + crewmate.id}><button>Edit me</button></Link>
            </Link>
        </div>
    );
};

export default CrewmateInfo; 