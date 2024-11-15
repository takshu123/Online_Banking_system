import React from "react";
import "./Homeinfo.css"
import pic1 from "./Pictures/1.png"
import pic2 from "./Pictures/2.png"
import pic3 from "./Pictures/3.png"
import {Link} from "react-router-dom"
import horn from "./Pictures/horn.png"
import caution from "./Pictures/caution.png"
import Slider from "react-slick";
const Homeinfo=()=>{


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <>
        <Slider {...settings}>
          <div className="slider">
            <img src={pic1} alt="" />
          </div>
          <div className="slider">
           <img src={pic2} alt="" />
          </div>
          <div className="slider">
             <img src={pic3} alt="" />
          </div>
         
        </Slider>
          <br /><br />
        <div className="additionalinfo">
          <div className="news">
            <span>LATEST NEWS</span> <br /> <br />
           
            <p> <img src={horn} alt="" /> List of Willful Defaulters of our Bank as on 30.06.2024 </p> <br />
            <p> <img src={horn} alt="" /> Process for Claiming/Activation of the Inoperative Accounts/Unclaimed Deposits</p> <br />
            <p> <img src={horn} alt="" /> Information on secured assets possessed under SARFAESI Act, 2002 as on 30.06.2024
          </p>
          </div>
          <div className="caution">
          <span>CAUTION!</span> <br /> <br />

          <p> <img src={caution} alt="" /> Beware of FAKE MUDRA/PMMY website and apps</p> <br />
          <p> <img src={caution} alt="" />Fake Illegal Loan Apps and many other social apps
          </p> <br />
          <p> <img src={caution} alt="" />Please do not search for any branch address on google search or map.</p> <br />
        <p> <img src={caution} alt="" />Use Bank's own website only for any contact details</p>
          </div>

        </div>
        
        </>
      );
    }





export default Homeinfo