import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Login(){
return(
    <div className='log-cont'>
        <label>Username</label>
        <input type='text'/>
        <label>Password</label>
        <input type='password'/>
        <button id = 'login'> Login </button>
    </div>
  )
}

export default Login