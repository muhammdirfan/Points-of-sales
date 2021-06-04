import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form, Row, Col, Modal, Select } from 'antd';
import { TabletFilled } from "@ant-design/icons";
import styles from './style.js';
import './Sales.css';

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

class Sales extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
        editable: true,
        fixed: "left",
      },
      {
        title: "Product Name",
        dataIndex: "productname",
        key: "product_name",
        editable: true,
      },
      {
        title: "Categary",
        dataIndex: "categray",
        key: "categray",
        editable: true
      },
      {
        title: "Quantity",
        dataIndex: "quantity",
        key: "1",
        editable: true
      },
      {
        title: "Sales",
        dataIndex: "sales",
        key: "1",
        editable: true
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "1",
        editable: true
      },
      { title: "Total Amount", dataIndex: "total_amount", key: "13", editable: true },
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
          date: '22th Jan 2020',
          productname: "131",
          categray: "A77",
          quantity: "4560",
          sales: "3230",
          price: "5000/-",
          total_amount: "3000/-",
        },
        {
          date: '22th Jan 2020',
          productname: "131",
          categray: "A77",
          quantity: "4560",
          sales: "3230",
          price: "5000/-",
          total_amount: "3000/-",
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
      date: `${count}th May 2021`,
      productname: `${count} Milk`,
      categray: `B${count}`,
      quantity: `${count} 560`,
      sales: `${count} 230`,
      price: `${count}000/-`,
      total_amount: `${count}000/-`,
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

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
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
               <Button
                  onClick={this.showModal}
                  type="primary"
                  style={styles.hbtn}
                >
                  Add New
                </Button>
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
          style={{marginTop: '50px'}}
        />
      </Row>


       {/* Modal section */}
       <Modal
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          width={600}
        >
          <Form
        name="basic"
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        style={styles.From}
        className="roomsForm"
      >
        <div>
          <h2 style={styles.RoomsHeading}>Sales and Reporting</h2>
          <Row className="main-row" gutter={(20, 20)}>
            <Col span={24} />
            <Col className="gutter-row" xl={24} lg={24} md={24} sm={24} xs={24}>
              <Form.Item
                name="date"
                rules={[
                  { required: true, message: "Please input your date!" },
                ]}
              >
                <Input placeholder="Date" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xl={24} lg={24} md={24} sm={24} xs={24}>
              <Form.Item
                name="productname"
                rules={[
                  { required: true, message: "Please input your product Name!" },
                ]}
              >
                <Input placeholder="Product Name" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xl={24} lg={24} md={24} sm={24} xs={24}>
              <Form.Item
                name="catergray"
                rules={[
                  { required: true, message: "Please input your catergray!" },
                ]}
              >
                <Input placeholder="Catergray" />
              </Form.Item>
            </Col>
            <Col span={24} />

            <Col className="gutter-row" xl={24} lg={24} md={24} sm={24} xs={24}>
              <Form.Item
                name="quantity"
                rules={[
                  { required: true, message: "Please input your quantity!" },
                ]}
              >
                <Input placeholder="Quantity" />
              </Form.Item>
            </Col>
            <Col
             xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item 
              name="sales"
              rules={[
                { required: true, message: "Please input your sales!" },
              ]}>
                <Input placeholder="Sales" />
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item 
              name="price"
              rules={[
                { required: true, message: "Please input your price!" },
              ]}>
                <Input placeholder="Price" />
              </Form.Item>
            </Col>
            <Col
             xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item 
              name="totalamount"
              rules={[
                { required: true, message: "Please input your total amount!" },
              ]}>
                <Input placeholder="Total Amount" />
              </Form.Item>
            </Col>

            <Col span={24} />
            <Col lg={8} xl={8} md={8} sm={8} xs={8}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  shape="round"
                  size={"large"}
                  onClick={this.handleAdd}

                >
                  Add
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </div>
      </Form>
        </Modal>
      </div>
    );
  }
}

export default Sales;