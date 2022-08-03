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


  return (
    <div id = "App">
      <Header/>
      <MainComponent  jobsList = {jobs}/>
    </div>
  );
}

export default App;
