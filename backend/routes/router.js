const express=require("express");
const mongoose=require("mongoose")
const Jobs=require("../models/jobs")


const router=express.Router()
// Get all Added Jobs

router.get('/',async (req,res)=>{
    // const {company,jobrole,dateapplied,status,notes}=req.body
    // const company=req.params.company
    
    try{
        const jobs=await Jobs.find({}).sort({dateapplied:1})
        res.status(200).json(jobs)
    }catch(err){
        res.status(400).json({
            message:"Could not fetch all jobs"
        })
    }

})

//Filter by Company Name
router.get('/company/:companyName',async (req,res)=>{
    const req_company=req.params.companyName;
    
    try{
        const jobs=await Jobs.find({company:req_company}).sort({dateapplied:1})
        if (jobs.length>=0){
            console.log(jobs)
            res.status(200).json(jobs)
        }else{
            res.status(204).json({
                message:"Company not found in Jobs"
            })
        }
        
    }catch(err){
        res.status(400).json({
            message:"Could not fetch jobs"
        })
    }

})

//Filter by Status
router.get('/status/:jobStatus',async (req,res)=>{
    const req_status=req.params.jobStatus;
    
    try{
        const jobs=await Jobs.find({jobstatus:req_status}).sort({dateapplied:1})
        if (jobs.length>=0){
            console.log(jobs)
            res.status(200).json(jobs)
        }else{
            res.status(204).json({
                message:`Jobs with ${req_status} not found`
            })
        }
        
    }catch(err){
        res.status(400).json({
            message:"Could not fetch jobs"
        })
    }

})

//Filter by Role

router.get('/role/:jobRole',async (req,res)=>{
    const req_role=req.params.jobRole;
    
    try{
        const jobs=await Jobs.find({jobrole:req_role}).sort({dateapplied:1})
        if (jobs.length>=0){
            console.log(jobs)
            res.status(200).json(jobs)
        }else{
            res.status(204).json({
                message:`Jobs with ${req_role} not found`
            })
        }
        
    }catch(err){
        res.status(400).json({
            message:"Could not fetch jobs"
        })
    }

})

// Add New Job

router.post('/',async (req,res)=>{
    const {company,jobrole,dateapplied,jobstatus,notes}=req.body
    // const dateapplied=new Date()


    

    const newJob={
        _id: new mongoose.Types.ObjectId(),
        company,
        jobrole,
        dateapplied,
        jobstatus,
        notes
    }
    /*console.log(newJob);*/
    try{
        console.log('In here');
        console.log(newJob);
        const newJobdetails=await Jobs.create(newJob)
        return res.status(200).json(newJob)

    }
    catch(err){
        console.log("No job added")
        res.status(400).json({
            error:"Could not Add job"
        })
    }
    
    
    })


// Update Job

router.patch('/:id',async(req,res)=>{
    const changes=req.body
    const patch_id=req.params.id
    const req_id=await Jobs.find({_id:patch_id})
    patchOps={};
    console.log("changes"+changes)

    for (const ops in changes){

        patchOps[ops]= changes[ops]
    }
    console.log(req_id)
    console.log(patchOps)
    if (req_id.length>0){
        try{
            await Jobs.updateOne({_id:patch_id},{$set:patchOps})
            res.status(200).json(req_id)
        }catch(err){
            res.status(400).json({
                message:"error"
            })
        }
    }else{
        res.status(404).json({
            message:"Not found"
        })
    }

})

// Delete Job
router.delete('/:id',async (req,res)=>{
    const del_id=req.params.id
    const req_job=await Jobs.find({_id:del_id})
    console.log(req_job)
    if (req_job.length>0){
        
        await Jobs.deleteOne({_id:del_id})
        res.status(200).json({
            message:"Job deleted"
        }
        )
    }
    else{
        res.status(404).json({
            message:"Company not found"
        })
    }
})

module.exports=router;