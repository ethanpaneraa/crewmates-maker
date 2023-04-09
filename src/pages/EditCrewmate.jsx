import React, { useState } from "react";
import { useParams } from 'react-router-dom'; 
import { supabase } from "../client.js";
import "../styles/EditCrewmate.css"; 

const EditCrewmate = (props) => {

    const { id } = useParams();

    const crewmateData = props.allCrewmates; 
    const [crewmate, setCrewmate] = useState([crewmateData.filter((crewmate) => crewmate.id === id)]); 

    const updateCrewmate = async (event) => {
        event.preventDefault();
    
        await supabase
            .from("mates")
            .update({
            name: String(crewmate.name),
            speed: String(crewmate.speed), 
            color: String(crewmate.color), 
            role: String(crewmate.role)
            })
            .eq("id", id);
    
        alert("Crewmate has been updated"); 
        window.location = "/";
        };

    const deleteCrewmate = async(e) => {
        e.preventDefault(); 
        
        await supabase
            .from("mates")
            .delete()
            .eq("id", id); 

            window.location = "http://localhost:5173/";

            alert("Crewmate has been deleted");
    };
    

    const onChange = (event) => {
        setCrewmate((prevCrewmate) => {
            return {...prevCrewmate, [event.target.name]: [event.target.value]}; 
        });
    };

    const colorOptions = [
        {
            label: "Red", 
            value: "red"
        }, 
        {
            label: "Blue",
            value: "blue"
        }, 
        {
            label: "Green",
            value: "green"
        }, 
        {
            label: "Purple",
            value: "purple"
        },
        {
            label: "Yellow",
            value: "yellow"
        }, 
        {
            label: "Orange",
            value: "orange"
        }, 
        {
            label: "Pink", 
            value: "pink"
        }
    ]; 

    const roleOptions = [
        {
            label: "Imposter",
            value: "imposter"
        },
        {
            label: "Crewmate",
            value: "crewmate"
        }, 
        {
            label: "Detective", 
            value: "detective"
        }, 
        {
            label: "Engineer", 
            value: "engineer"
        }, 
        {
            label: "Vigilante",
            value: "vigilante"
        }
    ]; 


    return (
        <div className="edit-crewmate">
            <h1>Edit Crewmate Page</h1>
            <form onSubmit={updateCrewmate}>
                <label htmlFor="name">Name</label>
                <input
                type="text"
                id="name"
                name="name"
                value={crewmate.name}
                onChange={onChange}
                />

                <label htmlFor="speed">Speed</label>
                <input
                type="text"
                id="speed"
                name="speed"
                value={crewmate.speed}
                onChange={onChange}/>

                <label htmlFor="color">Color</label>
                <select id="color" name="color" value={crewmate.color} onChange={onChange}>
                    {colorOptions.map((color) => (
                        <option value={color.value}>{color.label}</option>
                    ))}; 
                </select>
                <label htmlFor="role">Role</label>
                <select id="role" name="role" value={crewmate.role} onChange={onChange}>
                    {roleOptions.map((role) => (
                        <option value={role.val}>{role.label}</option>
                    ))}; 
                </select>
            
                <button className="update-button" onClick={updateCrewmate}>Update Crewmate</button>

                <button className="del-button" onClick={deleteCrewmate}>Delete Crewmate</button>


            </form>
        </div>
    );
};

export default EditCrewmate; 