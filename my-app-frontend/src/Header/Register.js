import './Register.css'

// function handleRegister(e){
//   e.preventDefaul

// }

function Register(){
  return(
    <div className='reg-cont'>
      <label>Create Username</label>
      <input type='text'/>
      <label>Password</label>
      <input type='password'/>
      <label>Confirm Password</label>
      <input type='password'/>
      <button className = 'sign-up'>Sign Up </button>
  </div>
  )
}

export default Register