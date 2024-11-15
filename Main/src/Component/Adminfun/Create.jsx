import React from "react";
import { useState } from "react";
import axios from "axios"
import "./Create.css"
const Create=()=>{
    let [firstname,setFname]=useState("");
    let [middlename,setMname]=useState("");
    let [lastname,setLname]=useState("");
    let [gender,setGender]=useState("");
    let [mobileno,setMobile]=useState("");
    let [email,setEmail]=useState("");
    let [dob,setDob]=useState("");
    let [address,setAddress]=useState("");
    let [acctype,setType]=useState("");
    let [accno,setNo]=useState("");
    let [amount,setAmount]=useState("")

    let amountdata=(e)=>{
        setAmount(e.target.value)
    }
    let firstdata=(e)=>{
        setFname(e.target.value)
    }
    let middledata=(e)=>{
        setMname(e.target.value)
    }
    let lastdata=(e)=>{
        setLname(e.target.value)
    }
    let genderdata=(e)=>{
        setGender(e.target.value)
    }
    let mobliedata=(e)=>{
        setMobile(e.target.value)
    }
    let emaildata=(e)=>{
        setEmail(e.target.value)
    }
    let dobdata=(e)=>{
        setDob(e.target.value)
    }
    let addressdata=(e)=>{
        setAddress(e.target.value)
    }
    let typedata=(e)=>{
        setType(e.target.value)
    }
    let accnodata=(e)=>{
        setNo(e.target.value)
    }
    

    let formhandler=(e)=>{
        e.preventDefault();
      
        let payload={firstname,middlename ,lastname,gender,mobileno,email,dob,address,acctype,accno,amount};

     
        axios.post("http://localhost:5000/Create",payload)
        .then(()=>{
            console.log("Data has been addes");
            document.querySelector('.acknowledgement').style.display="block";
            
        })
        .catch(()=>{
            console.log("Something went wrong")
        })
        
        window.location.assign("/Create")
    }

    return(
        <>
        <div className="create">
            <p>Create New Account</p>
            <div className="form">
                <form >
                <div className="form1">
                <label htmlFor="first">First Name</label>
                <label htmlFor="middle">Middle Name</label>
                <label htmlFor="last">Last Name</label>
                </div>
               <div className="form1">
               <input type="text" name="first" id="first" value={firstname} onChange={firstdata} required/>

                
                <input type="text" name="middle" id="middle" value={middlename} onChange={middledata}/>

                <input type="text" name="last" id="last" value={lastname} onChange={lastdata} required/>
               </div>
               <div className="form1">
                <label htmlFor="gender">Gender</label>
              
                <label htmlFor="mobile">Moblie No</label>
                <label htmlFor="email">Email</label>
               </div>
               <div className="form1">
                <select name="gender" id="gender" value={gender} onChange={genderdata}  required>
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                </select>
                
                <input type="number" name="mobile" id="mobile" value={mobileno} onChange={mobliedata} required/>
                <input type="email" name="email" id="email" value={email} onChange={emaildata}/>
               </div>
               <div className="form1">
                <label htmlFor="dob" >DOB</label>
                <label htmlFor="address">Permanent Address</label>
                <label htmlFor="">Account Type</label>

               </div>
               <div className="form1">
                <input type="date" name="dob" id="dob" value={dob} onChange={dobdata} required/>
                <input type="text" id="address" value={address} onChange={addressdata} required/>
                <div className="radio">
                <input type="radio" name="type" id="current" value="current" onChange={typedata} />
                <label htmlFor="current">Current</label>
                <input type="radio" id="saving" name="type" value="saving" onChange={typedata}/>
                <label htmlFor="saving">Saving</label>
                </div>
               </div>
              <div className="form1">
                <label htmlFor="acc">Account no:</label>
                <input type="number" id="acc" value={accno}
                 onChange={accnodata} placeholder="Enter account no" required/>
              </div>
              <div className="form1">
                <label htmlFor="credit">Ammount:</label>
                <input type="number" id="credit" value={amount} onChange={amountdata} />
              </div>
               <button onClick={formhandler}>Submit</button>
                <div className="acknowledgement" >
                    New user created
                </div>

                </form>
            </div>
        </div>
        
        </>
    );
}

export default Create
