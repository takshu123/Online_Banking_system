const express=require("express");
const app=express();
const PORT=5000;
const cors =require('cors');
const mongoose=require("mongoose")
const bodyparse=require('body-parser')
// const loginRoute=require("./routes/Login")
app.use(cors());
app.use(bodyparse.json());


mongoose.connect('mongodb://127.0.0.1:27017/BankingDb');


const createuser=new mongoose.Schema({
    firstname:String,
    middlename:String,
    lastname:String,
gender:String,
mobileno:Number,
email:String,
dob:Date,
address:String,
acctype:String,
accno:Number,
amount:Number,

})
const createmodel=mongoose.model('User',createuser);

const loginschema=new mongoose.Schema({
    name:String,
    password:Number,
}
)
const loginmodel=mongoose.model('Admin',loginschema);
app.get('/login',(req,res)=>{
    loginmodel.find()
    .then((users)=>{
        if(!users){
            return res.status(404).json({message:'No employess found'})

        }
        console.log('Retrived data:',users)
        res.json(users)
    })
    .catch((error)=> res.json(error));

})


app.post('/Create',(req,res)=>{

    const {firstname,middlename,lastname,gender,mobileno,email,dob,address,acctype,accno,amount}=req.body;

    createmodel.create({firstname,middlename,lastname,gender,mobileno,email,dob,address,acctype,accno,amount})
    .then((createuser)=>{
       console.log(mobileno)
        console.log('Created user:',createuser)
        res.json(createuser);
    })
    .catch(error=>{
        res.status(500).json({message:'Internal server not responding'})
    })


})
app.get('/Viewcusbyac/:accountno',(req,res)=>{
const {accountno}=req.params;
createmodel.find({accno :`${accountno}`})
.then((response)=>{
    
    res.json(response)
})
.catch((error)=>{
    res.send(error)
})
})

app.get('/Addwithdrawfun/:accountno',(req,res)=>{
    const {accountno}=req.params;
    createmodel.find({accno :`${accountno}`})
.then((response)=>{
    
    res.json(response)
})
.catch((error)=>{
    res.send(accountno)
})
})
app.put("/Add/:accountno",(req,res)=>{
    const {accountno}=req.params;
    const {amount}=req.body;
    console.log(amount)
    
    createmodel.findOneAndUpdate({accno:accountno},{amount})
    .then((updateuser)=>{
        if(!updateuser){
            return res.status(404).json({message:"No user found"})
        }
        console.log("Amount added",amount)
        res.json(updateuser)
    })
    .catch(error=>{
        res.status(500);
    })
})
app.put("/With/:accountno",(req,res)=>{
    const {accountno}=req.params;
    const {amount}=req.body;
    console.log(amount)
    
    createmodel.findOneAndUpdate({accno:accountno},{amount})
    .then((updateuser)=>{
        if(!updateuser){
            return res.status(404).json({message:"No user found"})
        }
        console.log("Amount added",amount)
        res.json(updateuser)
    })
    .catch(error=>{
        res.status(500);
    })
})

app.delete(`/:accountnumber`,(req,res)=>{
    const {accountnumber}=req.params;
    createmodel.findOneAndDelete({accno : accountnumber})
    .then((response)=>{
        console.log("Account is deleted")
        res.json(response);
    })
    .catch(error=>{
        res.json(error)
    })
})

app.get(`/:senderacc`,(req,res)=>{
    const {senderacc}=req.params;
    createmodel.find({accno :`${senderacc}`})
    .then((response)=>{
        console.log(response)
        res.json(response)
    })
    .catch((error)=>{
        res.json(error)
    })

})

app.get(`/:recieveracc`,(req,res)=>{
    const {recieveracc}=req.params;
    createmodel.find({accno :`${recieveracc}`})
    .then((response)=>{
        console.log(response)
        res.json(response)
    })
    .catch((error)=>{
        res.json(error)
    })

})
app.put(`/updatesender/:senderacc`,(req,res)=>{
    const {senderacc}=req.params;
    const {updatedSamount}=req.body;
    console.log(senderacc)
    console.log(updatedSamount)
    let amount=updatedSamount;
    createmodel.findOneAndUpdate({accno:senderacc},{amount})
    .then((updateuser)=>{
        if(!updateuser){
            return res.status(404).json({message:"No user found"})
        }
        console.log("Amount added",amount)
        res.json(updateuser)
    })
    .catch(error=>{
        res.status(500);
    })
})
app.put(`/updatereciever/:recieveracc`,(req,res)=>{
    const {recieveracc}=req.params;
    const {updatedRamount}=req.body;
    console.log(recieveracc)
    console.log(updatedRamount)
    let amount=updatedRamount;
    createmodel.findOneAndUpdate({accno:recieveracc},{amount})
    .then((updateuser)=>{
        if(!updateuser){
            return res.status(404).json({message:"No user found"})
        }
        console.log("Amount added",amount)
        res.json(updateuser)
    })
    .catch(error=>{
        res.status(500);
    })
})



app.listen(PORT)
