const express=require('express')
const mongoose=require("mongoose")
const morgan=require("morgan")//To log all the requests
const cors=require("cors");
const process=require('./nodemon.json')

const port=8080;


const app=express()
const Operations=require('./routes/router')



app.use(morgan('dev'))///to log all previous requests on console
app.use(express.json());
app.use(cors());


mongoose.connect('mongodb+srv://nmounika0410:'+process.env.mongo_pass+'@cluster0.p8hcxiq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
   
}).then((x)=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log("Error Connecting to Mongo DB")
    
});

app.use('/crud',Operations)


app.listen(port,()=>{
    console.log("Server is running, listening on port:"+port)
})



