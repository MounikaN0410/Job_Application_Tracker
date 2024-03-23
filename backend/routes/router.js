const express=require("express");
const Jobs=require("../models/jobs")


const router=express.Router()

router.get('/',async (req,res)=>{
    // const {company,jobrole,dateapplied,status,notes}=req.body
    // const company=req.params.company
    
    try{
        const jobs=await Jobs.find({})
        res.status(200).json({
            jobs:jobs
        })
    }catch(err){
        res.status(400).json({
            message:"Could not fetch all jobs"
        })
    }

})



    

router.post('/',async (req,res)=>{
    const {company,jobrole,dateapplied,jobstatus,notes}=req.body


    const newJob={
        company,
        jobrole,
        dateapplied,
        jobstatus,
        notes
    }
    // Jobs.create(newJob).then(result=>{
    //     console.log(result)
    //     res.status(200).json(result)
    // }

    // ).catch(err=>{
    //     res.status(500).json({
    //         message: 'Could not add job'
    //     }
    //     )
    // }
    // )
    try{
        const newJobdetails=Jobs.create(newJob)
        return res.status(200).json(newJob)

    }
    catch(err){
        res.status(400).json({
            error:"Could not Add job"
        })
    }
    
    
    })


router.patch('/',(req,res,next)=>{
    res.status(200).json({
        message:'This is patch request'
    })
})


router.delete('/:company',async (req,res)=>{
    const company_name=req.params.company
    const req_company=await Jobs.find({company:company_name})
    if (req_company){
        console.log(req_company)
        await Jobs.deleteOne({company:company_name})
        res.status(200).json(req_company)
    }
    else{
        res.status(404).json({
            message:"Company not found"
        })
    }
})

module.exports=router;