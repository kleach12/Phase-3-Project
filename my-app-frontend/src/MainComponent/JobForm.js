import React,{useState} from 'react';
import './JobForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

function JobForm({posName}){
  const [formOpen, setFormOpen] = useState(false)
  const [isPosition, setPosition ] = useState("")
  const [isCompany, setCompany] = useState("")

  function handlePostion(e){
    setPosition(e.target.value)
    console.log(isPosition)
  }

  function handleCompany(e){
    setCompany(e.target.value)
    console.log(isCompany)
  }

  let handleOpenForm = () => {
    setFormOpen(!formOpen)
    console.log(formOpen)
  }


  return(
    <div className='form'>
      <FontAwesomeIcon icon={faSquarePlus}  className = 'add' onClick={handleOpenForm}/>  <span> Add a Job</span>
      {formOpen ?  <div  className="active_form">
        <label>Positon</label>
        <input type='text' id = 'position' onChange = {handlePostion} value = {isPosition}/>
        <label>Company </label>
        <input type='text' id = 'position' onChange={handleCompany} value = {isCompany}/>
        <label>Status </label>
        <select id = 'status'>
        <option value =''> Choose Status</option>
          <option value ='Apply'> Apply</option>
          <option value ='Applied'> Applied</option>
          <option value ='Contacted'> Contacted</option>
          <option value ='Interview'> Interview</option>
          <option value ='Accepted'> Accepted</option>
          <option value ='Rejected'> Rejected</option>
        </select>
        <label> Date </label>
        <input type='date' id = 'position'/>
        <input id = 'submit' type ='submit' />
        </div> : null
      }
    </div>
  )
}

export default JobForm;