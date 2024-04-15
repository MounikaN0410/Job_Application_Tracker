import {React,useState} from 'react'
import Joblogo from '../assets/jobtrackerlogo.png'
import SearchBar from './SearchBar';
import SelectFilter from './SelectFilter';
import '../styles/Styles.css';



export default function Navbar({ searchText, setSearchText, filterValue, setFilterValue }) {
  return (
    <div className='nav-bar'>
      <div className='logo-container'>
        <img className='logo-img' src={Joblogo} alt="logo"/>
      </div>
      <div className='search-and-filter'>
        <SelectFilter value={filterValue} onChange={setFilterValue} />
        <SearchBar value={searchText} onChange={setSearchText} />
      </div>
      
   

    </div>
  )
}
