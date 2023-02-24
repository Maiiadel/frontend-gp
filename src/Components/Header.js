import { Link } from "react-router-dom";
import Image1 from './newlogo-removebg-preview.png'
function Header(){
  
return(
    <>
    <nav className="navbar navbar-exband"style={{backgroundColor:"tan"}}>
  <div className="container">
    <div className="navbar-header">
    <a className="navbar-brand float-start" href="/#"><img className="img-circle" alt="Not Found" src={Image1}/><p >UML generator</p></a>
    </div>
    <ul className="navbar nav col-3">
      <li className="nav-item active"><Link to="/" className="text-dark">Home</Link></li>
      <li className="nav-item"><Link to="/about" className="text-dark">About</Link></li>
      <li className="nav-item"><Link to='/signup' className="text-dark"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
      <li className="nav-item"><Link to="/login" className="text-dark"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
    </ul>
  </div>
</nav>
    </>
);
}

export default Header;