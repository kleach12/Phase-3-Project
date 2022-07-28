import React, {useState} from 'react'
import './Header.css'
import Login from './Login'
import Register from './Register'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

function Header(){
const [login, setLogin] = useState(false)
const [register, setRegister] = useState(false)

const handleLogin = () => {
  setLogin(!login)
  console.log(login)}

  const handleRegister = () => {
    setRegister(!register)
    console.log(register)}

  return(
    <nav className= "header">
      <h1 id = 'logo'> JobHunt <FontAwesomeIcon icon={faAddressCard} /></h1>
      <ul className='nav-items'>
        <div className='log-drop'>
          <li><button onClick={handleLogin}> Login</button></li>
          <div className='login'> {login ? <Login/> : null }</div>
        </div>
        <div className='reg-drop'>
          <li><button onClick={handleRegister}> Register</button></li>
          <div className='register'> {register ? <Register/> : null }</div>
        </div>
      </ul>
    </nav>
  )
}

export default Header;