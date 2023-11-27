import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import SignInForm from "./Login";
import SignUpForm from "./Signup";
import "./Login-Signup-Style.css";
export default function LS() {
  const [type, setType] = useState("signIn");

  const handleSignInClick = (value) => {
    if (value !== type) {
      setType(value);
    }
  };

  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");

  return (
    <div className="App">
      <div
        className={containerClass}
        style={{
          position: "relative",
          width: "62%",
          height: "635px",
          minWidth: "500px",
          "@media screen and (max-width: 768px)": {
            width: "100%",
            height: "auto",
          },
        }}
      >
        <SignUpForm onSignInClick={handleSignInClick} />
        <SignInForm onSignInClick={handleSignInClick} />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left"></div>
            <div className="overlay-panel overlay-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
