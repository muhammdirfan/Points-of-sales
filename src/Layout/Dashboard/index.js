import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from "react-router-dom";
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
import Roomtype from "../../Layout/Dashboard/Childs/Roomtype/index.js";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
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
      width: { marginLeft: "250px" },
    };
  }

  toggle = (props) => {
    if (this.state.collapsed) {
      this.setState({
        collapsed: !this.state.collapsed,
        width: { marginLeft: "250px" },
      });
    } else {
      this.setState({
        collapsed: !this.state.collapsed,
        width: { marginLeft: "0px" },
      });
    }
  };


  render() {
    // let match = useRouteMatch();
    const username = localStorage.getItem('uname');

    const email = localStorage.getItem('email');
    
    const routes = [
      {
        path: "/dash",
        exact: true,
        child: () => <ChildHome />,
      },
      {
        path: "/dash/sales",
        exact: true,
        child: () => <Sales />,
      },
      {
        path: "/dash/inventory",
        exact: true,
        child: () => <Inventory />,
      },
      {
        path: "/dash/customer",
        child: () => <Customer />,
      },
      {
        path: "/dash/provider",
        exact: true,
        child: () => <Provider />,
      },
      {
        path: "/dash/rooms",
        exact: true,
        child: () => <Rooms />,
      },
      {
        path: "/dash/employees",
        exact: true,
        child: () => <Employees />,
      },
      {
        path: "/dash/billing",
        exact: true,
        child: () => <Billing />,
      },
      {
        path: "/dash/roomtype",
        exact: true,
        child: () => <Roomtype />,
      }
    ];
    return (
      <Router>
        <Layout>
          {/* sidebar starts here */}
          <Sider
            width="250px"
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
            className="sidebar"
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
              sideicon8={<img src={Icon3} className="sideicon" />}
              // sideItem_names
              Sideitem0="Dashboard"
              Sideitem1="Sales and Reporting"
              Sideitem2="Inventory Managment"
              Sideitem3="Customer Managment"
              Sideitem5="Provider Managment"
              Sideitem4="Rooms Reservation"
              Sideitem6="Employees Managment"
              Sideitem7="Billing order Processing"
              Sideitem8="Room Type"
            />
          </Sider>
          {/* sidebar ends here */}

          {/* body layout starts here */}
          <Layout
            style={({ background: "#eeeeee" }, this.state.width)}
            className="site-layout"
          >
            {/* header starts here */}
            <Header style={this.state.navWidth}>
              <Navbar
              username={username}
              email={email}
                brandName="Hotel"
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
                padding: "0px 50px",
                margin: "0px",
                minHeight: "100vh",
                backgroundColor: "#eeeeee",
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
                <Redirect to="/dash" />
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
