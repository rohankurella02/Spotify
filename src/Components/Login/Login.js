import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import "./Login.scss";

export default function GoogleLogin() {
  const [showLogin, setShowLogin] = useState(true);

  const handleShowSignup = () => {
    setShowLogin(false);
  };

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log(response);
    // You can perform further actions here, such as saving the user details in your database
  };

  const handleGoogleLoginFailure = (response) => {
    console.log(response);
    // You can handle the login failure case here, such as displaying an error message
  };

  return (
    <>
      <ul className="nav">
        <li onClick={handleShowLogin}>Login</li>
        <li onClick={handleShowSignup}>Sign Up</li>
      </ul>
      <div className="wrapper">
        <div
          className={`rec-prism ${showLogin ? "" : "show-signup"}`}
          style={{
            transform: showLogin
              ? "translateZ(-100px)"
              : "translateZ(-100px) rotateY(-90deg)"
          }}
        >
          <div className="face face-front">
            <div className="content">
              <h2>Sign In</h2>
              <form onSubmit={(event) => event.preventDefault()}>
                <div className="field-wrapper">
                  <input type="email" name="username" placeholder="username" />
                  <label>E-mail</label>
                </div>
                <div className="field-wrapper">
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    autoComplete="new-password"
                  />
                  <label>Password</label>
                </div>
                <div className="field-wrapper">
                  <input
                    type="submit"
                    value="Submit"
                    onClick={() => setShowLogin(true)}
                  />
                </div>
                <span className="signup" onClick={handleShowSignup}>
                  Not a User Yet :(? Sign Up
                </span>
              </form>
              <span className="google-button">
                <GoogleLogin
                  clientId="949647557337-4f7dultraev2a7aucco3d07vvj1b960t.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={handleGoogleLoginSuccess}
                  onFailure={handleGoogleLoginFailure}
                  cookiePolicy={"single_host_origin"}
                  className="google-button"
                />
              </span>
            </div>
          </div>
          <div className="face face-right">
            <div className="content">
              <h2>Sign Up</h2>
              <form onSubmit={(event) => event.preventDefault()}>
                <div className="field-wrapper">
                  <input type="email" name="email" placeholder="email" />
                  <label>E-mail</label>
                </div>
                <div className="field-wrapper">
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    autoComplete="new-password"
                  />
                  <label>Password</label>
                </div>
                <div className="field-wrapper">
                  <input
                    type="password"
                    name="password2"
                    placeholder="password"
                    autoComplete="new-password"
                  />
                  <label>Re-Enter Password</label>
                </div>
                <div className="field-wrapper">
                  <input
                    type="submit"
                    value="Submit"
                    onClick={() => setShowLogin(true)}
                  />
                </div>
                <span className="singin" onClick={handleShowLogin}>
                  Already a User :)? Sign In
                </span>
              </form>
              <span className="google-button">
                <GoogleLogin
                  clientId="949647557337-4f7dultraev2a7aucco3d07vvj1b960t.apps.googleusercontent.com"
                  buttonText="Sign Up"
                  onSuccess={handleGoogleLoginSuccess}
                  onFailure={handleGoogleLoginFailure}
                  cookiePolicy={"single_host_origin"}
                  className="google-button"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
