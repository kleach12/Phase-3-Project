import './Register.css'

function Register(){
  return(
    <div className='reg-cont'>
      <label>Create Username</label>
      <input type='text'/>
      <label>Password</label>
      <input type='text'/>
      <label>Confirm Password</label>
      <input type='text'/>
      <button className = 'sign-up'>Sign Up </button>
  </div>
  )
}

export default Register