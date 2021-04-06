import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form,Modal, Typography, Button } from 'antd';
import './employees.css';

const originData = [];

// for (let i = 0; i < 100; i++) {
//   originData.push({
//     key: i.toString(),
//     name: `Edrward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`,
//   });
// }

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

const Employees = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');

  const showModal = () => {
    setVisible(true);


  };


  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };
  




  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
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
      title: 'Name',
      dataIndex: 'Name',
      width: '15%',
      editable: true,
    },
    {
      title: 'Address',
      dataIndex: 'Address',
      width: '20%',
      editable: true,
    },
    {
      title: 'CNIC',
      dataIndex: 'CNIC',
      width: '10%',
      editable: true,
    },
    {
      title: 'Desgination',
      dataIndex: 'CNIC',
      width: '10%',
      editable: true,
    },
    {
        title: 'date of join',
        dataIndex: 'date of join',
        width: '15%',
        editable: true,
    },
    {
      title: 'Salary',
      dataIndex: 'Salary',
      width: '10%',
      editable: true,
  },
  {
    title: 'Experience',
    dataIndex: 'Experience',
    width: '10%',
    editable: true,
},
    {
      title: 'Action',
      dataIndex: 'Action',
     

      
      render: (_, record) => {
        const editable = isEditing(record);
      

         

        return editable ? (
          
          <span>
            <a
              href="javascript:;"
              onClick={() => edit(record.key)}
              style={{
                marginRight: 8,
              }}
            >
            save
            </a>
            <Popconfirm title="Are you sure" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
            
          <div>
            <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit  
          </Typography.Link>
          <Typography.Link onClick={() => edit(record)}>
              delete
          </Typography.Link>
          </div>
         
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
  return (
    <Form form={form} component={false}>
      
       <div className="headSearch">
           <div className="inputBtn">
           <input  placeholder="Search" /> 
              <button>Search</button>
           </div>
          <div className="searchBtns">
              
          <Button type="primary" onClick={showModal}>
        Add
      </Button>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>


              
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
    </Form>
  );
};

export default Employees;