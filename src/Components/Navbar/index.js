import React, { useState } from "react";

// CSS/style
import "./navbar.css";
import Styles from "./style";

// antd
import { Layout, Menu, Breadcrumb, Row, Col, Dropdown, Card } from "antd";

// Icons
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BellOutlined,
  UnorderedListOutlined,
  MailOutlined,
  MenuOutlined,
  DownOutlined,
  KeyOutlined,
  LoginOutlined,
  SettingFilled,
  EnvironmentOutlined,
} from "@ant-design/icons";

// Images
// import Logo from "../../assests/images/ZLogo.png";
import pc1 from "../../assests/images/ZLogo.png";

const { Header, Content, Footer } = Layout;

const menu = (
  <Menu className="helloPakistan">
    <Card hoverable style={{ width: 240 }}>
      <Row style={Styles.navCardR1}>
        <Col span={24}>
          <img src={pc1} alt="" style={Styles.navCardP1} />
          <h4 style={Styles.navCardh4}>User Name</h4>
          <p style={Styles.navCardp}>User Email</p>
          <hr style={Styles.navCardhr} />
        </Col>
      </Row>
      <Row style={Styles.navCardR1}>
        <Col>
          {" "}
          <a href="" style={Styles.navCardAnker}>
            <KeyOutlined style={Styles.navCardicon} className="navMenuRow2" />
          </a>
        </Col>
        <Col>
          <a href="">
            <EnvironmentOutlined
              style={Styles.navCardicon}
              className="navMenuRow2"
            />
          </a>
        </Col>
      </Row>

      <Row style={Styles.navMenuRow2} className="navMenuRow2">
        <Col span={3}>
          <a href="">
            <SettingFilled style={Styles.navMenuRow2Icon} />
          </a>
        </Col>
        <Col span={21}>
          <a style={Styles.navMenuRow2ankertag}>Setting</a>
        </Col>
      </Row>
      <Row style={Styles.navMenuRow3} className="navMenuRow2">
        <Col span={3}>
          <a href="">
            <LoginOutlined style={Styles.navMenuRow2Icon} />
          </a>
        </Col>
        <Col span={21}>
          <a style={Styles.navMenuRow2ankertag}>Sign Out</a>
        </Col>
      </Row>
    </Card>
  </Menu>
);
const DropdownMenu = (
  <Card hoverable style={{ width: 190 }} className="DropdownMenuCard2">
    <Row style={Styles.navDropdownMenuR2}>
      <Col span={6}>
        <a href="" style={Styles.navA} style={Styles.navCardR1}>
          <BellOutlined
            style={Styles.navicons}
            style={Styles.navDropdownMenuAnkerTag}
          />
        </a>
      </Col>
      <Col span={18}>
        <a href="" style={Styles.navDropdownMenuAnkerTag}>
          Notification
        </a>
      </Col>
    </Row>

    <Row style={Styles.navDropdownMenuR2}>
      <Col span={6}>
        <a href="" style={Styles.navA} style={Styles.navCardR1}>
          <MailOutlined
            style={Styles.navicons}
            style={Styles.navDropdownMenuAnkerTag}
          />
        </a>
      </Col>
      <Col span={18}>
        <a href="" style={Styles.navDropdownMenuAnkerTag}>
          Message
        </a>
      </Col>
    </Row>
    <Row style={Styles.navDropdownMenuR2}>
      <Col span={6}>
        <a href="" style={Styles.navCardR1}>
          <Dropdown overlay={menu} trigger={["click"]}>
            <img
              src={pc1}
              alt=""
              style={Styles.navP}
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            />
          </Dropdown>
        </a>
      </Col>
      <Col span={18}>
        <Dropdown overlay={menu}>
          <a style={Styles.navDropdownMenuAnkerTag}>Profile</a>
        </Dropdown>
      </Col>
    </Row>
  </Card>
);

const Navbar = (props) => {
  return (
    <Row style={Styles.header}>
      <Col style={Styles.hPart1}>
        <div className="collapse" style={{ color: "white" }}>
          {props.button}
        </div>
        <div style={Styles.navMenuList} className="navMenuList">
          <ul style={Styles.navUl}>
            <a href="">
              <li>
                <h1 style={Styles.navHeading}>{props.businessTitle}Hotal</h1>
              </li>
            </a>
          </ul>
        </div>
      </Col>
      <Col style={Styles.hPart2} className="nav_menu_items">
        <ul style={Styles.navUl}>
          <a href="" style={Styles.navA}>
            <li style={Styles.navLi}>
              <BellOutlined style={Styles.navicons} />
            </li>
          </a>
          <a href="" style={Styles.navA}>
            <li>
              <MailOutlined style={Styles.navicons} />
            </li>
          </a>
          <a href="">
            <li>
              <Dropdown overlay={menu} trigger={["click"]}>
                <img
                  src={pc1}
                  alt=""
                  style={Styles.navP}
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                />
              </Dropdown>
            </li>
          </a>
        </ul>
      </Col>
      <Col className="nav_dropdown_menu">
        <Dropdown overlay={DropdownMenu} trigger={["click"]}>
          <MenuOutlined
            style={Styles.navicons}
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
          />
        </Dropdown>
      </Col>
    </Row>
  );
};
export default Navbar;