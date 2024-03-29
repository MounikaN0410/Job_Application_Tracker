import React from 'react'

export default function InputSelectBox(props) {
  return (
    <div>
        <select
            className="input-box-style"
            type="select"
            value={props.value}
            onChange={(event) => {props.parent_function(event.target.value)}}    
        >
          <option value="">Select Status</option>
          <option value="Rejected">Rejected</option>
          <option value="Online Assessment">Online Assessment</option>
          <option value="Interview">Interview</option>
          <option value="Selected">Selected</option>
          <option value="In Process">In Process</option>
        </select>
       



    </div>
  )
}
