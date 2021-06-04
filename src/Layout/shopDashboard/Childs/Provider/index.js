import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form, Row, Col, Modal } from 'antd';
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

  state = { visible: false };

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
          <h2 style={styles.RoomsHeading}>Provider Management</h2>
          <Row className="main-row" gutter={(20, 20)}>
            <Col span={24} />
            <Col className="gutter-row" xl={24} lg={24} md={24} sm={24} xs={24}>
              <Form.Item
                name="providername"
                rules={[
                  { required: true, message: "Please input your provider Name!" },
                ]}
              >
                <Input placeholder="Provider Name" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xl={24} lg={24} md={24} sm={24} xs={24}>
              <Form.Item
                name="companyname"
                rules={[
                  { required: true, message: "Please input your company name!" },
                ]}
              >
                <Input placeholder="Company Name" />
              </Form.Item>
            </Col>
            <Col span={24} />

            <Col className="gutter-row" xl={24} lg={24} md={24} sm={24} xs={24}>
              <Form.Item
                name="items"
                rules={[
                  { required: true, message: "Please input your items !" },
                ]}
              >
                <Input placeholder="Items" />
              </Form.Item>
            </Col>
            <Col
             xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item 
              name="quantity"
              rules={[
                { required: true, message: "Please input your quantity !" },
              ]}>
                <Input placeholder="Quantity" />
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
              name="totalcost"
              rules={[
                { required: true, message: "Please input your total cost!" },
              ]}>
                <Input placeholder="Total Cost" />
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item 
              name="paid"
              rules={[
                { required: true, message: "Please input your paid!" },
              ]}>
                <Input placeholder="Paid" />
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item 
              name="remaining"
              rules={[
                { required: true, message: "Please input your remaining!" },
              ]}>
                <Input placeholder="Remaining" />
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

export default Provider;