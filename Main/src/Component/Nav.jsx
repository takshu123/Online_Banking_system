import React from "react";
import "./Nav.css"
import {Link} from "react-router-dom"

const Nav=()=>{
    return(<>
        <div className="nav1">
        <div className="aboutus" >About us</div>
        <div className="cityonline">City Online</div>
        <div className="inverstor">Investor Corner</div>
        <div className="contactus">9509916125</div>
        <div className="country">IND</div>
        </div>
        <nav className="nav">
           <div id="navlogo">
            
           </div>

           <div id="navheading">
            City Bank
           </div>

           <div id="navcomponent">
                 <div id="stafflogo">
                 <Link to="/login"><p> Login</p></Link>
                  </div>
           
            
           </div>
               
          

          </nav>
          <div className="nav3">
           <marquee  direction="left"> Update your KYC as soon as possible or visit the nearest Branch.</marquee>
          </div>
          </>
    );
}

export default Nav