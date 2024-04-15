import React, { useState } from 'react'
import '../styles/Styles.css';
import InputBox from './InputBox';

export default function SearchBar({value,onChange}) {

  return (
    <div className='search-bar'>
        <InputBox 
            placeholder='Search....'
            value={value}
            onChange={(e) => onChange(e.target.value)}
            />
        
       

      
    </div>
  )
}
