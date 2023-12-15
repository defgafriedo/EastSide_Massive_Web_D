import { Button } from "react-bootstrap";
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function SignUpForm(props) {
  const handleClick = () => {
    if (props.onSignInClick) {
      props.onSignInClick("signIn");
    }
  };
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/v1/atssign', {
        username,
        email,
        password,
      });
      console.log(response.data);
      if (response.data.success) {
        props.onSignInClick("signIn");
      }
    } catch (error) {
      console.error('Login error: ', error);
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form>
        <h1 style={{ fontFamily: "Poppins", fontSize: "30px" }}>Sign Up</h1>
        <div style={{ textAlign: "left", width: "100%" }}>
          <p
            style={{
              fontSize: "10px",
              fontFamily: "Poppins",
              textAlign: "left",
              margin: "5px",
              marginTop: "20px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Username
          </p>
          <input
            type="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              backgroundColor: "#ffffff",
              border: "none",
              padding: "12px 15px",
              borderRadius: "8px",
              width: "103%",
              border: "1px solid rgba(0, 0, 0, 0.22)",
              boxShadow: "0px 2px 3px 1px rgba(0, 0, 0, 0.22)",
            }}
          />

          <p
            style={{
              fontSize: "10px",
              fontFamily: "Poppins",
              textAlign: "left",
              margin: "5px",
              marginTop: "20px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Email
          </p>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              backgroundColor: "#ffffff",
              border: "none",
              padding: "12px 15px",
              borderRadius: "8px",
              width: "103%",
              border: "1px solid rgba(0, 0, 0, 0.22)",
              boxShadow: "0px 2px 3px 1px rgba(0, 0, 0, 0.22)",
            }}
          />

          <p
            style={{
              fontSize: "10px",
              fontFamily: "Poppins",
              margin: "5px",
              marginTop: "10px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Password
          </p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              backgroundColor: "#ffffff",
              border: "none",
              padding: "12px 15px",
              borderRadius: "8px",
              width: "103%",
              border: "1px solid rgba(0, 0, 0, 0.22)",
              boxShadow: "0px 2px 3px 1px rgba(0, 0, 0, 0.22)",
            }}
          />
        </div>

        <div
          className="option-bottom-signup"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
            marginBottom: "45px",
            width: "112%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "30px",
            }}
          >
            <input type="checkbox" id="formBasicCheckbox" />
            <p style={{ margin: "10px", fontSize: "10px" }}>Remeber&nbsp;Me</p>
          </div>

          <div
            className="option-a"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              marginTop: "5px",
            }}
          >
            <a href="#">Forgot Password?</a>
            <a href="#" id="signIn" onClick={handleClick}>
              Alredy&nbsp;have&nbsp;an&nbsp;account
            </a>
          </div>
        </div>

        <button type="submit" className="btn-siglog" onClick={(e) => handleSignin(e)}>Sign up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
