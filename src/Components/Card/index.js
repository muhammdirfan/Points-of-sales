import React from "react";
import { Card } from "antd";
import "./style.css";
import styles from "./style.js";

const { Meta } = Card;

const CardFont = (props) => {
  return (
    <Card
      hoverable
      className="card"
      style={styles.card}
      cover={

        <div className="dash-card" style={styles.cardDiv}>
          <div style={styles.cardImgDiv} className="cardImgDiv">
            <div className="iconContainer">
              <div className="innerCircle">
                <img
                  style={styles.cardImg}
                  src={props.icon}
                  height="30px"
                  width="30px"
                />
              </div>
            </div>
          </div>
        </div>
      }

    >
      <hr />
      <Meta title={props.description} style={styles.cardTitle} />
    </Card>
  );
};
export default CardFont;
