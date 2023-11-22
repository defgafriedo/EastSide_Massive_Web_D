import React from "react";

function SignInForm(props) {
  const handleClick = () => {
    if (props.onSignInClick) {
      props.onSignInClick("signUp");
    }
  };

  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1 style={{ fontFamily: "Poppins", fontSize: "30px" }}>Sign In</h1>
        <div style={{ textAlign: "left" }}>
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
            value={state.email}
            onChange={handleChange}
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
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "45px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <input type="checkbox" id="formBasicCheckbox" />
              <p style={{ margin: "10px", fontSize: "10px" }}>
                Ingat&nbsp;saya
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <a href="#">Lupa password?</a>
            <a href="#" id="signIn" onClick={handleClick}>
              Buat akun
            </a>
          </div>
        </div>

        <button href="">Log In</button>
      </form>
    </div>
  );
}

export default SignInForm;
