import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

function Header(){

  return(
    <div className= "header">
      <h1> JobHunt <FontAwesomeIcon icon={faAddressCard} /></h1>
    </div>
  )
}

export default Header;