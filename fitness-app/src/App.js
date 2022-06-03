import React, { useState } from "react";

import "./App.css";

function App() {
  // Login react states
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  //Mock login info
  const loginData = [
    {
      username: "fit-appUser1",
      password: "getfit1",
    },
    // can add more users as objects here...
  ];
  const invalid = {
    uname: "not a valid username",
    pword: "not a valid password",
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  // submit form function, prevent reload
  const handleSubmit = (e) => {
    e.preventDefault();

    var { uname, pword } = document.forms[0];

    //Find login info
    const userData = loginData.find((user) => user.username === uname.value);

    //comparison
    if (userData) {
      if (userData.password !== pword.value) {
        // incorrect password
        setErrorMessages({ name: "pword", message: invalid.pword });
      } else {
        setIsSubmitted(true);
      }
    } else {
      //user not found
      setErrorMessages({ name: "uname", message: invalid.uname });
    }
  };

  //JSX for Login
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username</label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
          <label>Password</label>
          <input type="text" name="pword" required />
          {renderErrorMessage("pword")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="App">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;
