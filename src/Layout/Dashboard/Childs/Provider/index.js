import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form, Row, Col } from 'antd';
import { TabletFilled } from "@ant-design/icons";
import styles from './style.js';
import './style.css';

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

class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'Date',
        dataIndex: 'date',
        width: 150,
        editable: true,
      },
      {
        title: 'Provider Name',
        dataIndex: 'provider',
        width: 200,
        editable: true,
      },
      {
        title: 'Company Name',
        dataIndex: 'company',
        width: 300,
        editable: true,
      },
      {
        title: 'Items',
        dataIndex: 'items',
        width: 200,
        editable: true,
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        width: 150,
        editable: true,
      },
      {
        title: 'Price',
        dataIndex: 'price',
        width: 100,
        editable: true,
      },
      {
        title: 'Total Cost',
        dataIndex: 'totalcost',
        width: 100,
        editable: true,
      },
      {
        title: 'Paid',
        dataIndex: 'paid',
        width: 100,
        editable: true,
      },
      {
        title: 'Remaining',
        dataIndex: 'remaining',
        width: 100,
        editable: true,
      },
      {
        title: 'Operation',
        dataIndex: 'operation',
        fixed: 'right',
        width: 100,
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
          key: '0',
          date: '10 Sep, 2020',
          provider: 'Asad',
          company: 'ABC Pvt Ltd',
          items: 'rice',
          quantity: '40kg',
          price: '125',
          totalcost: '665',
          paid: '3000',
          remaining: '2000',
        },
        {
          key: '1',
          date: '23 Feb, 2020',
          provider: 'Ali',
          company: 'XYZ Pvt Ltd',
          items: 'rice',
          quantity: '40kg',
          price: '125',
          totalcost: '665',
          paid: '3000',
          remaining: '2000',
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
      date: `${count} Dec, 2020`,
      provider: `Ali${count}`,
      company: `SDF ${count} Pvt Ltd`,
      items: `rice${count}`,
      quantity: `${count}0kg`,
      price: `${count}32`,
      totalcost: `${count}345`,
      paid: `${count}000`,
      remaining: `${count}000`,
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
            <h2 style={styles.salesTableheading}>Provider Management</h2>
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
        <Button
          onClick={this.handleAdd}
          type="primary"
          style={styles.hbtn}
        >
          Add a row
        </Button>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
          scroll={{ x: 2300 }}
        />
      </Row>
      </div>
    );
  }
}

export default Provider;