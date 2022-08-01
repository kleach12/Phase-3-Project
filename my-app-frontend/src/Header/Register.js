import React, {useState} from 'react'
import './Register.css'


function Register(){
  const [isUsername, setUsername] = useState("")
  const [isPassword, setPassword] = useState("")
  const [isPasswordCorr, setPasswordCorr] = useState("")
  

  function handleUsername(e){
    setUsername(e.target.value)
    console.log(isUsername)
  }

  function handlePassword(e){
    setPassword(e.target.value)
    console.log(isPassword)
  }

  function handlePasswordCorrect(e){
    setPasswordCorr(e.target.value)
    console.log(isPasswordCorr)
  }

  function handleSubmit(e){
    e.preventDefault()
    const formData = {
      username: isUsername,
      password: isPassword
    }

    fetch("http://localhost:9292/users/signup",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(formData)
    })

    
  }
  
  return(
    <div className='reg-cont'>
      <label>Create Username</label>
      <input type='text' onChange = {handleUsername} value = {isUsername}/>
      <label>Password</label>
      <input type='password' onChange = {handlePassword} value = {isPassword}/>
      <label>Confirm Password</label>
      <input type='password' onChange = {handlePasswordCorrect} value = {isPasswordCorr}/>
      <button className = 'sign-up'>Sign Up </button>
  </div>
  )
}

export default Register