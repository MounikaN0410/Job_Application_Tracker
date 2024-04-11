import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import '../styles/Styles.css';

import { RiDeleteBin5Fill } from "react-icons/ri";


export default function JobCard(props) {
    
    // const handleJobDelete= async(id)=>{
    //     console.log(id)
       
    //     try{
    //         await axios.delete(`http://localhost:8080/crud/${id}`)
    //         console.log("Deleted Job Successfully")
    //     }
    //     catch(error){
    //         console.log("Coul'nt Delete Job")
    //     }
    // }
  return (
    <div className='card'>
        <div className='cardimgContainer'>

        </div>
        <div className='jobdata'>
            <span className='main-text'>{props.job.company}</span>
            <span className='grey-text'>{props.job.jobrole}</span>
            <span className='grey-text'>{props.job.status}</span>
            <span className='grey-text'>{props.job.dateapplied}</span>
            <span className='grey-text'>{props.job.notes}</span>

        </div>
        <div className='jobstatus'>

        </div>
        <div className='jobactions'>
            <button>Update</button>
            <RiDeleteBin5Fill/>
        </div>
      
    </div>
  )
}
