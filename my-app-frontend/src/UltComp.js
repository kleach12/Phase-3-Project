import { useEffect, useState } from "react";
import "./UltComp.css";
import Header from "./Header/Header";
import MainComponent from "./MainComponent/MainComponent";

function UltComp() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/all")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  function newJob(job) {
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

export default UltComp;
