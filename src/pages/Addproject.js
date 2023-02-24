import { Link } from "react-router-dom";
import Header1 from "../Components/Header1";
function Addproject(){
const addPro=()=>{};
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
          />
        </div>

        <div className="mb-3">
          <label>description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter description"
          />
        </div>
        
        <div className="d-grid">
          <Link to="/Projects" type="submit" className="btn btn-primary" onClick={addPro}>
            Add
          </Link>
        </div>
        
      </form>
        </>
    );
}
export default Addproject;