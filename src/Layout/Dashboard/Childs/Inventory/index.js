import React from "react";
import "antd/dist/antd.css";
import "./style.css";
import { Table, Input, Row, Col, Button,Popconfirm, Typography, } from 'antd';
import { TabletFilled } from "@ant-design/icons";
import styles from "./style";

const { Search } = Input;


const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    fixed: 'left',
    width: 30,
  },
  {
    title: 'Product Name',
    dataIndex: 'product',
    width: 50,
    key: 'product',
    fixed: 'left',
  },
  {
    title: 'Product Categray',
    dataIndex: 'categray',
    width: 50,
    key: 'categray',
    fixed: 'left',
  },
  { title: 'Stock', dataIndex: 'stock', key: '1', width: 50, },
  { title: 'Sale', dataIndex: 'sale', key: '2', width: 40, },
  { title: 'Price', dataIndex: 'price', key: '3', width: 40, },
  { title: 'Profit', dataIndex: 'profit', key: '4', width: 30, },
  {
    title: 'Action',
    width: 30,
    key: 'operation',
    fixed: 'right',
    render: (_, record) => {
      const editable = isEditing(record);
      return editable ? (
        <span>
          <a
            href="javascript:;"
            onClick={() => save(record.key)}
            style={{
              marginRight: 8,
            }}
          >
            Save
          </a>
          <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
            <a>Cancel</a>
          </Popconfirm>
        </span>
      ) : (
        <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
          Edit
        </Typography.Link>
      );
    },
    render: () => <div>
      <a style={{ marginLeft: '10px' }}>Delete</a>
    </div>,

  },
];

const mergedColumns = columns.map((col) => {
  if (!col.editable) {
    return col;
  }

  return {
    ...col,
    onCell: (record) => ({
      record,
      inputType: col.dataIndex === 'age' ? 'number' : 'text',
      dataIndex: col.dataIndex,
      title: col.title,
      editing: isEditing(record),
    }),
  };
});

const data = [
  {
    date: '12 Dec, 2021',
    product: 'Biryani',
    categray: 'dish',
    stock: '4544',
    sale: '62100',
    price: '4433',
    profit: '4675753',
  },
  {
    date: '09 Jan, 2020',
    product: 'Biryani',
    categray: 'dish',
    stock: '4544',
    sale: '62100',
    price: '4433',
    profit: '4675753',
  },
  {
    date: '11 Feb, 2020',
    product: 'Biryani',
    categray: 'dish',
    stock: '4544',
    sale: '62100',
    price: '4433',
    profit: '4675753',
  },
   {
    date: '23 Aug, 2020',
    product: 'Biryani',
    categray: 'dish',
    stock: '4544',
    sale: '62100',
    price: '4433',
    profit: '4675753',
  },
];

const onSearch = value => console.log(value);

const Inventary = () => {
  return (
    <>
    <Row style={styles.Salestablebody}>
        <Row>
          <Col style={styles.salesTableicon}>
            <TabletFilled />
          </Col>
          <Col>
            <h2 style={styles.salesTableheading}>Inventary Management</h2>
          </Col>
        </Row>
      <Row>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} >
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
      <Table bordered columns={columns} dataSource={data} style={{marginTop: '30px'}}/>
      </Row>
    </>
  );
};



export default Inventary;
