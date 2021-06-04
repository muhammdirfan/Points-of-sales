import React, { useState } from "react";

// CSS/style
import "./navbar.css";
import Styles from "./style";

// antd
import { Layout, Menu, Breadcrumb, Row, Col, Dropdown, Card } from "antd";
import {Link} from 'react-router-dom';

// Icons
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BellFilled,
  UnorderedListOutlined,
  MailFilled ,
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
import pc2 from "../../assests/images/avatar.png";

const { Header, Content, Footer } = Layout;

const menu = (
  <Menu className="helloPakistan">
    <Card hoverable style={{ width: 240 }}>
      <Row style={Styles.navCardR1}>
        <Col span={24}>
          <img src={pc1} alt="" style={Styles.navCardP1} />
          <h4 style={Styles.navCardh4}>User Name</h4>
          <p style={Styles.navCardp}>User Email</p>
          <p style={Styles.navCardp}>Edit Title</p>
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
          <Link to="/login">
          <a style={Styles.navMenuRow2ankertag}>Sign Out</a>
          </Link>
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
          <BellFilled 
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
        <MailFilled
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
              src={pc2}
              alt=""
              style={Styles.navP}
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            />
          </Dropdown>
        </a>
      </Col>
      <Col span={18}>
          <a style={Styles.navDropdownMenuAnkerTag}>Profile</a>
      </Col>
    </Row>
  </Card>
);

const Navbar = (props) => {
  return (
    <Row style={Styles.header}>
      <Col style={Styles.hPart1}>
        <div className="collapse" style={Styles.navcolapse} className="navcolapse">
          {props.button}
        </div>
        <div style={Styles.navMenuList} className="navMenuList">
          <ul style={Styles.navUl}>
            <a href="">
              <li>
                <h1 style={Styles.navHeading}>{props.businessTitle}{props.brandName}</h1>
              </li>
            </a>
          </ul>
        </div>
      </Col>
      <Col style={Styles.hPart2} className="nav_menu_items">
        <ul style={Styles.navUl}>
          <a href="" style={Styles.navA}>
            <li style={Styles.navLi}>
              <BellFilled  style={Styles.navicons} />
            </li>
          </a>
          <a href="" style={Styles.navA}>
            <li>
            <MailFilled style={Styles.navicons} />
            </li>
          </a>
          <a href="">
            <li>
              <Dropdown overlay={menu} trigger={["click"]}>
                <img
                  src={pc2}
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
            style={Styles.navmenuicon}
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
          />
        </Dropdown>
      </Col>
    </Row>
  );
};
export default Navbar;
