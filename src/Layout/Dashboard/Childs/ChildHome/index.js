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
          backgroundColor: "#eeeeee",
          padding: "50px 0px"
        }}
      >
        <Row gutter={[40, 40]}>
          <Col xs={24} sm={22} md={12} lg={8} xl={8} style={styles.cardBox}>
            <Link to="/dash/sales">
              <Cards icon={saleslogo} description={"Sales and Reporting"} />
            </Link>
          </Col>

          <Col xs={24} sm={22} md={12} lg={8} xl={8} style={styles.cardBox}>
            <Link to="/dash/inventory">
              <Cards icon={inventory} description={"Inventory Management"} />
            </Link>
          </Col>
          <Col xs={24} sm={22} md={12} lg={8} xl={8} style={styles.cardBox}>
            <Link to="/dash/customer">
              <Cards icon={settings} description={"Customer Management"} />
            </Link>
          </Col>
          <Col xs={24} sm={22} md={12} lg={8} xl={8} style={styles.cardBox}>
            <Link to="/dash/provider">
              <Cards icon={accountant} description={"Provider Management"} />
            </Link>
          </Col>
          <Col xs={24} sm={22} md={12} lg={8} xl={8} style={styles.cardBox}>
            <Link to="/dash/rooms">
              <Cards icon={room} description={"Rooms Management"} />
            </Link>
          </Col>
          <Col xs={24} sm={22} md={12} lg={8} xl={8} style={styles.cardBox}>
            <Link to="/dash/employees">
              <Cards icon={Employees} description={"Employees Management"} />
            </Link>
          </Col>
          <Col xs={24} sm={22} md={12} lg={8} xl={8} style={styles.cardBox}>
            <Link to="/dash/billing">
              <Cards icon={bill} description={"Billing Management"} />
            </Link>
          </Col>
          <Col xs={24} sm={22} md={12} lg={8} xl={8} style={styles.cardBox}>
            <Link to="/dash/roomtype">
              <Cards icon={bill} description={"Room Type"} />
            </Link>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
export default childHome;
