import React, {useState,useEffect,useRef} from 'react'
import './Header.css'
import Login from './Login'
import Register from './Register'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

function Header(){
const [login, setLogin] = useState(false)
const [register, setRegister] = useState(false)


function useOutsideClick(ref){

  useEffect(() => {

    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setRegister(false);
        setLogin(false);
      }
    }
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }

  },[ref]);
}

const refOne = useRef(null);
useOutsideClick(refOne)

const handleLogin = () => {
  setLogin(!login)
  setRegister(false)
  console.log(login)}

  const handleRegister = () => {
    setRegister(!register)
    setLogin(false)
    console.log(register)}

  return(
    <nav className= "header">
      <h1 id = 'logo'> JobHunt <FontAwesomeIcon icon={faAddressCard} /></h1>
      <ul className='nav-items' ref = {refOne}>
        <div className='log-drop'>
          <li><button onClick={handleLogin}> Login</button></li>
          <div className='login'> {login ? <Login/> : null }</div>
        </div>
        <div className='reg-drop'>
          <li><button onClick={handleRegister}> Register</button></li>
          <div className='register' > {register ? <Register /> : null }</div>
        </div>
      </ul>
    </nav>
  )
}

export default Header;