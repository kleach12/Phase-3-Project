import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import MainComponent from "./MainComponent/MainComponent";

function App() {
  const [jobs, setJobs] = useState([]);
  const [idNum, setID] = useState(0);

  useEffect(() => {
    fetch("http://localhost:9292/all")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setID(data[data.length - 1].id);
      });
  }, []);

  console.log(idNum);
  // need to figure out how I can make this the last job ID, length does not work because the ID's are not always equal to length. THis could possibly be a backend problem.
  // let idCounter = jobs.length;

  // let lastObj = jobs[jobs.length - 1]
  // // console.log(lastObj.id)
  // if(idNum === undefined){
  //   setID(1)
  // }else{
  //   setID(idNum + 1)
  // }

  function newJob(job) {
    if (idNum === undefined) {
      setID(1);
    } else {
      job.id = idNum + 1;
    }

    setID(idNum + 1);
    setJobs([...jobs, job]);
  }

  function deleteRow(id) {
    fetch(`http://localhost:9292/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => console.log("deleted"));

    const newJobArr = jobs.filter((job) => job.id !== id);
    setJobs(newJobArr);
    setID(idNum - 1);
  }

  function newJob(job) {
    if (idNum === undefined) {
      setID(1);
    } else {
      job.id = idNum + 1;
    }

    setID(idNum + 1);
    setJobs([...jobs, job]);
  }

  return (
    <div id="App">
      <Header />
      <MainComponent
        jobsList={jobs}
        setJobsList={setJobs}
        newJob={newJob}
        deleteItem={deleteRow}
      />
    </div>
  );
}

export default App;
