import React,{useState} from 'react';
import './JobForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

function JobForm({newJob}){
  const [formOpen, setFormOpen] = useState(false)
  const [isPosition, setPosition ] = useState("")
  const [isCompany, setCompany] = useState("")
  const [isStatus, setStatus] = useState("choose")
  const [isDate, setDate] = useState("")


  function handlePostion(e){
    setPosition(e.target.value)
    console.log(isPosition)
  }

  function handleCompany(e){
    setCompany(e.target.value)
    console.log(isCompany)
  }

  function handleStatus(e){
    const selectedStatus = e.target.value
    setStatus(selectedStatus)
  }

  function handleDate(e){
    const selectedDate = e.target.value
    setDate(selectedDate)
    console.log(typeof(isDate))
  }

  function handleSubmit(e){
    console.log('clicked')
    e.preventDefault();
    const formData = {
      position: isPosition,
      company: isCompany,
      status: isStatus,
      applieddate: isDate,
      user_id:1
    }
    fetch("http://localhost:9292/job",{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify(formData)
      })
      newJob(formData)
      setPosition("")
      setCompany("")
      setStatus("choose")
      setDate("")
  }

  let handleOpenForm = () => {
    setFormOpen(!formOpen)
    console.log(formOpen)
  }


  return(
    <div className='form' >
      <FontAwesomeIcon icon={faSquarePlus}  className = 'add' onClick={handleOpenForm}/>  <span> Add a Job</span>
      {formOpen ?  <form  onSubmit={handleSubmit} className="active_form">
        <label>Position</label>
        <input type='text' id = 'position' onChange = {handlePostion} value = {isPosition}/>
        <label>Company </label>
        <input type='text' id = 'position' onChange={handleCompany} value = {isCompany}/>
        <label>Status </label>
        <select id = 'status' onChange={handleStatus} value = {isStatus}>
          <option value ='choose'> Choose Status</option>
          <option value ='Apply'> Apply</option>
          <option value ='Applied'> Applied</option>
          <option value ='Contacted'> Contacted</option>
          <option value ='Interview'> Interview</option>
          <option value ='Accepted'> Accepted</option>
          <option value ='Rejected'> Rejected</option>
        </select>
        <label> Date </label>
        <input type='date' id = 'position' onChange={handleDate} value = {isDate}/>
        <input id = 'submit' type ='submit' />
        </form> : null
      }
    </div>
  )
}

export default JobForm;