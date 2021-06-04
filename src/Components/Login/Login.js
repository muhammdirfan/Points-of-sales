import React, { useState } from "react";
import Styles from "./Styles";
import "./login.css";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";

const Login = (props) => {
  const [getEmail, setEmail] = useState();
  const [getPassword, setPassword] = useState();
  const history = useHistory();

  const userLogin = () => {
    // if (getEmail == "" && getPassword == "") {
    //   alert("Enter you email and passowrd");
    // } else {
    // }
    history.push("/dash");
  };
  return (
    <div style={Styles.acBox} className="acBox">
      <div className="overlay">
        <div style={Styles.BoxContainer}>
          <div style={Styles.TopContainer}>
            <div style={Styles.BackDrop} className="backdrop" />
            <div style={Styles.HeaderContainer}>
              <h2 style={Styles.HeaderText}>Welcome Back</h2>
              <p style={Styles.HeaderPara}>Please sign-in to continue!</p>
            </div>
          </div>
          <div style={Styles.InnerContainer}>
            <div style={Styles.MainContainer}>
              <div style={Styles.FormContainer}>
                <input
                  className="input"
                  style={Styles.Input}
                  placeholder="Email"
                  type="email"
                  value=""
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="input"
                  style={Styles.Input}
                  placeholder="Password"
                  type="password"
                  value=""
                  onChange={(e) => setPassword(e.target.value)}
                />
                <a style={Styles.MutedLink} href="#">
                  Forget Password?
                </a>
                <button
                  style={Styles.SubmitButton}
                  className="submitButton"
                  onClick={() => userLogin()}
                >
                  Sign In
                </button>
                <a style={Styles.MutedLink} href="#">
                  Don't have an account?
                  <Link
                    to="/Signup"
                    className="animat"
                    style={Styles.BoldLink}
                    href="#"
                  >
                    Create an Account
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
