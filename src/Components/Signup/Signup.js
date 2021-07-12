import React, { useState, useEffect } from "react";
import Styles from "./Styles";
import "../Login/login.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import userInfo from "../../Apis/userInfo";
import Loading from "../Loading/index.js";

const userinfo = new userInfo();

const Signup = (props) => {
  const [name, setName] = useState("");
  const [cellno, setCellno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const [loading, setLoading] = useState(true);

  const [message, setMessage] = useState("");

  const submitData = () => {
    if (name == "" || cellno == "" || email == "" || password == "") {
      alert("Please fill all the feilds");
    } else {
      setLoading(false);
      const datavalues = {
        name: name,
        cellno: cellno,
        email: email,
        password: password,
        status: 1,
      };
      const userdatas = userinfo.addUserInfo(datavalues);
      userdatas.then((response) => {
        console.log(response, "testing");
        if (response.status == "failed" || response.status == "success") {
          setLoading(true);
          setMessage(response.message);
        }
      });
    }
  };

  return (
    <>
      {loading ? null : (
        <div className="loadingDiv">
          <Loading />
        </div>
      )}
      <p style={{ width: "100%", color: "red", padding: "10px 20px" }}>
        {message}
      </p>

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
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="input"
                  style={Styles.Input}
                  placeholder="Cell Number"
                  type="number"
                  onChange={(e) => setCellno(e.target.value)}
                />
                <input
                  className="input"
                  style={Styles.Input}
                  placeholder="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="input"
                  style={Styles.Input}
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  style={Styles.SubmitButton}
                  className="submitButton"
                  onClick={() => submitData()}
                >
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
    </>
  );
};

export default Signup;
