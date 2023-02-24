import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header1 from "../Components/Header1";
import axios from "axios";
import Swal from "sweetalert2";
function SingleProject(){
    let [project,setProject]=useState({});
    let params=useParams();
    let input_file;
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
            project.input_docs=e.target.result;

            }
            reader.readAsDataURL(file)
          }
        //   project.input_docs=input_file;
        // console.log(project.input_docs);
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
    <div className="row">
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
                <td>{project.input_docs==null? <button className="btn btn-success" onClick={addFile}>Add File</button>: <a href='#'>{project.input_docs}</a>}</td>
                <td>{project.usecase_diagramPNG==null? <button className="btn btn-success">Generate</button>:<a href='#'>{project.usecase_diagramPNG}</a>} </td>
                <td>{project.class_diagramPNG==null? <button className="btn btn-success">Generate</button>:<a href='#'>{project.class_diagramPNG}</a>} </td>
              </tr>
              
            </tbody>
        </table>
    </div>

    {/* table for project name , docs, and diagrams (buttons and links for diagram if exists) */}
    
    </>);
}
export default SingleProject;