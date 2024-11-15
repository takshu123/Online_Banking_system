import React  from "react";
import { useState } from "react";
import "./Delete.css"
import axios from "axios";
const Delete=()=>{

    let [accountnumber,setAcc]=useState("");
    let changenumber=(e)=>{
        setAcc(e.target.value);

    }
let buttonhandler=(e)=>{
axios.delete(`http://localhost:5000/${accountnumber}`)
.then((response)=>{
    console.log(response.data===null)
    if(response.data===null){
        document.querySelector(".Invaliddelete").style.display="block"
        document.querySelector(".Accdeletesuccess").style.display="none";
        window.location.assign("/Delete")
    }
    else{
    
        document.querySelector(".Invaliddelete").style.display="none"
        document.querySelector(".Accdeletesuccess").style.display="block";
        window.location.assign("/Delete")
    }

})
.catch(error=>{
    console.log(error)
})


}

    return(
        <>

        
<div className="delete">

<p>Delete Account</p>
<br /><br />

<label htmlFor="">Enter the account no:</label>
<input type="number" value={accountnumber} onChange={changenumber}/>
<button onClick={buttonhandler}>Search</button>
</div>
<br />

<h2 className="Accdeletesuccess">Account Deleted</h2>
<h2 className="Invaliddelete">Invalid </h2>
        </>
    );
}

export default Delete
