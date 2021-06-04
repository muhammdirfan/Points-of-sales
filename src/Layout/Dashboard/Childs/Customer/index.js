import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form, Row, Col } from 'antd';
import { TabletFilled } from "@ant-design/icons";
import styles from './style.js';
import './style.css';

import {Link} from 'react-router-dom';

const EditableContext = React.createContext(null);

const { Search } = Input;

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

const onSearch = (value) => console.log(value);

class Customer extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'Full Name',
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
        width: 130,
        editable: true,
      },
      {
        title: 'CNIC',
        dataIndex: 'cnic',
        width: 120,
        key: 'cnic',
        editable: true,
      },
      { title: 'Address', dataIndex: 'address', key: '1', width: 200, editable: true, },
      { title: 'Room Type', dataIndex: 'roomType', key: '2', width: 65, editable: true, },
      { title: 'Phone Number', dataIndex: 'phoneNumber', key: '3', width: 100, editable: true, },
      { title: 'Email', dataIndex: 'email', key: '4', width: 130, editable: true, },
      { title: 'Rent', dataIndex: 'rent', key: '5', width: 80, editable: true, },
      { title: 'No of Days', dataIndex: 'days', key: '6', width: 65, editable: true, },
      { title: 'Check-In', dataIndex: 'checkIn', key: '7', width: 100, editable: true, },
      { title: 'Chect-out', dataIndex: 'checkOut', key: '8', width: 100, editable: true, },
      { title: 'Adults', dataIndex: 'adults', key: '9', width: 50, editable: true, },
      { title: 'Kids', dataIndex: 'kids', key: '10', width: 45, editable: true, },
      { title: 'Total', dataIndex: 'total', key: '11', width: 45, editable: true, },
      { title: 'Room', dataIndex: 'room', key: '12', width: 65, editable: true, },
      {
        title: 'Operation',
        width: 60,
        dataIndex: 'operation',
        fixed: 'right',
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [
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
          room: '102',
        },
        {
          name: 'Shakeel',
          cnic: '71838-8272627-3',
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
          room: '105',
        },
      ],
      count: 2,
    };
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Asad${count}`,
      cnic: `${count}1838-8272627-3`,
      address: `New York Park ${count}`,
      roomType: 'VIP',
      phoneNumber: `0362727210${count}`,
      email: 'ali@gmail.com',
      rent: `PKR${count}`,
      days: `${count}`,
      checkIn: `${count} Dec, 2020`,
      checkOut: `${count} Feb, 2020`,
      adults: `${count}`,
      kids: `${count}`,
      total: `${count}`,
      room: `10${count} `,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
         <Row style={styles.Salestablebody}>
        <Row>
          <Col style={styles.salesTableicon}>
            <TabletFilled />
          </Col>
          <Col>
            <h2 style={styles.salesTableheading}>Customer Management</h2>
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
              className="searchInput"
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
              <Col>
                <Link to="/dash/rooms">
                <Button
                  type="primary"
                  style={styles.hbtn}
                >
                  Add New
                </Button>
                </Link>
                </Col>
            </Row>
          </Col>
        </Row>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
          scroll={{ x: 2300 }}
          style={{marginTop: "50px"}}
        />
      </Row>
      </div>
    );
  }
}

export default Customer;