import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header1 from "../Components/Header1";
import axios from "axios";
import Swal from "sweetalert2";
import './SingleProject.css'
function SingleProject(){
    let [project,setProject]=useState({});
    let params=useParams();
    const navigate=useNavigate();
    const deleteProject=()=>{
      Swal.fire({
        title: 'Do you want to delete the Project?',
        icon: "warning",
        showDenyButton: true,
        denyButtonText: 'DELETE',
        showCancelButton: true,
        showConfirmButton:false
      }).then((result) => {
        console.log(result);
        if (result.isDenied) {
          axios.delete(`http://localhost:8000/Projects/${params.projectid}`)
          .then((data)=>{Swal.fire('Project Deleted!', '', 'success')});
          navigate('/Projects');
        } else{
          Swal.fire('Project is not deleted', '', 'info')
        }
      })
    }
    const updateProject=()=>{
      console.log(project.input_docs);
    }
    const addFile= async ()=>{
        const { value: file } = await Swal.fire({
            title: 'Select File',
            input: 'file',
            inputAttributes: {
              'accept': 'image/*',
              'aria-label': 'Upload your text file '
            }
          })
          if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
              Swal.fire({
                title: 'You uploaded File successfully',
                icon: "success",
              })
            //   console.log(e.target.result);
            }
            reader.readAsDataURL(file)
            project.input_docs=file;
          }
          // console.log(file);
          // project.input_docs=input_file;
        updateProject();
    }
    const getSingleProject=()=>{
        // fetch or axios stat for getting project info from params then setting it with setProject
        axios.get(`http://localhost:8000/Projects/${params.projectid}`)
      .then((data)=>{
        setProject(data.data);
    });
    }
    useEffect(()=>{
        getSingleProject();
    },[]);
    return(<>
    <Header1/>
    
    <h1 className="text-left mt-3" >
        Project Name:
    </h1>
    <h2>{project.Name}</h2>
    <div className="row px-5 mx-5 col-9">
        <table className="table table-bordered table-striped table-dark mt-5">
            <thead>
             <tr>
                <th>#</th>
                <th>User Story Docs</th>
                <th>Usecase Diagram</th>
                <th>Class Diagram</th>
             </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td >{project.input_docs==null? <button className="btn btn-success" onClick={addFile}>Add File</button>: <a href='#'>{project.input_docs}</a>}</td>
                <td>{project.usecase_diagramPNG==null? <button className="btn btn-success">Generate</button>:<a href='#'>{project.usecase_diagramPNG}</a>} </td>
                <td>{project.class_diagramPNG==null? <button className="btn btn-success">Generate</button>:<a href='#'>{project.class_diagramPNG}</a>} </td>
              </tr>
              
            </tbody>
        </table>
    </div>
    <br/>
    <button to="/Projects" type="button" className="btn btn-danger size " onClick={deleteProject}>Delete Project</button>
    </>);
}
export default SingleProject;