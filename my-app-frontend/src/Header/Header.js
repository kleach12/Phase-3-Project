import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

function Header({setLoggedIn}) {

    function handlelogOut(){
      // localStorage.removeItem('id');
      window.localStorage.clear()
      setLoggedIn(false)
    }

  return (
    <nav className="header">
      <h1 id="logo">
        {" "}
        JobHunt <FontAwesomeIcon icon={faAddressCard} />
      </h1>
      <ul className="nav-items">
        <div className="reg-drop">
          <li>
            <button className="btn" onClick={handlelogOut}> Logout </button>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Header;
