import { Link } from "react-router-dom";
import Header from "../Components/Header";
import './Login.css';
import Swal from 'sweetalert2/dist/sweetalert2.js'
function Signup(){
 const adduser=()=>{
  Swal.fire({
    icon: 'success',
    title: 'Successfully Signed Up',
    showConfirmButton:true ,
  })
  
 }
    return(
    <>
    <Header/>
      <form className="centering mt-5" onSubmit={adduser}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name: </label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="mb-3">
          <label>Last name: </label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="mb-3">
          <label>Email address: </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password: </label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3">
          <label>Role: </label>
          <br></br>
          <select  name="Role" id="role" placeholder="choose role">
    <option value="BA">Business Analyst</option>
    <option value="stud">Student</option>
    <option value="PO">Product Owner</option>
    <option value="other">other</option>
  </select>
        </div>
        <div className="mb-3">
          <label>Other:</label>
          <input
            type="text"
            className="form-control"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" >
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <Link to="/login">sign in?</Link>
        </p>
      </form>
    </>
    );
}
export default Signup;
