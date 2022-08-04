import { useEffect, useState } from 'react';
import './App.css'
import Header from './Header/Header';
import MainComponent from './MainComponent/MainComponent';


function App() {
  const [jobs , setJobs] = useState([])

  useEffect(() =>{
    fetch('http://localhost:9292//all')
    .then(res => res.json())
    .then(data => {
      setJobs(data)
      console.log(data)
    })
  },[])

  let idCounter = jobs.length

  function newJob(job){
    job.id = idCounter+=1
    console.log(job.id)
    setJobs([...jobs, job])
  }

  return (
    <div id = "App">
      <Header/>
      <MainComponent  jobsList = {jobs} newJob= {newJob} />
    </div>
  );
}

export default App;
