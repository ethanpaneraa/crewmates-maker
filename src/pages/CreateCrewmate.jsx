import React, { useState } from "react";
import { supabase } from "../client.js";
import "../styles/CreateCrewmate.css"; 

const CreateCrewmate = () => {

    const [crewmate, setCrewmate] = useState({name: "", speed: "", color: "", role:""}); 

    const createCrewmates = async (e) => {
        e.preventDefault(); 

        await supabase
        .from("mates")
        .insert({name: crewmate.name, 
                speed: crewmate.speed, 
                color: crewmate.color, 
                role: crewmate.role
        })
        .select(); 

    
        alert("Crewmate has been created"); 
        window.location = "/";
    };

    const onChange = (event) => {
        setCrewmate((prevCrewmate => {
            return {...prevCrewmate, [event.target.name]: event.target.value};
        })); 
    }

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

    
    return(

        <div className="make-crewmate">
            <h1>Create a new Crewmate!</h1>
            <form onSubmit={createCrewmates}>
                <label htmlFor="name">Name</label>
                <input
                type="text"
                id="name"
                name="name"
                value={crewmate.name}
                onChange={onChange}>
                </input>

                <label htmlFor="speed">Speed</label>
                <input
                type="text"
                id="speed"
                name="speed"
                value={crewmate.speed}
                onChange={onChange}>
                </input>

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
                <input type="submit" value="Submit"></input>
            </form>
        </div>

    );
}

export default CreateCrewmate; 