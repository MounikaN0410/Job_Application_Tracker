const mongoose=require("mongoose")

const JobSchema=new mongoose.Schema(
    {
        company:{
            type:String,
            required:true,
        },

        jobrole:{
            type:String,
            required:true,
        },
        dateapplied:{
            type:Date
        },
        jobstatus:{
            type:String,
            enum:['Rejected','Online Assessment','Interview','Selected','In Process']
        },
        notes:{
            type:[String]

        }
    }
)
module.exports=mongoose.model('jobs',JobSchema)