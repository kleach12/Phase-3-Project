import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

function Header(){

  return(
    <nav className= "header">
      <h1 id = 'logo'> JobHunt <FontAwesomeIcon icon={faAddressCard} /></h1>
      <ul>
        <li><button> Login</button></li>
        <li><button> Register</button></li>
      </ul>
    </nav>
  )
}

export default Header;