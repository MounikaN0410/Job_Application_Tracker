import logo from './logo.svg';
import './App.css';
import AddJob from './components/AddJob'
import JobCard from './components/JobCard'
import Navbar from './components/Navbar';
import axios from 'axios'
import { useState,useEffect } from 'react';

function App() {
  const [jobs,setJobs]=useState([]);
  const [showUpdateForm,setShowUpdateForm]=useState("");
  
  useEffect(()=>{
    const fetchJobs=async ()=>{
      try {
        console.log("In here")
        const response = await axios.get('http://localhost:8080/crud');
        setJobs(response.data);

        // console.log(jobs)
      }catch(error){
        console.log('Could not fetch jobs')
      }
    };
    fetchJobs();
  },[])

  useEffect(() => {
    console.log(jobs);
  },[jobs]);

  

  return (
    <div className="App">
      <Navbar/>
      <AddJob/>
      {jobs.map((i)=>{
        return <JobCard job={i}/>
      })}
      
      
    </div>
  );
}

export default App;
