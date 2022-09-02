import "./UserSign.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";

function SignIn({ setUser, loggedIn, setLoggedIn }) {
  const [isLogin, setLogin] = useState(true);
  const [isUserName, setUserName] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const [newUsername, setNewUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRePassword, setNewRePassword] = useState("");

  function handlelogReg() {
    setLogin(!isLogin);
  }

  function handleloginNane(e) {
    setUserName(e.target.value);
  }

  function handleSignInPass(e) {
    setLogPassword(e.target.value);
  }

  function handleCreateUsername(e) {
    setNewUserName(e.target.value);
  }

  function handleNewPassword(e) {
    setNewPassword(e.target.value);
  }

  function handleRePassword(e) {
    setNewRePassword(e.target.value);
  }

  function handleSignInSubmit(e) {
    e.preventDefault();
    const formData = {
      userName: isUserName,
      password: logPassword,
    };
    fetch("http://localhost:9292/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.length);
        if (data.length === 0) {
          alert("Password or Username is Incorrect");
        } else {
          console.log(data);
          setUser(data);
          setLoggedIn(true);
        }
      });
  }

  if (loggedIn) {
    return <Navigate replace to="/userLoggedIn" />;
  }
  return (
    <div className="container">
      <div className="center">
        <h1 id="logo">
          {" "}
          JobHunt <FontAwesomeIcon icon={faAddressCard} />
        </h1>
        {isLogin ? (
          <div className="login">
            <form onSubmit={handleSignInSubmit}>
              <label> Login </label>
              <input
                type="text"
                id="position"
                onChange={handleloginNane}
                value={isUserName}
              />
              <label> Password </label>
              <input
                type="text"
                id="position"
                onChange={handleSignInPass}
                value={logPassword}
              />
              <div>
                <input type="submit" className="btn" />
                <button className="btn" onClick={handlelogReg}>
                  {" "}
                  Register{" "}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="sign-up">
            <form>
              <label> User Name </label>
              <input
                type="text"
                id="position"
                onChange={handleCreateUsername}
                value={newUsername}
              />
              <label> Password </label>
              <input
                type="text"
                id="position"
                onChange={handleNewPassword}
                value={newPassword}
              />
              <label> Re-Type Password </label>
              <input
                type="text"
                id="position"
                onChange={handleRePassword}
                value={newRePassword}
              />
              <div className="btn-div">
                <button className="btn"> Create User </button>
                <button className="btn" onClick={handlelogReg}>
                  {" "}
                  Sign in{" "}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignIn;
