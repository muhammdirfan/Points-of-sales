import React, { useState } from "react";
import { Link } from "react-router-dom";
// import CSS/style
import "./sidebar.css";
import styles from "./style";

// import antd
import { Menu, Row, Col } from "antd";

// Icons

import {
  WindowsOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
} from "@ant-design/icons";

// images
import Logo from "../../assests/images/ZLogo.png";

const { SubMenu } = Menu;

const Sidebar = (props) => {
  return (
    <Row className="sideBar">
      <Col span={24}>
        <div className="logo" style={styles.logoDiv}>
          <img src={Logo} alt="LOGO" style={styles.logo} />
        </div>
      </Col>
      <Col span={24} className="links">
        <Menu mode="inline" className="mainContainer">
          <Link to="/dash">
            <Menu.Item key="1" icon={props.sideicon0} className="menuItems ">
              {props.Sideitem0}
            </Menu.Item>
          </Link>

          <Link to="/sales">
            <Menu.Item key="1" icon={props.sideicon1} className="menuItems">
              {props.Sideitem1}
            </Menu.Item>
          </Link>
          <Link to="/inventory">
            <Menu.Item key="2" icon={props.sideicon2} className="menuItems">
              {props.Sideitem2}
            </Menu.Item>
          </Link>
          <Link to="/customer">
            <Menu.Item key="3" icon={props.sideicon3} className="menuItems">
              {props.Sideitem3}
            </Menu.Item>
          </Link>
          <Link to="/rooms">
            <Menu.Item key="4" icon={props.sideicon4} className="menuItems">
              {props.Sideitem4}
            </Menu.Item>
          </Link>
          <Link to="/provider">
            <Menu.Item key="5" icon={props.sideicon5} className="menuItems">
              {props.Sideitem5}
            </Menu.Item>
          </Link>
          <Link to="/employees">
            <Menu.Item key="6" icon={props.sideicon6} className="menuItems">
              {props.Sideitem6}
            </Menu.Item>
          </Link>
          <Link to="/billing">
            <Menu.Item key="7" icon={props.sideicon7} className="menuItems">
              {props.Sideitem7}
            </Menu.Item>
          </Link>
        </Menu>
      </Col>
    </Row>
  );
};
export default Sidebar;
