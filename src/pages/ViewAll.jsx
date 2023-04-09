import React from "react";
import { useEffect, useState } from "react";
import CrewmateInfo from "../components/CrewmateInfo";
import "../styles/ViewAll.css"; 

const ViewAll = (props) => {

    const [crewmates, setCrewmates] = useState([]); 

    useEffect(() => {
        setCrewmates(props.allCrewmates); 
    }, [props]); 


    return(
        <div className="all-crewmates">
            {crewmates && crewmates.length > 0 ? (
                crewmates.map((crewmate) => (
                    <CrewmateInfo 
                    id={crewmate.id}
                    name={crewmate.name}
                    speed={crewmate.speed}
                    color={crewmate.color}
                    role={crewmate.role}
                    />
                    ))
                ) : ( 
                    <div>
                        <h1>There are no Crewmates on this Ship!</h1>
                        <h2>You can make one by pressing te button on the left</h2>
                    </div>
                )}
        </div>
    )
}

export default ViewAll; 