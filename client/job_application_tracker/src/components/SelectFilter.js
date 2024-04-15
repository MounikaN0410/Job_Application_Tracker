import React from 'react'
import SearchBar from './SearchBar';

export default function SelectFilter({ value, onChange }) {
    // const [searchType,setSearchType]=useState('company');


  return (
    
    <div>
        <select
            className="input-box-style"
            type="select"
            value={value}
            onChange={(event) => onChange(event.target.value)} 
        >
          <option value="">Search By</option>
          <option value="company">Company</option>
          <option value="role">Job role</option>
          <option value="status">Status</option>
        </select>

        
    </div>
  )
}
