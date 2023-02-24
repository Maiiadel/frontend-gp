import './Header1.css';
import { Link } from 'react-router-dom';
import Image1 from './newlogo-removebg-preview.png'
function Header1(){
  
    return(
        <>
            <nav className="navbar" style={{backgroundColor:"tan"}}>
          <div className="container">  
          <Link className="navbar-brand" to="/Projects"><img className="img-circle" alt="M4 mawgoda " src={Image1}/><p >UML generator</p></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
              <Link className="nav-link" to={"/Projects"}>My projects</Link>
                </li>
                <li className="nav-item">
              <Link className="nav-link" to="/">Log out </Link>
                </li>
            </ul>
         </div>
         </div>
        </nav>
        </>
    );
}
export default Header1;