import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  var handleClick = () => {
    if (firstName && lastName) {
      setIsLogin(true);
    }
  };

  var logOut = () => {
    setIsLogin(false);
  };

  if (isLogin === false) {
    return (
      <div className="frame">
        <h1 className="bigTitle">Sign In</h1>
        <div className="form">
          <input
            placeholder="first name"
            className="input"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <input
            placeholder="last name"
            className="input"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <button className="btn" onClick={() => handleClick()}>
            OK
          </button>
        </div>

        <hr className="line" />
        <h2 className="smallTitle">Debug mode - valeur captée: </h2>
        <div className="debugDisplay">
          {firstName} {lastName}
        </div>
      </div>
    );
  } else {
    return (
      <div className="frame">
        <h1 className="bigTitle">
          Welcome {firstName.toUpperCase()} {lastName.toUpperCase()} !
        </h1>
        <button className="btn" onClick={() => logOut()}>
          Log Out
        </button>
      </div>
    );
  }
}

export default App;
