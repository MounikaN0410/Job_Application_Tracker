import React from 'react'
import {useState,useEffect} from 'react';
import '../styles/Styles.css';
import { MdAssignmentAdd } from "react-icons/md";
import InputBox from './InputBox'
import InputBoxDate from './InputBoxDate'
import InputSelectBox from'./InputSelectBox'
import axios from 'axios';

export default function AddJob() {

  const [company,setCompany]=useState('')
  const [jobRole,setJobRole]=useState('')
  const [dateapplied,setDateapplied]=useState('')
  const [jobstatus,setJobstatus]=useState('')
  const [notes,setNotes]=useState('')

//   async function handleAddjob(){
//     console.log(company)
    
//     await fetch("http://localhost:8080/crud", {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json' // Specify content type if sending JSON data
//           },
        
//         body: JSON.stringify({
//           company:company,
//           jobrole:jobRole,
//           dateapplied:dateapplied,
//           jobstatus:jobstatus,
//           notes:[notes]
//       })
     
//     }).then((response) => console.log("job added"))
//     .catch((error) => console.error(error));
        
// }


const handleAddjob= async(e)=>{
  console.log("hiii")
  e.preventDefault();
  
  try{
  const data={
      company:company,
      jobrole:jobRole,
      dateapplied:dateapplied,
      jobstatus,
      notes
  };

  console.log(data);
  const response = await axios.post('http://localhost:8080/crud', data);
  console.log("response_body"+response)
  if (response.status===200) { 
      console.log(response.data);
      
    } else {
      console.log(response.data.message);
      return;
    }
  }

  catch(error){
      console.log("Error");
  }
}  



  return (
    <div>
        <div className='add-job-container'>
            <div className='icon-text-wrapper' style={{justifyContent:'center'}}>
                <MdAssignmentAdd className='icon-big'/>
                <h1>Add Application</h1>
            </div>
            <div className='input-properties'>
              <InputBox placeholder="Company Name"  parent_function={setCompany}/>
              <InputBox placeholder="Role" parent_function={setJobRole}/>
              <InputBoxDate parent_function={setDateapplied}/>
              <InputSelectBox parent_function={setJobstatus} />
              <textarea 
                  className="Input-box-style"
                  placeholder='Notes'
                  value={notes}
                  onChange={(event)=>setNotes(event.target.value)}/>
            </div>
            <div style={{display:"flex", justifyContent:'center'}}>
              <button className='primary-btn' type='button'>Cancel</button>
              <button className='add-job-btn' type='button' onClick={handleAddjob}>Add Job</button>
            </div>
           
            
        </div>
    </div>
  )
}



