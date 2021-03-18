import React from "react";
import { Table, Card, Input, Button, Space, Tag, Progress } from "antd";
import "./style.css";
import "antd/dist/antd.css";
import styles from "./style.js";
// import bg1 from "../../assests/images/bg1.jpg";

const { Column, ColumnGroup } = Table;

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
            <img
              style={styles.cardImg}
              src={props.icon}
              height="30px"
              width="30px"
            />
          </div>
        </div> 
      }
    >
      <Meta title={props.description} style={styles.cardTitle} />
    </Card>
  );
};
export default CardFont;
