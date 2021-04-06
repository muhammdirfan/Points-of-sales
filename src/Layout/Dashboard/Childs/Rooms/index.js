import React from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  InputNumber,
  Row,
  Col,
  Select,
  DatePicker,
  Typography,
} from "antd";
import "./rooms.css";
import Styles from "./Styles";
import "antd/dist/antd.css";
import styles from "./Styles";

const { Option } = Select;

const Rooms = () => {
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
      >
        <div>
          <Row gutter={(20, 20)} justify="center">
            <h2 style={Styles.RoomsHeading}>Reservation Details</h2>
            <Col span={24} />
            <Col xl={6} lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                name="firstname"
                rules={[
                  { required: true, message: "Please input your First Name!" },
                ]}
              >
                <Input placeholder="First Name" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xl={6} lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                name="lastname"
                rules={[
                  { required: true, message: "Please input your Last Name!" },
                ]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
            </Col>
            <Col span={24} />

            <Col xl={6} lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                name="address"
                rules={[
                  { required: true, message: "Please input your Address !" },
                ]}
              >
                <Input placeholder="Address" />
              </Form.Item>
            </Col>
            <Col xl={6} lg={12} md={12} sm={24} xs={24}>
              <Form.Item>
                {/* <label>Room Type</label> */}
                <Select placeholder="Room Type">
                  <Select.Option value="single">Single</Select.Option>
                  <Select.Option value="double">Double</Select.Option>
                  <Select.Option value="triple">Triple</Select.Option>
                  <Select.Option value="quad">Quad</Select.Option>
                  <Select.Option value="quad">Quad</Select.Option>
                  <Select.Option value="queen">Queen</Select.Option>
                  <Select.Option value="king">King</Select.Option>
                  <Select.Option value="twin">Twin</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24} />
            <Col xl={6} lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input
                  placeholder="Phone Number"
                  addonBefore={"+92"}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
            <Col xl={6} lg={12} md={12} sm={24} xs={24}>
              <Form.Item name={["user", "email"]} rules={[{ type: "email" }]}>
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
            <Col span={24} />
            <Col xl={4} lg={8} md={8} sm={24} xs={24}>
              <Form.Item name="cnic">
                <Input placeholder="CNIC" />
              </Form.Item>
            </Col>
            <Col xl={4} lg={8} md={8} sm={24} xs={24}>
              <Form.Item name="rent">
                <Input placeholder="Rent" />
              </Form.Item>
            </Col>
            <Col xl={4} lg={8} md={8} sm={24} xs={24}>
              <Form.Item name="days">
                <Input placeholder="No of days" />
              </Form.Item>
            </Col>
            <Col span={24} />
            <Col xl={6} lg={12} md={12} sm={24} xs={24}>
              <Form.Item type="date">
                <label>Check-In Date</label>
                <Input type="date" />
              </Form.Item>
            </Col>
            <Col xl={6} lg={12} md={12} sm={24} xs={24}>
              <Form.Item type="date">
                <label>Check-Out Date</label>
                <Input type="date" />
              </Form.Item>
            </Col>
            <Col span={24} />

            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
              <Row justify="center">
                <Col lg={6} xl={5} md={4} sm={6} xs={12}>
                  <Form.Item>
                    <label>Adults</label>
                    <br></br>
                    <InputNumber min={0} max={100} />
                  </Form.Item>
                </Col>
                <Col lg={6} xl={5} md={4} sm={6} xs={12}>
                  <Form.Item>
                    <label>Children</label>
                    <br></br>
                    <InputNumber min={0} max={100} />
                  </Form.Item>
                </Col>
                <Col lg={6} xl={5} md={4} sm={6} xs={12}>
                  <Form.Item>
                    <label>Total</label>
                    <br></br>
                    <InputNumber min={0} max={100} />
                  </Form.Item>
                </Col>
                <Col lg={6} xl={5} md={4} sm={6} xs={12}>
                  <Form.Item>
                    <label>Room</label>
                    <br></br>
                    <InputNumber min={0} max={100} />
                  </Form.Item>
                </Col>
              </Row>
            </Col>

            <Col span={24} />
            <Col lg={6} xl={3} md={4} sm={12} xs={12}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  shape="round"
                  size={"large"}
                  className="roomSubmit"
                  Style={styles.Submit}
                >
                  Reserve
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </div>
      </Form>
    </>
  );
};

export default Rooms;
