import { useEffect, useState } from 'react';
import './App.css'
import Header from './Header/Header';
import MainComponent from './MainComponent/MainComponent';


function App() {
  const [jobs , setJobs] = useState([])

  useEffect(() =>{
    fetch('http://localhost:9292/all')
    .then(res => res.json())
    .then(data => {
      setJobs(data)
    })
  },[])

  let idCounter = jobs.length

  function newJob(job){
    job.id = idCounter+=1
    console.log(job.id)
    setJobs([...jobs, job])
  }

  function deleteRow(id){
    fetch(`http://localhost:9292/delete/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(() => console.log('deleted'))
  
    const newJobArr = jobs.filter((job) => job.id !== id);
    setJobs(newJobArr)

  }

  return (
    <div id = "App">
      <Header/>
      <MainComponent  jobsList = {jobs} newJob= {newJob}  deleteItem = {deleteRow}/>
    </div>
  );
}

export default App;
