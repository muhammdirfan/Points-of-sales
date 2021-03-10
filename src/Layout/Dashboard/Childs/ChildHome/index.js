import React from "react";
import { Link } from "react-router-dom";
import Cards from "./../../../../Components/Card/index.js";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import styles from "../../../Dashboard/style.js";

import saleslogo from "../../../../assests/icons/sales.svg";
import inventory from "../../../../assests/icons/inventory.svg";
import bill from "../../../../assests/icons/bill.svg";
import room from "../../../../assests/icons/room-key (2).svg";
import accountant from "../../../../assests/icons/accountant (1).svg";
import Employees from "../../../../assests/icons/Employees.svg";
import settings from "../../../../assests/icons/settings.svg";

const { Header, Content, Sider } = Layout;

const childHome = () => {
  return (
    <Layout>
      <Content
        style={{
          padding: "0px 50px",
          margin: "0px",
          backgroundColor: "#d6d5d5",
        }}
      >
        <Row gutter={[0, 40]} style={(styles.mainBox, { marginTop: "20px" })}>
          <Col xs={24} sm={22} md={12} lg={8} xl={8} style={styles.cardBox}>
            <Link to="/sales">
              <Cards icon={saleslogo} description={"Sales and Reporting"} />
            </Link>
          </Col>

          <Col xs={24} sm={22} md={12} lg={8} xl={8} style={styles.cardBox}>
            <Link to="/inventory">
              <Cards icon={inventory} description={"Inventory Management"} />
            </Link>
          </Col>
          <Col xs={24} sm={22} md={12} lg={8} xl={8} style={styles.cardBox}>
            <Link to="/customer">
              <Cards icon={settings} description={"Customer Management"} />
            </Link>
          </Col>
          <Col xs={24} sm={22} md={12} lg={8} xl={8} style={styles.cardBox}>
            <Link to="/provider">
              <Cards icon={accountant} description={"Provider Management"} />
            </Link>
          </Col>
          <Col xs={24} sm={22} md={12} lg={8} xl={8} style={styles.cardBox}>
            <Link to="/rooms">
              <Cards icon={room} description={"Rooms Management"} />
            </Link>
          </Col>
          <Col xs={24} sm={22} md={12} lg={8} xl={8} style={styles.cardBox}>
            <Link to="/employees">
              <Cards icon={Employees} description={"Employees Management"} />
            </Link>
          </Col>
          <Col xs={24} sm={22} md={12} lg={8} xl={8} style={styles.cardBox}>
            <Link to="/billing">
              <Cards icon={bill} description={"Billing Management"} />
            </Link>
          </Col>
        </Row>

        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        ></div>
      </Content>
    </Layout>
  );
};
export default childHome;
