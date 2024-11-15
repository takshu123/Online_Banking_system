import React from "react";
import "./Sendmoney.css"
import axios from "axios";
import { useState } from "react";
const Sendmoney=()=>{

let [senderacc, setSacc]=useState("");
let [recieveracc, setRacc]=useState("");
let [sendername,setSname]=useState("");
let [recievername,setRname]=useState("");
let [sendingamount,setAmount]=useState("");

let changeaccs=(e)=>{
  setSacc(e.target.value);
}

let changeaccr=(e)=>{
    setRacc(e.target.value);
  }
  
let changenames=(e)=>{
    setSname(e.target.value);
  }
  
let changenamer=(e)=>{
    setRname(e.target.value);
  }
  
let changeamount=(e)=>{
    setAmount(e.target.value);
  }


let [senderdata,setSdata]=useState([]);
let [recieverdata,setRdata]=useState([]);

// for table these variable are used in table 
let [tablesname,setSfirstname]=useState("");
let [tablername,setRfirstname]=useState("");
let [amountdebit,setDebit]=useState("");
let [amountcredit,setCredit]=useState("");
let [tablesenderamount,setTsamount]=useState("");
let [tablerecieveramount,setTramount]=useState("");

let date=Date();
    let sendhandler=(e)=>{
        e.preventDefault();
        axios.get(`http://localhost:5000/${senderacc}`)
        .then((response)=>{
            setSdata(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        axios.get(`http://localhost:5000/${recieveracc}`)
        .then((response)=>{
            setRdata(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        
     
        


        if(senderdata[0].firstname==sendername && recieverdata[0].firstname==recievername && senderdata[0].amount>=sendingamount){
            let responseSamount=senderdata[0].amount;
            let responseRamount=recieverdata[0].amount;
            
            let updatedSamount=responseSamount-sendingamount;
            console.log(updatedSamount)
            let updatedRamount=Number(responseRamount)+Number(sendingamount);
            let senderpayload={updatedSamount};
            let recieverpayload={updatedRamount};

            setSfirstname(senderdata[0].firstname)
            setRfirstname(recieverdata[0].firstname)
            setDebit(sendingamount)
            setCredit(sendingamount)
            setTsamount(updatedSamount)
            setTramount(updatedRamount)

            console.log(updatedRamount)
           
            axios.put(`http://localhost:5000/updatesender/${senderacc}`,senderpayload)
            
            .then((response)=>{
                console.log(response)
            })
            .catch(error=>{
               console.log("shut up")
            })

            axios.put(`http://localhost:5000/updatereciever/${recieveracc}`,recieverpayload)
            
            .then((response)=>{
                console.log(response)
            })
            .catch(error=>{
               console.log("shut up")
            })
            document.querySelector(".summary").style.display="block"
            document.querySelector(".summary").style.display="flex"
        }
         else{
            document.querySelector(".wrongsummary").style.display="block"
         }   
            
            

        
      
       
        
        
   
            

        
    }
   
    

    return(
        <>
        <div className="Sendmain">
            <p>Send Money</p>
            <br /> <br />
            </div>
    <div className="sendmoneyfun">
            <div className="sender">
    <p>Sender's Acc no: <input type="number" value={senderacc} onChange={changeaccs} />  </p> <br />
    <input type="text" placeholder="Enter Sender's Name" value={sendername} onChange={changenames} />

            </div>

            <div className="receiver">
            <p>Reciever Acc no : <input type="number" value={recieveracc} onChange={changeaccr} /> </p>  <br />
            <input type="text" placeholder="Enter Reciever's Name" value={recievername} onChange={changenamer} />

            </div> 
        </div> <br /> <br />
        <div className="sendingamount">
            <input type="text" placeholder="Enter amount" value={sendingamount} onChange={changeamount}/> <br /> <br />
            <button onClick={sendhandler}>Send</button>
        </div>

        <div className="summary">
            <table>
                <tr className="summaryheading">
                    <th>Sender</th>
                    <th>Date</th>
                    <th>Amount Debit</th>
                    <th>Total Amount</th>
                </tr>
                <tr>
                    <td>{tablesname}</td>
                    <td>{date}</td>
                    <td>{amountdebit}</td>
                      <td>{tablesenderamount}</td>  

                </tr>
            </table>
            <table>
                <tr>
                    <th>Reciever</th>
                    <th>Date</th>
                    <th>Amount Credit</th>
                    <th>Total Amount</th>
                </tr>
                <tr>
                    <td>{tablername}</td>
                    <td>{date}</td>
                    <td>{amountcredit}</td>
                      <td>{tablerecieveramount}</td>  

                </tr>
            </table>
        </div>
        <div className="wrongsummary">
            <h2>Invalid Entry !</h2>
        </div>
        </>

    );
}

export default Sendmoney
