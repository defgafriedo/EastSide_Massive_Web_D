import React from "react";

function SignUpForm(props) {
  const handleClick = () => {
    if (props.onSignInClick) {
      props.onSignInClick("signIn");
    }
  };

  const [state, setState] = React.useState({
    name: "",
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

    const { name, email, password } = state;
    alert(
      `You are sign up with name: ${name} email: ${email} and password: ${password}`
    );

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1 style={{ fontFamily: "Poppins", fontSize: "30px" }}>Sign Up</h1>
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
            Username
          </p>
          <input
            type="username"
            name="username"
            value={state.username}
            onChange={handleChange}
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
              Sudah&nbsp;punya&nbsp;akun
            </a>
          </div>
        </div>

        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
