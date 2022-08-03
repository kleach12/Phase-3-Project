import React from 'react'
import './Header.css'
// import Login from './Login'
// import Register from './Register'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
// import 'bootstrap/dist/css/bootstrap.min.css';


function Header(){
// const [login, setLogin] = useState(false)
// const [register, setRegister] = useState(false)


// function useOutsideClick(ref){

//   useEffect(() => {

//     function handleClickOutside(event) {
//       if (ref.current && !ref.current.contains(event.target)) {
//         setRegister(false);
//         setLogin(false);
//       }
//     }
//     document.addEventListener('click', handleClickOutside)

//     return () => {
//       document.removeEventListener('click', handleClickOutside)
//     }

//   },[ref]);
// }

// const refOne = useRef(null);
// useOutsideClick(refOne)

// const handleLogin = () => {
//   setLogin(!login)
//   setRegister(false)
//   console.log(login)}

//   const handleRegister = () => {
//     setRegister(!register)
//     setLogin(false)
//     console.log(register)}

  return(
    <nav className= "header">
      <h1 id = 'logo'> JobHunt <FontAwesomeIcon icon={faAddressCard} /></h1>

      {/* <ul className='nav-items' ref = {refOne}>
        <div className='log-drop'>
          <li><Button className = 'btn' onClick={handleLogin}> Login</Button></li>
          <div className='login'> {login ? <Login setLoginState = {setLogin} /> : null }</div>
        </div>
        <div className='reg-drop'>
          <li><Button className = 'btn' onClick={handleRegister}> Register</Button></li>
          <div className='register' > {register ? <Register setRegisterState = {setRegister}/> : null }</div>
        </div>
      </ul> */}
    </nav>
  )
}

export default Header;