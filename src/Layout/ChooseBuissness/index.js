import React from "react";
import Styles from "./styles";
import "./ChooseBuissness.css";
import Hotelsicon from "../../assests/icons/hotel.svg";
import Drugstoreicon from "../../assests/icons/pharmacy.svg";
import Supermarketicon from "../../assests/icons/grocery-cart.svg";
import {
  Link,
} from "react-router-dom";

const ChooseBuissness = () => {
  return (
    <div style={Styles.Main} className="main">
      <div className="main-over">
        <div style={Styles.ChooseContant} className="ChooseContant">
          <div className="choosebuissnessHeading">
            <h1>Choose Your Buissness</h1>
            <p>You can only select one</p>
          </div>
          <div style={Styles.flex}>
            <Link to={{pathname:"/login", state:{ id: '1' }}} className="AccountBox-links">
              <div className="Choosebox Choosebox1">
                <div className="over">
                  <img src={Hotelsicon} height="80px" width="80px" />
                  <h3>Hotel</h3>
                </div>
              </div>
            </Link>
            <Link to={{pathname:"/login", state:{ id: '2' } }}className="AccountBox-links">
              <div className="Choosebox Choosebox2">
                <div className="over">
                  <img src={Drugstoreicon} height="80px" width="80px" />
                  <h3>Drug Shop</h3>
                </div>
              </div>
            </Link>
            <Link to={{pathname:"/login" ,  state:{ id: '3' }}} className="AccountBox-links">
              <div className="Choosebox Choosebox3">
                <div className="over">
                  <img src={Supermarketicon} height="80px" width="80px" />
                  <h3>Super Market</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChooseBuissness;
