import React,{useState} from 'react';
import './JobForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

function JobForm(){
  const [formOpen, setFormOpen] = useState(false)

  let handleOpenForm = () => {
    setFormOpen(!formOpen)
    console.log(formOpen)
  }

  const Form = () => (
    <div  className="active_form">
      <label>Positon</label>
      <input type='text' id = 'position'/>
      <label>Company </label>
      <input type='text' id = 'position'/>
      <label>Status </label>
      <select id = 'status'>
        <option value ='Apply'> Apply</option>
        <option value ='Applied'> Applied</option>
        <option value ='Contacted'> Contacted</option>
        <option value ='Interview'> Interview</option>
        <option value ='Accepted'> Accepted</option>
        <option value ='Rejected'> Rejected</option>
      </select>
      <label> Date </label>
      <input type='date' id = 'position'/>
      
    </div>
  )

  return(
    <div className='form'>
      <FontAwesomeIcon icon={faSquarePlus}  className = 'add' onClick={handleOpenForm}/>  <span> Add a Job</span>
      <div >
      {formOpen ? <Form/> : null}
      </div>

    </div>
  )
}

export default JobForm;