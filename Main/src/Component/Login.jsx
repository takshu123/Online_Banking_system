import { useState ,useEffect } from "react";
import React from "react";
import "./Login.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import login from "./Pictures/loginheading.png"
const Login=()=>{
let [name,setName]=useState("");
let [password,setPassword]=useState("");
let [data,setData]=useState([]);
let navigate=useNavigate();
let changename=(e)=>{
    setName(e.target.value)

}


let changepassword=(e)=>{
    setPassword(e.target.value)

}


let formhandler=(e)=>{
    e.preventDefault();
    
    axios.get("http://localhost:5000/login")
    .then((response)=>{
       setData(response.data)
    })
    .catch(()=>{
        console.log("Something is wrong");
    })
    data.map(
        (x)=>{
            if(x.name ==name && x.password==password){
                navigate("/admincomponent");

            }
            else{
                console.log("Not register")
            }

        }
    )


    

}
return(

    <div className="users">
        <div className="loginheading"> <img src={login} alt="" /> 
        <p>Login</p>
        </div>
      <table className="cards">
    
        <tr>
            
            <td> <i class="fa-solid fa-user"></i>  <input type="text" name="Name" placeholder="Username" onChange={changename}/></td>
        </tr>
        <br />
        <br />
        <tr>
            
            <td> <i class="fa-solid fa-lock"></i>  <input name="salary" type="password" placeholder="Password" onChange={changepassword}/></td>
        </tr>
       <br /> <br /><br />
        <tr>
            <th> <button onClick={formhandler}>SUBMIT</button></th>

        </tr>

      </table>
   


    </div>
);

}

export default Login
