import React, { useState, useEffect } from "react";
import Styles from "./Styles";
import "./login.css";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import Loading from "../Loading/index";
import userInfo from "../../Apis/userInfo";
import { connect } from "react-redux";
import { AddUser, GetUser } from "../../Actions/Users/index.js";

const userinfo = new userInfo();

const Login = (props) => {
  // console.log(props.location.state.id);
  const [getEmail, setEmail] = useState();
  const [getPassword, setPassword] = useState();
  const history = useHistory();
  // history.push("/dash");

  const [loading, setLoading] = useState(true);

  const [userData, setUserData] = useState([]);

  const [message, setMessage] = useState("");

  const userLogin = () => {
    if (getEmail == "" || getPassword == "") {
      alert("Please fill all the feilds");
    } else {
      setLoading(false);
      const result = userinfo.getUserLogin(
        getEmail,
        getPassword,
        props.location.state.id,
        props
      );
      result.then((res) => {
        if (res == 1) {
          setLoading(true);
          history.push("/dash1");
        } else if (res == 2) {
          setLoading(true);
          history.push("/dash2");
        } else if (res == 3) {
          setLoading(false);
          history.push("/dash3");
        } else {
          setLoading(true);
          console.log(result, "result");

          setMessage(localStorage.getItem("loginerror"));
        }
      });
    }
  };

  return (
    <>
      {loading ? null : (
        <div className="loaderDiv">
          <Loading />
        </div>
      )}
      {message ? <h4 className="messageDiv">{message}</h4> : null}
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
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="input"
                    style={Styles.Input}
                    placeholder="Password"
                    type="password"
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
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state.userData.getuserdata, "mdata");
  return {
    getUserDatas: state.userData.getuserdata,
  };
};

export default connect(mapStateToProps, {
  GetUser,
})(Login);

// export default Login;
