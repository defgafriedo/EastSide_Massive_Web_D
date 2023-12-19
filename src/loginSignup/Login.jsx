import { Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignInForm(props) {
  const handleClick = () => {
    if (props.onSignInClick) {
      props.onSignInClick("signUp");
    }
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId');
    const storedUserLevel = localStorage.getItem('userLevel');

    if (storedToken && storedUserId && storedUserLevel) {
      navigate('/'); // Redirect to dashboard or appropriate route
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:5000/api/v1/atslog', {
        params: {
            email: email,
            pw: password
        }
    });
    
  
      if (response.data.success) {
        localStorage.setItem('userId', response.data.userId);
        localStorage.setItem('userName', response.data.userName);
        localStorage.setItem('userLevel', response.data.userLevel);
        localStorage.setItem('token', response.data.token);
        navigate('/');
      }
    } catch (error) {
      console.error('Login error: ', error);
    }
  };
  

  return (
    <div className="form-container sign-in-container">
      <form>
        <h1 style={{ fontFamily: "Poppins", fontSize: "30px" }}>Sign In</h1>
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
            Email address
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
          className="option-bottom-login"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
            marginBottom: "45px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <input type="checkbox" id="formBasicCheckbox" />
            <p
              style={{
                margin: "5px",
                fontSize: "10px",
              }}
            >
              Remember&nbsp;Me
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              marginTop: "5px",
            }}
          >
            <a href="#" style={{ fontSize: "10px" }}>
              Forgot&nbsp;Password?
            </a>
            <br></br>
            <a
              href="#"
              id="signIn"
              onClick={handleClick}
              style={{ fontSize: "10px" }}
            >
              Create&nbsp;On&nbsp;Account
            </a>
          </div>
        </div>

        <button type="submit" className="btn-siglog" onClick={(e) => handleLogin(e)}>Log In</button>
      </form>
    </div>
  );
}

export default SignInForm;
