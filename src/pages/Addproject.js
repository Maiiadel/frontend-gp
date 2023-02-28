import axios from "axios";
import { Button } from "bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header1 from "../Components/Header1";
import Swal from "sweetalert2";
function Addproject(){
let [Name,setName]=useState('');
let [description,setDescription]= useState('');
const navigate=useNavigate();
const addPro=(e)=>{
  e.preventDefault();
  axios.post("http://localhost:8000/Projects",
  {Name,description}).then((data)=>{console.log(data);});
  Swal.fire({
    title: `Project " ${Name}" added successfully `,
    icon: "info",
    showDenyButton: false,
    showConfirmButton:true,
    confirmButtonText:'OK'
  }).then((result) => {
    if (result.isConfirmed) {
      navigate('/Projects');
    } else{
      Swal.fire('Project is not added', '', 'info')
    }
  })
};
    return(
        <>
        <Header1/>
          <form className="centering">
        <h3>Add new Project</h3>
        <div className="mb-3">
          <label>Project name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Project Name"
            onChange={(e)=>{setName(e.target.value)}}
          />
        </div>

        <div className="mb-3">
          <label>Description:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter description"
            onChange={(e)=>{setDescription(e.target.value)}}
          />
        </div>
        
        <div className="d-grid">
          <button to="/Projects" type="submit" className="btn btn-primary" onClick={addPro}>
            Add
          </button>
        </div>
      </form>
        </>
    );
}
export default Addproject;