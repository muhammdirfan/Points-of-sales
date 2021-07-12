import React, {useState} from "react";
import {
  Form,
  Input,
  Row,
  Col,
  Select,
  Button,
} from "antd";
import Styles from "./Styles";
import "antd/dist/antd.css";
import userInfo from "../../../../Apis/userInfo";

const { Option } = Select;

const userinfo = new userInfo();

const Roomtype = () => {

  const [getRoomType, setRoomType] = useState("");

  const roomType = () => {
    if(getRoomType == ""){
      alert("Please fill the feild!");
    }
    else{
      const roomTypeData = userinfo.roomType(getRoomType);
      roomTypeData.then((roomTypeRes) => {
        console.log(roomTypeRes, "roomTypeRes")
      })
    }
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={Styles.From}
        className="roomsForm"
      >
        <div>
          <h2 style={Styles.RoomsHeading}>Room Type</h2>
          <Row className="main-row" gutter={(20, 20)}>
            <Col span={24} />
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                name="roomtype"
                label="Please Enter Room Type"
                style={{display: "block"}}
                rules={[
                  {  message: "Please input your Room Type!" },
                ]}
              >
                <Input placeholder="Room Type" onChange={(e) => setRoomType(e.target.value)} />
              </Form.Item>
            </Col>
            <Col lg={6} xl={3} md={4} sm={12} xs={12}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  shape="round"
                  size={"large"}
                  className="roomSubmit"
                  Style={Styles.Submit}
                  onSubmit={() => roomType()}
                >
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </div>
      </Form>
    </>
  );
};

export default Roomtype;
