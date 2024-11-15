import React from "react";
import "./Viewcusbyac.css"
import { useState } from "react";
import axios from "axios";
const Viewcusbyac=()=>{
   
let [accountnumber,setAccountnumber]=useState("");
let [data,setData]=useState([]);
let [firstname,setFname]=useState("")
let [middlename,setMname]=useState("")
let [lastname,setLname]=useState("")
let [gender,setG]=useState("")
let [mobileno,setMob]=useState("")
let [email,setEmail]=useState("")
let [dob,setDob]=useState("")
let [address,setAdd]=useState("")
let [acctype,setType]=useState("")
let [balance,setBal]=useState("")
let [no,setNo]=useState("")
let changenumber=(e)=>{
    setAccountnumber(e.target.value);

}

let buttonhandler=(e)=>{
    e.preventDefault();
    document.querySelector('.userdetails').style.display="block"

    // console.log(accountnumber)
    axios.get(`http://localhost:5000/Viewcusbyac/${accountnumber}`)
    .then((response)=>{
        setData(response.data)
        console.log(data)
        setFname(data[0].firstname)
        setMname(data[0].middlename)
        setLname(data[0].lastname)
        setG(data[0].gender)
        setMob(data[0].mobileno)
        setEmail(data[0].email)
        setDob(data[0].dob)
        setAdd(data[0].address)
        setType(data[0].acctype)
        setBal(data[0].amount)
        setNo(data[0].accno)
    })
    .catch((error)=>{
        console.log(error)
    })
    console.log(data)

}


return(

<>

<div className="search">

     <p>Customer Details</p>
     <br /><br />

<label htmlFor="">Enter the account no:</label>
<input type="number" value={accountnumber} onChange={changenumber}/>
<button onClick={buttonhandler}>Search</button>
</div>
<br />

<div className="userdetails">

<table >
<tr>
    <th > <h2>Account no:{no} </h2></th>
    
</tr> <br />
<tr>
    <td className="cuscomponent">Firstname : {firstname}</td>
  
</tr>
<tr>
    <td className="cuscomponent">Middlename : {middlename}</td>
  
</tr>
<tr>
    <td className="cuscomponent">Lastname : {lastname}</td>

</tr>
<tr>
    <td className="cuscomponent">Gender : {gender}</td>

</tr>
<tr>
    <td className="cuscomponent">Mobile no : {mobileno}</td>

</tr>
<tr>
    <td className="cuscomponent">Email : {email}</td>

</tr>
<tr>
    <td className="cuscomponent">DOB : {dob}</td>
   
</tr>
<tr>
    <td className="cuscomponent">Address : {address}</td>

</tr>
<tr>
    <td className="cuscomponent">Account Type : {acctype}</td>

</tr>
<tr>
    <td className="cuscomponent">Account Balance : {balance}</td>
 
</tr>

</table>

</div>

</>


)

}


export default Viewcusbyac
