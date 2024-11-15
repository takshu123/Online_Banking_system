import React from "react";
import "./Footer.css"
const Footer=()=>{
    return(
        <>
<div className="footermain">
  <div className="contactus">
        <span>Contact us</span>
       <div className="contactitems">
       <div className="constyle"><a href=""><i class="fa-solid fa-phone"></i> </a></div>
        <div className="constyle"><a href=""><i class="fa-solid fa-envelope"></i></a></div>
        <div className="constyle"><a href="">
        <i class="fa-brands fa-linkedin"></i></a></div>
        <div className="constyle"><a href=""><i class="fa-brands fa-instagram"></i></a></div>
      <div className="constyle">  <a href="">
      <i class="fa-brands fa-facebook"></i></a></div>
       </div>

  </div>
  <div className="quickaccess">
    <span> Quick access</span><br /> <br />
    <div className="quickaccesscom">
        <a href="">Interest Rate</a> <br /> <br />
        <a href="">Service Charge</a><br /> <br />
        <a href="">Policies & Guidelines</a><br /> <br />
        <a href="">Doorstep banking</a>
    </div>
  </div>
        <div className="internal">
            <span>Internal Engagements</span><br /> <br />
            <div className="internalcom">
                
            <a href="">Media Center</a><br /> <br />
            <a href="">Regional Rural Banks</a><br /> <br />
            <a href="">Treasury</a><br /> <br />
            <a href="">Training Centres</a><br /> <br />
            <a href="">Auditors Of The Bank</a>
            </div>
        </div>
        
 </div>
 <div className="copyright">
  
  <h5>© 2024 City Bank. All rights reserved</h5>
   
 <p>Last Modified on Monday, 02-07-2024</p>
 </div>
 

        </>
    );
}
export default Footer