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

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        width: '10%',
        editable: true,
      },
      {
        title: 'Product Name',
        dataIndex: 'product',
        editable: true,
      },
      {
        title: 'Cateragy',
        dataIndex: 'cateragy',
        editable: true,
      },
      {
        title: 'Stock',
        dataIndex: 'stock',
        editable: true,
      },
      {
        title: 'Sales',
        dataIndex: 'sales',
        editable: true,
      },
      {
        title: 'Operation',
        dataIndex: 'operation',
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
          id: '100',
          product: 'Biryani',
          cateragy: 'Dish',
          stock: '456',
          sales: '765',
        },
        {
          key: '1',
          id: '101',
          product: 'Biryani',
          cateragy: 'Dish',
          stock: '236',
          sales: '345',
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
      id: `10${count}`,
      product: `Biryani ${count}`,
      cateragy: 'Dish',
      stock: '32',
      sales: `345 ${count}`,
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
            <h2 style={styles.salesTableheading}>Inventory Management</h2>
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
        />
      </Row>
      </div>
    );
  }
}

export default Inventory;