import { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import './Login.css'
function Login(){
    // let [Counter,setCounter]=useState(0);
    let islogged=false;
    let [users,setUsers]= useState([]);
    let [user, setUser]= useState({});
    const getUsers=()=>{
        // fetch statment or axios for getting all users
      axios.get("http://localhost:8000/users")
      .then((data)=>{
        // console.log(data.data);
        setUsers(data.data);
      // console.log({users}); 
      // console.log(data.data);
    });
  }
        // SHA8AAAAL
    const checkusers=()=>{
            users.map((u)=>{
              (u.username=="noursabry@gmail.com" && u.password=="4321") && setUser(u);
              // SHA8ALAAAAAA LOLOLOLOLOLYYYYY
            //   setUser(user);
            //  console.log(user.FName);
          })
          // if (user=={})
          //  { islogged=true;
          //   console.log("allaho akbar");}
          //   else
          //   console.log("ya rabyyy");
}
    
    useEffect(
      ()=>{
          getUsers();
      },[]
  );
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
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
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
          <Link to="/Projects" type="submit" className="btn btn-primary" onClick={checkusers}>
            Submit
          </Link>
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