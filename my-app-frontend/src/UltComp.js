import { useEffect, useState } from "react";
import "./UltComp.css";
import Header from "./Header/Header";
import MainComponent from "./MainComponent/MainComponent";

function UltComp({user,setUser, setLoggedIn, loggedIn}) {
  const [jobs, setJobs] = useState([]);
  // let userId = user[0].id
  // localStorage.setItem("id", `${userId}`);
  const storedId = localStorage.getItem('id')
  console.log(storedId)

  useEffect(() => {

    fetch(`http://localhost:9292/user/jobs/${storedId}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  },[storedId]);

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
        user = {user}
        jobsList={jobs}
        setJobsList={setJobs}
        newJob={newJob}
        deleteItem={deleteRow}
      />
    </div>
  );
}

export default UltComp;
