import React from "react";
import "antd/dist/antd.css";
import "./style.css";
import { Table, Input, Row, Col, Button } from 'antd';
import styles from "./style";
import { TabletFilled } from "@ant-design/icons";

const { Search } = Input;

const columns = [
  {
    title: 'Full Name',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
    width: 130,
  },
  {
    title: 'CNIC',
    dataIndex: 'cnic',
    width: 120,
    key: 'cnic',
    fixed: 'left',
  },
  { title: 'Address', dataIndex: 'address', key: '1', width: 200, },
  { title: 'Room Type', dataIndex: 'roomType', key: '2', width: 65, },
  { title: 'Phone Number', dataIndex: 'phoneNumber', key: '3', width: 100, },
  { title: 'Email', dataIndex: 'email', key: '4', width: 120, },
  { title: 'Rent', dataIndex: 'rent', key: '5', width: 80, },
  { title: 'No of Days', dataIndex: 'days', key: '6', width: 65, },
  { title: 'Check-In', dataIndex: 'checkIn', key: '7', width: 100, },
  { title: 'Chect-out', dataIndex: 'checkOut', key: '8', width: 100, },
  { title: 'Adults', dataIndex: 'adults', key: '9', width: 45, },
  { title: 'Kids', dataIndex: 'kids', key: '10', width: 45, },
  { title: 'Total', dataIndex: 'total', key: '11', width: 45, },
  { title: 'Room', dataIndex: 'room', key: '12', width: 45, },
  {
    title: 'Action',
    width: 100,
    key: 'operation',
    fixed: 'right',
    render: () => <div>
      <a>Edit</a>
      <a style={{ marginLeft: '10px' }}>Delete</a>
    </div>,

  },
];

const data = [
  {
    name: 'Ali Vijdan',
    cnic: '71838 - 8272627 - 3',
    address: 'New York Park',
    roomType: 'VIP',
    phoneNumber: '03627272100',
    email: 'johnVijdan@gmail.com',
    rent: 'PKR 10000',
    days: '46',
    checkIn: '31-March-2021',
    checkOut: '03-April-2021',
    adults: '3',
    kids: '2',
    total: '5',
    room: '202',
  },
  {
    name: 'Shakeel',
    cnic: '71838 - 8272627 - 3',
    address: 'New York Park',
    roomType: 'VIP',
    phoneNumber: '03627272100',
    email: 'john@gmail.com',
    rent: 'PKR 10000',
    days: '4',
    checkIn: '31-March-2021',
    checkOut: '03-April-2021',
    adults: '3',
    kids: '2',
    total: '5',
    room: '2',
  },
  {
    name: 'Shakeel',
    cnic: '71838 - 8272627 - 3',
    address: 'New York Park',
    roomType: 'VIP',
    phoneNumber: '03627272100',
    email: 'john@gmail.com',
    rent: 'PKR 10000',
    days: '4',
    checkIn: '31-March-2021',
    checkOut: '03-April-2021',
    adults: '3',
    kids: '2',
    total: '5',
    room: '2',
  },
];

const onSearch = value => console.log(value);

const Customer = () => {
  return (
    <>
    <Row style={styles.Salestablebody}>
        <Row>
          <Col style={styles.salesTableicon}>
            <TabletFilled />
          </Col>
          <Col>
            <h2 style={styles.salesTableheading}>Sales and Reporting</h2>
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
          <Row justify="end" gutter={0, 20}>
            <Col>
              <Button type="primary" style={styles.hbtn}>Create Report</Button>
            </Col>
            <Col>
              <Button type="primary" style={styles.hbtn}>Print PDF</Button>
            </Col>
            <Col>
              <Button type="danger" style={styles.hbtn}>Clear History</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Table bordered columns={columns} dataSource={data} scroll={{ x: 2300 }} />
      </Row>
    </>
  );
};



export default Customer;
