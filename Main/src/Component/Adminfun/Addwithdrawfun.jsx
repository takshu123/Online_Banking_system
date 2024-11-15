import React from "react";
import { useState } from "react";
import "./Addwithdrawfun.css"
import axios from "axios";
const Addwithdrawfun=()=>{
    let newadd=0;
    let newwith=0;
    let [data,setData]=useState([])
    let count=0;
    let [headingacc,setHacc]=useState([])
    let [accountno,setAccountno]=useState("");
    let [amount,setA]=useState("")
    let [addsubmit,setAsub]=useState("")
    let [withsubmit,setWsub]=useState("");


    let trackno=(e)=>{
        setAccountno(e.target.value)
       
    }

    let formhandler=(e)=>{
        e.preventDefault();
       
        axios.get(`http://localhost:5000/Addwithdrawfun/${accountno}`)
    .then((response)=>{
        setData(response.data)
        console.log(data)
        setHacc(data[0].accno)
        setA(data[0].amount)
    })
    .catch((error)=>{
        console.log(error)
    })
    document.querySelector('.add').style.display="block"
document.querySelector('.with').style.display="block"
document.querySelector('.addwithuser').style.display="block"
    }
    let addhandler=(e)=>{
        e.preventDefault();
        if(count==1){
               document.querySelector('.withfunctions').style.display="none"

             document.querySelector('.addfunctions').style.display="block"

             count--;
        
            }
            if(count==0){
                  document.querySelector('.addfunctions').style.display="block"
                  document.querySelector('.withfunctions').style.display="none"
                  count++;
            }
       

    }
    let withdrawhandler=(e)=>{
 e.preventDefault();
 if(count==1){
    document.querySelector('.withfunctions').style.display="block"

  document.querySelector('.addfunctions').style.display="none"

  count--;

 }
 if(count==0){
       document.querySelector('.withfunctions').style.display="block"

         document.querySelector('.addfunctions').style.display="none"
       count++;
 }
       
    }
    let setwithsubmit=(e)=>{
        setWsub(e.target.value);

    }

    let setaddsubmit=(e)=>{
        setAsub(e.target.value)

    }
    
    newadd=  Number(amount)+Number(addsubmit)

    let addsubmitfun=(e)=>{
        e.preventDefault();
        amount=newadd
        let payload={amount};
        document.querySelector('#addnotification').style.display="block"
        axios.put(`http://localhost:5000/Add/${accountno}`,payload)
        .then((response)=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        }
        

        )
    }
    newwith=Number(amount)-Number(withsubmit);
   
    let withsubmitfun=(e)=>{
        e.preventDefault();
        amount=newwith
        let payload={amount};
        document.querySelector('#withnotification').style.display="block"
        axios.put(`http://localhost:5000/With/${accountno}`,payload)
        .then((response)=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        }
        

        )

    }


  
  


    return(
        <>

        <div className="mainaddandwith">

        <p>Add/Withdraw Section</p>
        <br /> <br />

        <label htmlFor="">
            Enter the account no:
        </label>
        <input type="number" value={accountno} onChange={trackno} />
        <button onClick={formhandler}>Search</button>
        </div>
        <br /><br />
        <div className="addwithuser">
            <h2>Account no:{headingacc}</h2>

        </div> <br /><br />
        <div className="functions">
            <div className="add">
                <button onClick={addhandler}>Add</button>
               
            </div>
            <div className="with">
                <button onClick={withdrawhandler}>Withdraw</button>
            </div>
        </div> <br />
        <div className="allfunction">
            <div className="addfunctions">
            <label htmlFor="">Total Amount:{amount}</label>
            <br /> <br />
            <input type="number" placeholder="Enter amount to Add" value={addsubmit} onChange={setaddsubmit}/>
            <br /> <br />
            <button onClick={addsubmitfun}>Submit</button>
            <br /><br />

            <h4 id="addnotification">Updated Amount:{newadd}</h4>
            </div>

            <div className="withfunctions">
            <label htmlFor="">Total Amount:{amount}</label>
            <br /> <br />
            <input type="number" placeholder="Enter amount to Withdraw" value={withsubmit} onChange={setwithsubmit}/> <br />
            <br /> 
            <button onClick={withsubmitfun}>Submit</button>
            <br /><br />

            <h4 id="withnotification">Updated Amount:{newwith}</h4>
            </div>

        </div>
        
        </>
    );
}

export default Addwithdrawfun

