import "./UserSign.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

function SignIn() {
  const [isLogin, setLogin] = useState(true);
  const [userName, setUserName] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const [newUsername, setNewUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRePassword, setNewRePassword] = useState("");

  function handlelogReg(e) {
    setLogin(!isLogin);
  }

  function handleloginNane(e) {
    setUserName(e.target.value);
    console.log(userName);
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

  // function HandleSignInSubmit(e) {
  //   e.preventDefault;
  // }

  return (
    <div className="container">
      <div className="center">
        <h1 id="logo">
          {" "}
          JobHunt <FontAwesomeIcon icon={faAddressCard} />
        </h1>
        {isLogin ? (
          <div className="login">
            <form>
              <label> Login </label>
              <input
                type="text"
                id="position"
                onChange={handleloginNane}
                value={userName}
              />
              <label> Password </label>
              <input
                type="text"
                id="position"
                onChange={handleSignInPass}
                value={logPassword}
              />
              <div>
                <button className="btn"> Login </button>
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
