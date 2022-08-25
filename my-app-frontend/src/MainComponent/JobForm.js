import React, { useState } from "react";
import "./JobForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

function JobForm({ newJob }) {
  const [formOpen, setFormOpen] = useState(false);
  const [isPosition, setPosition] = useState("");
  const [isCompany, setCompany] = useState("");
  const [isCat, setCat] = useState("choose");
  const [isStatus, setStatus] = useState("choose");
  const [isDate, setDate] = useState("");

  function handlePostion(e) {
    setPosition(e.target.value);
  }

  function handleCompany(e) {
    setCompany(e.target.value);
  }

  function handleStatus(e) {
    const selectedStatus = e.target.value;
    setStatus(selectedStatus);
  }
  function handleType(e) {
    const selectedCat = e.target.value;
    setCat(selectedCat);
    console.log(selectedCat);
  }

  function handleDate(e) {
    const selectedDate = e.target.value;
    setDate(selectedDate);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      position: isPosition,
      company: isCompany,
      status: isStatus,
      cat: isCat,
      applieddate: isDate,
      user_id: 1,
    };
    fetch("http://localhost:9292/job", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        newJob(data);
      });
    setFormOpen(false);
    setPosition("");
    setCompany("");
    setStatus("choose");
    setDate("");
    setCat("choose");
  }

  let handleOpenForm = () => {
    setFormOpen(!formOpen);
  };

  return (
    <div className="form">
      <FontAwesomeIcon
        icon={faSquarePlus}
        className="add"
        onClick={handleOpenForm}
      />{" "}
      <span> Add a Job</span>
      {formOpen ? (
        <form onSubmit={handleSubmit} className="active_form">
          <label>Position</label>
          <input
            type="text"
            id="position"
            onChange={handlePostion}
            value={isPosition}
          />
          <label>Company </label>
          <input
            type="text"
            id="position"
            onChange={handleCompany}
            value={isCompany}
          />
          <label> Type </label>
          <select id="status" onChange={handleType} value={isCat}>
            <option value="choose"> Choose Type</option>
            <option value="MANGA"> MANGA</option>
            <option value="MidSize"> MidSize</option>
            <option value="FinTech"> FinTech</option>
            <option value="BioTech"> BioTech</option>
            <option value="Startup"> Startup</option>
          </select>
          <label>Status </label>
          <select id="status" onChange={handleStatus} value={isStatus}>
            <option value="choose"> Choose Status</option>
            <option value="Apply"> Apply</option>
            <option value="Applied"> Applied</option>
            <option value="Contacted"> Contacted</option>
            <option value="Interview"> Interview</option>
            <option value="Accepted"> Accepted</option>
            <option value="Rejected"> Rejected</option>
          </select>
          <label> Date </label>
          <input
            type="date"
            id="position"
            onChange={handleDate}
            value={isDate}
          />
          <input id="submit" type="submit" />
        </form>
      ) : null}
    </div>
  );
}

export default JobForm;
