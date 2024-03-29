import React from 'react';
import '../styles/Styles.css';

import { RiDeleteBin5Fill } from "react-icons/ri";

export default function JobCard(props) {
    const handleUpdate=()=>{

    }
  return (
    <div className='card'>
        <div className='cardimgContainer'>

        </div>
        <div className='jobdata'>
            <span className='main-text'>{props.company}</span>
            <span className='grey-text'>{props.jobrole}</span>
            <span className='grey-text'>{props.status}</span>
            <span className='grey-text'>{props.dateapplied}</span>
            <span className='grey-text'>{props.notes}</span>

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
