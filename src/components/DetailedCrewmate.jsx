import React from "react";
import { useParams } from 'react-router-dom'; 
import { Link } from 'react-router-dom'; 
import "../styles/DetailedCrewmate.css"; 



const DetailedCrewmate = (props) => {

    const { id } = useParams(); 
    console.log("This is id: ", id); 
    const crewmateData = props.allCrewmates;
    const newData = crewmateData.filter((crewmate) => {
        return crewmate.id === Number(id)
        })
    console.log(newData[0]); 
    return (
        <div className="detailed-view">
            <h1>{newData[0].name}</h1>
            <h2>Id: {newData[0].id}</h2>
            <h2>Speed: {newData[0].speed} mph</h2>
            <h2>Color: {newData[0].color}</h2>
            <h2>Role: {newData[0].role}</h2>
            <h2>Create Date: {newData[0].created_at}</h2>
            <Link to={"edit/" + newData[0].id}><button>Wanna Edit Me?</button></Link>
        </div>
    );
};

export default DetailedCrewmate; 