import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

function Header(){

  return(
    <nav className= "header">
      <ul>
        <li><h1> JobHunt <FontAwesomeIcon icon={faAddressCard} /></h1></li>
        <li><button> Login</button></li>
        <li><button> Register</button></li>
      </ul>
    </nav>
  )
}

export default Header;