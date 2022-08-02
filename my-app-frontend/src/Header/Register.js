import React, {useState,useEffect} from 'react'
import './Register.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Register(){
  const [isUsername, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordCorr, setPasswordCorr] = useState("")
  // const [showErrorMessage, setShowErrorMessage] = useState(false);
  // const [cPasswordClass, setCPasswordClass] = useState('form-control');
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
  


  function handleUsername(e){
    setUsername(e.target.value)
    console.log(isUsername)
  }

  function handlePassword(e){
    setPassword(e.target.value)
    console.log(password)
  }

  function handlePasswordCorrect(e){
    setPasswordCorr(e.target.value)
    setIsCPasswordDirty(true)
    console.log(passwordCorr)
  }

  

  function handleSubmit(e){
    e.preventDefault()
    const formData = {
      username: isUsername,
      password: password
    }

    if(password === passwordCorr){
      fetch("http://localhost:9292/users/signup",{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify(formData)
      })
    } else{
      alert("Passwords do not match")
    }
    setUsername("")
    setPassword("")
    setPasswordCorr("")
  }
  
  return(
    <form className='reg-cont' onSubmit={handleSubmit}>
      <div >
        <label> Create Username </label>
        <input type='text' onChange = {handleUsername} value = {isUsername}/>
      </div>
      <div className='form--group'> 
        <label> Password </label>
        <input className = "form-control" type='password' onChange = {handlePassword} value = {password}/>
      </div>
      <div className='form--group'>
        <label>Confirm Password</label>
        <input className = "form-control" type='password' onChange = {handlePasswordCorrect} value = {passwordCorr}/>
      </div>
      <button className = 'sign-up'> Sign Up </button>
  </form>
  )
}

export default Register