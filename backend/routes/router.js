const express=require("express");
const mongoose=require("mongoose")
const Jobs=require("../models/jobs")


const router=express.Router()

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