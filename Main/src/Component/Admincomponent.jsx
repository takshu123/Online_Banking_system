import React from "react";
import "./Admincomponent.css"
import { Link, useNavigate } from "react-router-dom";
const Admincomponent=()=>{

    return(
        <>
        <div className="admincomponent">
            <div className="admincom">
              <a href=""> <Link to="/Create"><p>Create Customer</p></Link></a>
            </div>
            <div className="admincom">
           <a href=""><Link to="/Viewcusbyac"> <p>View Customer by A/c no</p></Link></a>
            </div>
            <div className="admincom">
          <a href=""> <Link to="/Addwithdraw"> <p>ADD/Withdraw Amount</p></Link></a>
            </div>
            <div className="admincom">
                <a href=""><Link to="/Delete" ><p>Delete Customer</p></Link></a>
            </div>
            <div className="admincom">
               <a href=""> <Link to="/Sendmoney"><p>Send Money to Other Account</p></Link></a>
            </div>


        </div>
        </>
    );
}

export default Admincomponent

