import { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css'
function Login(){
//    let islogged=false;
// lesa hn3ml el rember me w el forgot password 
    let [users,setUsers]= useState([]);
    let [user, setUser]= useState({});
    let [input_username,setusername]=useState('');
    let [input_pass,setpass]=useState('');
    const navigate=useNavigate();
    const getUsers=()=>{
        // fetch statment or axios for getting all users
      axios.get("http://localhost:8000/users")
      .then((data)=>{
        setUsers(data.data);
    });
  }
        // SHA8AAAAL
    const checkusers=(e)=>{
      // b3d myt2kd en el user mwgod yro7 l my proofile b navigate
      // lazem a3ml prevent default 3a4an myrg3 y3ml refresh 
      e.preventDefault();
            users.map((u)=>{
              (u.username==input_username && u.password==input_pass) && setUser(u);
              console.log(user);
              // SHA8ALAAAAAA LOLOLOLOLOLYYYYY w bygeb el user el folany mazboot 
          })
          // if (user=={})
          //  { islogged=true;
          //   console.log("allaho akbar");}
          //   else
          //   console.log("ya rabyyy");
          navigate('/Projects');
}
    
    useEffect(
      ()=>{
          getUsers();
      },[] );
    return(
        <>
          <Header/>
      <form className="centering mt-5" >
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=>{setusername(e.target.value);}}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=>{setpass(e.target.value);}}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button to="#" type="submit" className="btn btn-primary" onClick={checkusers}>
            Log in
          </button>
        </div>
        <p className="forgot-password text-right">
            {/* isa lw fe wa2t hb2a a3ml reset  password page form */}
          Forgot <a href="#">password?</a>
        </p>
      </form>
        </>
    );
}
export default Login;