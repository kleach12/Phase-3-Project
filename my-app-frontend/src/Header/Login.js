import './Login.css'

function Login(){
return(
    <div className='log-cont'>
        <label>Username</label>
        <input type='text'/>
        <label>Password</label>
        <input type='text'/>
        <button id = 'login'> Login </button>
    </div>
  )
}

export default Login