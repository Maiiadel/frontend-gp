import { useState, useEffect} from "react";
import Header1 from "../Components/Header1";
import { Link } from "react-router-dom";
import axios from "axios";
function Myprofile(){
    let [projects,setProjects]=useState([]);
    const getProjects=()=>{
        // fetch statment for getting all projects for a specific user 
        axios.get("http://localhost:8000/Projects")
      .then((data)=>{
        // console.log(data.data);
        setProjects(data.data);
      // console.log({projects}); 
      // console.log(data.data);
    });
    };
    useEffect(
        ()=>{
            getProjects();
        },[]
    );
    return(<>
    <Header1/>
    <h1 className="mt-3">My Projects</h1>
    {/* momken a7ot sidebar fe gamb a7ot fe my projects aw ashof y3ni a7ot fehom eh yemen w shemal */}
    {/* Cards of projects  */}
    <div className="row">
          {projects.map((project) => {
            return (
              <div className="col-3" key={project.id}>
                <div className="card  mt-5 ">
                    {/* Displaying cards for  project name , description, and button open project */}
                 <h2 className="card-title">{project.Name}</h2>
                 <div className="card-body">
                    <p className="card-text">{project.description}</p>
                    <Link className="btn btn-primary" to={`/Projects/${project.id}`}>
                         Open
                    </Link>
                 </div>
                 </div>
              </div>
            );
          })}
           <div className="col-2 card pl-5 m-3 mt-5">
                 <h2 className="card-title text-secondary">New Project?</h2>
                 <div className="card-body">
                  <br/>
                 <Link to="/addproject" className="btn btn-success mt-3"> Add </Link>
                 </div>
                 </div>
        </div>

    </>);
}
export default Myprofile;