import { useEffect, useState } from "react";
import "./UltComp.css";
import Header from "./Header/Header";
import MainComponent from "./MainComponent/MainComponent";
import { Navigate } from "react-router-dom";

function UltComp({ user, setUser, setLoggedIn, loggedIn }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/user/jobs/${localStorage.getItem("id")}`)
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

  if (loggedIn === false) {
    return <Navigate replace to="/" />;
  }

  return (
    <div id="App">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <MainComponent
        user={user}
        jobsList={jobs}
        setJobsList={setJobs}
        newJob={newJob}
        deleteItem={deleteRow}
      />
    </div>
  );
}

export default UltComp;
