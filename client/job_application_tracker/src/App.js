import logo from './logo.svg';
import './App.css';
import AddJob from './components/AddJob'
import JobCard from './components/JobCard'
import axios from 'axios'
import { useState,useEffect } from 'react';

function App() {
  const [jobs,setJobs]=useState([]);
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
      <AddJob/>
      {jobs.map((i)=>{
        return <JobCard company={i.company} jobrole={i.jobrole}/>
      })}
      
      
    </div>
  );
}

export default App;
