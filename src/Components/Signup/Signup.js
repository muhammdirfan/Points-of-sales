import React from "react";
import Styles from "./Styles";
import "../Login/login.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Signup = (props) => {
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
          <div style={Styles.MainContainer}>
            <div style={Styles.FormContainer}>
              <input
                className="input"
                style={Styles.Input}
                placeholder="Full Name"
                type="texts"
              />
              <input
                className="input"
                style={Styles.Input}
                placeholder="Cell Number"
                type="number"
              />
              <input
                className="input"
                style={Styles.Input}
                placeholder="Email"
                type="email"
              />
              <input
                className="input"
                style={Styles.Input}
                placeholder="Password"
                type="password"
              />
             
              <button style={Styles.SubmitButton} className="submitButton">
                Sign Up
              </button>
              <a style={Styles.MutedLink} href="#">
                have an account?
                <Link
                  to="/Login"
                  className="animat"
                  style={Styles.BoldLink}
                  href="#"
                >
                  Sign In
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
