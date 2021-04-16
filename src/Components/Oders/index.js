import React, { useState } from 'react';
import {
      Row,
      Col,
      Table,
      Input,
      InputNumber,
      Popconfirm,
      Form,
      Typography,
      Button,
      Menu,
      Dropdown, 
      Select,
    } from 'antd';
    import Styles from "./style";
import { DownOutlined } from '@ant-design/icons';
import  "./Oders.css"
const originData = [];

for (let i = 0; i < 6; i++) {
  originData.push({
    key: i.toString(),
    Menu: `Edrward ${i}`,
    Quantity: 2,
    Price: 200,
    TotelAmount: 200  ,
  });
}

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
            width:200,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      Menu: '',
      Quantity: '',
      Price: '',
      TotelAmount:'',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Menu',
      dataIndex: 'Menu',
      width: '30%',
      editable: true,
    },
    {
      title: 'Quantity',
      dataIndex: 'Quantity',
      width: '20%',
      editable: true,
    },
    {
      title: 'Price',
      dataIndex: 'Price',
      width: '20%',
      editable: true,
    },
    {
        title: 'Totel Amount',
        dataIndex: 'Totel Amount',
        width: '20%',
        editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
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
  const menu = (
    <Menu>
      <Menu.Item key="0">
        1
      </Menu.Item>
      <Menu.Item key="1">
        2
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3</Menu.Item>
    </Menu>
    
  );
  function onChange(value) {
    console.log('changed', value);
  }

  const { Option } = Select;

 
  return (
    <Form form={form} component={false} >
      
       <div className="headSearch" style={{marginTop:'30px'}}>
           <div className="inputBtn">

           <Select
           className="input"
  showSearch
  style={{ width: 200, }}
  placeholder="Search to Select"
  optionFilterProp="children"
  filterOption={(input, option) =>
    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
  }
  filterSort={(optionA, optionB) =>
    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
  }
   >
     <Option value="1">Food</Option>
     <Option value="2">Kahari</Option>
     <Option value="3">Chola</Option>
     <Option value="4">Palow</Option>
     <Option value="5">Mash Dal</Option>
     <Option value="6">Choimon</Option>
     <Option value="7">Biryani</Option>
   </Select>

             
           {/* <input  placeholder="Search" />  */}
           
           <InputNumber min={1} max={1000}  defaultValue={"0"} onChange={onChange} placeholder="Quantity"/>
            <Input placeholder="Price" className="inputBox"/>
           </div>
          <div className="searchBtns">
              
              <button>Add</button>
          </div>
       </div>

        
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
        
      />

      <div className="footerBtn">
        <button>Save</button>
        <button>Print</button>
        </div>       
  
    </Form>
   
  );
};

// ReactDOM.render(<EditableTable />, mountNode);
export default EditableTable;