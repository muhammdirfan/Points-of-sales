// import React from "react";
// import { useState } from "react";
// import Styles from "./Styles";
// import Login from "../../Components/Login/Login.js";
// import Signup from "../../Components/Signup/Signup.js";
// import "./accountBox.css";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link,
//   Redirect,
// } from "react-router-dom";

// const LoginPage = () => {
//   return <Login />;
// };

// const SignupPage = () => {
//   return <Signup />;
// };

// class AccountBox extends React.Component {
//   render() {
//     return (
//       <Router>
//         <div style={Styles.acBox} className="acBox">
//           <div className="overlay">
//             <div style={Styles.BoxContainer}>
//               <div style={Styles.TopContainer}>
//                 <div style={Styles.BackDrop} className="backdrop" />
//                 <div style={Styles.HeaderContainer}>
//                   <h2 style={Styles.HeaderText}>Welcome Back</h2>
//                   <p style={Styles.HeaderPara}>Please sign-in to continue!</p>
//                 </div>
//               </div>
//               <div style={Styles.InnerContainer}>
//                 <Switch>
//                   <Route exact={true} path="/Login" component={LoginPage} />
//                   <Route path="/Signup" component={SignupPage} />
//                   <Redirect to="/Login" />
//                 </Switch>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Router>
//     );
//   }
// }
// export default AccountBox;
