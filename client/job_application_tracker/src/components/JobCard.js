import React from 'react';
import { useState } from 'react';
import UpdateJob from './UpdateJob';

import axios from 'axios';

import '../styles/Styles.css';

import { RiDeleteBin5Fill } from "react-icons/ri";


export default function JobCard(props) {
    console.log(props)
    
    const [updateJob,setUpdateJob]=useState(false)
    const [company,setCompany]=`${props.company}`;
    const [jobRole,setJobRole]=`${props.jobRole}`;
    const [dateapplied,setDateapplied]=`${props.dateapplied}`;
    const [jobstatus,setJobstatus]=`${props.jobstatus}`;
    const [notes,setNotes]=`${props.notes}`;
    

    const handleUpdatejob= ()=>{
        setUpdateJob(true);
    }

    //     console.log("hiii")
    //     e.preventDefault();
        
    //     try{
    //     const data={
    //         company:company,
    //         jobrole:jobRole,
    //         dateapplied:dateapplied,
    //         jobstatus:jobstatus,
    //         notes:notes
    //     };
      
    //     console.log(data);
    //     const response = await axios.patch(`http://localhost:8080/crud/${props.job._id}`, data);
    //     console.log("response_body"+response)
    //     if (response.status===200) { 
    //         console.log(response.data);
            
    //       } else {
    //         console.log(response.data.message);
    //         return;
    //       }
    //     }
      
    //     catch(error){
    //         console.log("Error while Updating job");
    //     }
    //   }  
    
    const handleJobDelete= async()=>{
        try{
            
            await axios.delete(`http://localhost:8080/crud/${props.job._id}`)
            console.log("Deleted Job Successfully")
        }
        catch(error){
            console.log("Coul'nt Delete Job")
        }
    }
  return (
    <div>

   
   
        <div className='card'>
            <div className='cardimgContainer'>

            </div>
            <div className='jobdata'>
                <span className='main-text'>{props.job.company}</span>
                <span className='grey-text'>{props.job.jobrole}</span>
                <span className='grey-text'>{props.job.jobstatus}</span>
                <span className='grey-text'>{props.job.dateapplied}</span>
                <span className='grey-text'>{props.job.notes}</span>

            </div>
            <div className='jobstatus'>

            </div>
            <div className='jobactions'>
                <button className='primary-btn' onClick={handleUpdatejob}>Update</button>
                <RiDeleteBin5Fill onClick={handleJobDelete}/>
            </div>
        
        </div>

        {updateJob && <UpdateJob job={props.job}/>}
    </div>
   
  )
}

