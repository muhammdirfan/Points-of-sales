import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./dashboard.css";
import "antd/dist/antd.css";
import Styles from "./style.js";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Sales from "../../Layout/Dashboard/Childs/Sales";
import Inventory from "../../Layout/Dashboard/Childs/Inventory";
import Customer from "../../Layout/Dashboard/Childs/Customer";
import Provider from "../../Layout/Dashboard/Childs/Provider";
import Rooms from "../../Layout/Dashboard/Childs/Rooms";
import Employees from "../../Layout/Dashboard/Childs/Employees";
import Billing from "../../Layout/Dashboard/Childs/Billing";
import ChildHome from "../../Layout/Dashboard/Childs/ChildHome/index.js";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import styles from "./style.js";

import Icon0 from "../../assests/icons/dashboard-interface.svg";
import Icon1 from "../../assests/icons/sales.svg";
import Icon2 from "../../assests/icons/inventory.svg";
import Icon3 from "../../assests/icons/bill.svg";
import Icon4 from "../../assests/icons/room-key (2).svg";
import Icon5 from "../../assests/icons/accountant (1).svg";
import Icon6 from "../../assests/icons/Employees.svg";
import Icon7 from "../../assests/icons/settings.svg";
// import sub antd
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

// dashboard/home page
class dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      width: { marginLeft: "200px" },
      navWidth: { position: "fixed", width: "85%", zIndex: 1 },
    };
  }

  toggle = (props) => {
    if (this.state.collapsed) {
      this.setState({
        collapsed: !this.state.collapsed,
        width: { marginLeft: "200px" },
        navWidth: { position: "fixed", width: "85%", zIndex: 1 },
      });
    } else {
      this.setState({
        collapsed: !this.state.collapsed,
        width: { marginLeft: "0px" },
        navWidth: { position: "fixed", width: "100%", zIndex: 1 },
      });
    }
  };

  render() {
    const routes = [
      {
        path: "/dash",
        exact: true,
        child: () => <ChildHome />,
      },
      {
        path: "/sales",
        child: () => <Sales />,
      },
      {
        path: "/inventory",
        child: () => <Inventory />,
      },
      {
        path: "/customer",
        child: () => <Customer />,
      },
      {
        path: "/provider",
        child: () => <Provider />,
      },
      {
        path: "/rooms",
        child: () => <Rooms />,
      },
      {
        path: "/employees",
        child: () => <Employees />,
      },
      {
        path: "/billing",
        child: () => <Billing />,
      },
    ];
    return (
      <Router>
        <Layout>
          {/* sidebar starts here */}
          <Sider
            className="sider"
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            style={styles.Sider}
          >
            <Sidebar
              // sideicons
              sideicon0={<img src={Icon0} className="sideicon" />}
              sideicon1={<img src={Icon1} className="sideicon" />}
              sideicon2={<img src={Icon2} className="sideicon" />}
              sideicon3={<img src={Icon7} className="sideicon" />}
              sideicon4={<img src={Icon4} className="sideicon" />}
              sideicon5={<img src={Icon5} className="sideicon" />}
              sideicon6={<img src={Icon6} className="sideicon" />}
              sideicon7={<img src={Icon3} className="sideicon" />}
              // sideItem_names
              Sideitem0="Dashboard"
              Sideitem1="Sales and Reporting"
              Sideitem2="Inventory Managment"
              Sideitem3="Customer Managment"
              Sideitem5="Provider Managment"
              Sideitem4="Rooms Reservation"
              Sideitem6="Employees Managment"
              Sideitem7="Billing order Processing"
            />
          </Sider>
          {/* sidebar ends here */}

          {/* body layout starts here */}
          <Layout
            style={({ background: "#f0f2f5" }, this.state.width)}
            className="site-layout"
          >
            {/* header starts here */}
            <Header style={this.state.navWidth}>
              <Navbar
                button={React.createElement(
                  this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: this.toggle,
                  }
                )}
              />
            </Header>
            {/* header ends here*/}

            <Content
              style={{
                padding: "100px 50px 0px",
                margin: "0px",
                backgroundColor: "#d6d5d5",
              }}
            >
              <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.child />}
                  />
                ))}
              </Switch>
            </Content>
          </Layout>
          {/* body layout ends here */}
        </Layout>
      </Router>
    );
  }
}
export default dashboard;
