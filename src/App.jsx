import { useState, useEffect } from 'react'
import NavBar from './components/NarBar.jsx'
import { useRoutes } from "react-router-dom"; 
import CreateCrewmate from './pages/CreateCrewmate.jsx';
import ViewAll from './pages/ViewAll.jsx';
import EditCrewmate from './pages/EditCrewmate.jsx';
import DetailedCrewmate from './components/DetailedCrewmate.jsx';
import { supabase } from "./client.js";
import AllCrewmates from "./assets/AllCrewmates.png"; 
import Spaceship from "./assets/spaceship.png";
import './App.css'

function App() {


  const [crewmates, setCrewmates] = useState([]); 
    
    useEffect(()=> {
        const fetchData = async () => {
            const { data } = await supabase
            .from("mates")
            .select()
            .order("created_at", { ascending: true });

        setCrewmates(data);
        };
        fetchData();
        }, [])

  let elements = useRoutes([
    {
      path: "/",
      element: <div className='App'>
                <h1>Welcome to the Crewmate Creator!</h1>
                <h3>here you can create your very own set of 
                crewmates before sending them off into space!</h3>
                <img className='home-crewmates' src={AllCrewmates}/>
                </div>
    }, 

    {
      path: "/new-crewmate",
      element: <CreateCrewmate /> 
    }, 
    {
      path: "/crewmates",
      element: <ViewAll allCrewmates={crewmates}/>
    }, 
    {
      path: "crewmates/crewmate/:id",
      element: <DetailedCrewmate allCrewmates={crewmates}/>
    }, 
    {
      path: "crewmates/edit/:id", 
      element: <EditCrewmate allCrewmates={crewmates} /> 
    }, 
    {
      path: "crewmates/crewmate/:id/edit/:id",
      element: <EditCrewmate allCrewmates={crewmates} /> 
    }
  ])

  
  return (
    <div className="App">
      <NavBar />
      {elements}
    </div>
  )
}

export default App
