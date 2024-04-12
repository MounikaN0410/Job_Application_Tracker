
import { MdTipsAndUpdates } from "react-icons/md";import React from 'react'
import {useState,useEffect} from 'react';
import '../styles/Styles.css';
import { MdAssignmentAdd } from "react-icons/md";
import InputBox from './InputBox'
import InputBoxDate from './InputBoxDate'
import InputSelectBox from'./InputSelectBox'
import axios from 'axios';


export default function UpdateJob(props) {
    const [company,setCompany]=useState(`${props.job.company}`);
    const [jobRole,setJobRole]=useState(`${props.job.jobrole}`);
    const [dateapplied,setDateapplied]=useState(`${props.job.dateapplied}`);
    const [jobstatus,setJobstatus]=useState(`${props.job.jobstatus}`);
    const [notes,setNotes]=useState(`${props.job.notes}`);
    console.log(props.job.company)
    console.log(props.job.dateapplied)
    console.log(props.job.jobstatus)

    // const handleCancel=()=>{

    // }
    

    const handleUpdate= async(e)=>{
        

        console.log("hiii")
        e.preventDefault();
        
        try{
        const data={
            company:company,
            jobrole:jobRole,
            dateapplied:dateapplied,
            jobstatus:jobstatus,
            notes:notes
        };
        
        console.log(data);
        const response = await axios.patch(`http://localhost:8080/crud/${props.job._id}`, data);
        console.log("response_body"+response)
        if (response.status===200) { 
            console.log(response.data);
            
            } else {
            console.log(response.data.message);
            return;
            }
        }
        
        catch(error){
            console.log("Error while Updating job");
        }
        
    
    }



    

    
    

    return (
    <div className='add-job-container'>
        <div className='icon-text-wrapper' style={{justifyContent:'center'}}>
            <MdTipsAndUpdates className='icon-big'/>
            <h1>Update Application</h1>
        </div>
        
        <InputBox placeholder="Company Name" value={company} parent_function={setCompany}/>
        <InputBox placeholder="Role" value={jobRole} parent_function={setJobRole}/>
        <InputBoxDate value={dateapplied} parent_function={setDateapplied}/>
        <InputSelectBox value={jobstatus} parent_function={setJobstatus} />
        <textarea 
            className="Input-box-style"
            placeholder='Notes'
            value={notes}
            onChange={(event)=>setNotes(event.target.value)}/>
        <button type='button'>Cancel</button>
        <button type='button' onClick={handleUpdate}>Update Job</button>
        
    </div>
  )
}
