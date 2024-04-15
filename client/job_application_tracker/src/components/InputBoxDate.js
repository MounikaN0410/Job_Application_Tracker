import React from 'react'

export default function InputBoxDate(props) {
  return (
    <div>
        <input
            className='input-box-style'
            type='date'
            placeholder={props.placeholder}

            value={props.value}
            onChange={(event)=>{props.parent_function(event.target.value)}}
            // style={{
            //     border: "2px solid gray",
            //     borderRadius: "5px",
            //     padding: "10px",
            //     width: "320px",
            //     fullWidth: true,
            //     outline: "none",
            // }}
          
        />
      
    </div>
  )
}
