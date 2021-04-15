import React from "react";
import "antd/dist/antd.css";
import "./Sales.css";
import { Table, Row, Col, Button, Input } from "antd";
import styles from "./style";

// Ant design icon
import { TabletFilled } from "@ant-design/icons";

const { Search } = Input;

const columns = [
  {
    title: "Order Id",
    dataIndex: "order_id",
    key: "order_id",
  },
  {
    title: "Table No",
    dataIndex: "table_no",
    key: "table_no",
  },
  {
    title: "Menu",
    dataIndex: "menu",
    key: "1",
  },
  { title: "Total Amount", dataIndex: "total_amount", key: "13" },
  {
    title: "Action",
    key: "operation",
    render: () => (
      <div>
        <a>Edit</a>
        <a style={{ marginLeft: "10px" }}>Delete</a>
      </div>
    ),
  },
];

const data = [
  {
    order_id: "111",
    table_no: "n2",
    menu: "biryani",
    total_amount: "3000/-",
  },
  {
    order_id: "131",
    table_no: "A77",
    menu: "biryani,chai",
    total_amount: "5000/-",
  },
  {
    order_id: "111",
    table_no: "n2",
    menu: "biryani",
    total_amount: "3000/-",
  },
  {
    order_id: "131",
    table_no: "A77",
    menu: "biryani,chai",
    total_amount: "5000/-",
  },
];

const onSearch = (value) => console.log(value);

const Sales = () => {
  return (
    <>
      <Row style={styles.Salestablebody}>
        <Row>
          <Col style={styles.salesTableicon}>
            <TabletFilled />
          </Col>
          <Col>
            <h2 style={styles.salesTableheading}>Employees Management</h2>
          </Col>
        </Row>

        <Row style={styles.searchbar}>
          <Col xs={24} sm={24} md={8} lg={8} xl={8} style={styles.hbtn}>
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={16} xl={16}>
            <Row justify="end" gutter={(0, 20)} style={{alignItems: 'center',}}>
              <Col>
                <Button type="primary" style={styles.hbtn}>
                  Create Report
                </Button>
              </Col>
              <Col>
                <Button type="primary" style={styles.hbtn}>
                  Print PDF
                </Button>
              </Col>
              <Col>
                <Button type="danger" style={styles.hbtn}>
                  Clear History
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Table columns={columns} dataSource={data} className="salesTable"/>
      </Row>
    </>
  );
};

export default Sales;
