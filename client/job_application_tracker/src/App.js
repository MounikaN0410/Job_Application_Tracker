import logo from './logo.svg';
import './App.css';
import AddJob from './components/AddJob'
import JobCard from './components/JobCard'
import Navbar from './components/Navbar';
import axios from 'axios'
import { useState,useEffect } from 'react';

function App() {
  const [jobs,setJobs]=useState([]);
  const [searchText,setSearchText]=useState("");
  const [filterValue,setFilterValue]=useState("");
  const [showUpdateForm,setShowUpdateForm]=useState("");

  const handleSearch=(text)=>{
    setSearchText(text)
    fetchJobs(text, filterValue);

  }
  const handleFilterChange = (value) => {
    setFilterValue(value);
    fetchJobs(searchText, value);
  };
  

  
  const fetchJobs=async ()=>{
    try {
      console.log("In here")
      const response = await axios.get(`http://localhost:8080/crud?${filterValue}/${searchText}`);
      setJobs(response.data);
      

      // console.log(jobs)
    }catch(error){
      console.log('Could not fetch jobs')
    }
  };

  useEffect(() => {
    fetchJobs(searchText, filterValue);
  }, [searchText, filterValue]);
    

    
  // console.log(jobs)

  // useEffect(() => {
  //   console.log(jobs);
  // },[jobs]);

  

  return (
    <div className="App">
      <Navbar searchText={searchText} setSearchText={setSearchText} filterValue={filterValue} setFilterValue={setFilterValue}/>
      <AddJob/>
      {jobs.map((i)=>{
        return <JobCard job={i}/>
      })}
      
      
    </div>
  );
}

export default App;
