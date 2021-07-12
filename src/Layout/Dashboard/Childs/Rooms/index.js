import React, { useState } from "react";
import { Form, Input, Button, InputNumber, Row, Col, Select } from "antd";
import "./rooms.css";
import Styles from "./Styles";
import "antd/dist/antd.css";
import styles from "./Styles";
import userInfo from "../../../../Apis/userInfo";
import Loading from "../../../../Components/Loading/index.js";

const { Option } = Select;

const userinfo = new userInfo();

const Rooms = () => {
  const [getFirstName, setFirstName] = useState("");
  const [getLastName, setLastName] = useState("");
  const [getAddress, setAddress] = useState("");
  const [getRoomType, setRoomType] = useState("");
  const [getCellno, setCellno] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getcnic, setcnic] = useState("");
  const [getRent, setRent] = useState("");
  const [getNumberOfDays, setNumberOfDays] = useState("");
  const [getCheckInDate, setCheckInDate] = useState("");
  const [getCheckOutDate, setCheckOutDate] = useState("");
  const [getAdult, setAdult] = useState("");
  const [getChildren, setChildren] = useState("");
  const [getTotal, setTotal] = useState("");
  const [getRoomNumber, setRoomNumber] = useState("");

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const reserveRoom = () => {
    const roomVales = {
      firstName: getFirstName,
      lastName: getLastName,
      address: getAddress,
      roomType: getRoomType,
      cellno: getCellno,
      email: getEmail,
      cnic: getcnic,
      rent: getRent,
      numberOfDays: getNumberOfDays,
      checkInDate: getCheckInDate,
      checkOutDate: getCheckOutDate,
      adult: getAdult,
      children: getChildren,
      total: getTotal,
      roomNumber: getRoomNumber,
    };
    // console.log(roomVales, "roomVales");
    if (roomVales == "") {
      alert("Please fill all the feilds");
    } else {
      // const roomResult = userinfo.roomReservation(roomVales);
      // roomResult.then((roomRes) => {
      //   console.log(roomRes, "roomRes");
      // });
      console.log(roomVales, "roomValues");
    }
  };

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
          <h2 style={Styles.RoomsHeading}>Reservation Details</h2>
          <Row className="main-row" gutter={(20, 20)}>
            <Col span={24} />
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                name="firstname"
                rules={[
                  { required: true, message: "Please input your First Name!" },
                ]}
              >
                <Input
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                name="lastname"
                rules={[
                  { required: true, message: "Please input your Last Name!" },
                ]}
              >
                <Input
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={24} />

            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                name="address"
                rules={[
                  { required: true, message: "Please input your Address !" },
                ]}
              >
                <Input
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item>
                {/* <label>Room Type</label> */}
                <Select
                  placeholder="Room Type"
                  onChange={(e) => setRoomType(e.target.value)}
                >
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
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
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
                  onChange={(e) => setCellno(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item name={["user", "email"]} rules={[{ type: "email" }]}>
                <Input
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={24} />
            <Col xl={8} lg={8} md={8} sm={24} xs={24}>
              <Form.Item name="cnic">
                <Input
                  placeholder="CNIC"
                  onChange={(e) => setcnic(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col xl={8} lg={8} md={8} sm={24} xs={24}>
              <Form.Item name="rent">
                <Input
                  placeholder="Rent"
                  onChange={(e) => setRent(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col xl={8} lg={8} md={8} sm={24} xs={24}>
              <Form.Item name="days">
                <Input
                  placeholder="No of days"
                  onChange={(e) => setNumberOfDays(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={24} />
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item type="date">
                <label>Check-In Date</label>
                <Input
                  type="date"
                  onChange={(e) => setCheckInDate(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item type="date">
                <label>Check-Out Date</label>
                <Input
                  type="date"
                  onChange={(e) => setCheckOutDate(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={24} />

            <Col xl={24} lg={12} md={24} sm={24} xs={24}>
              <Row justify="center">
                <Col lg={6} xl={6} md={4} sm={6} xs={12}>
                  <Form.Item>
                    <label>Adults</label>
                    <br></br>
                    <InputNumber
                      min={0}
                      max={100}
                      onChange={(e) => setAdult(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col lg={6} xl={6} md={4} sm={6} xs={12}>
                  <Form.Item>
                    <label>Children</label>
                    <br></br>
                    <InputNumber
                      min={0}
                      max={100}
                      onChange={(e) => setChildren(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col lg={6} xl={6} md={4} sm={6} xs={12}>
                  <Form.Item>
                    <label>Total</label>
                    <br></br>
                    <InputNumber
                      min={0}
                      max={100}
                      onChange={(e) => setTotal(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col lg={6} xl={6} md={4} sm={6} xs={12} justify="end">
                  <Form.Item>
                    <label>Room</label>
                    <br></br>
                    <InputNumber
                      min={0}
                      max={100}
                      onChange={(e) => setRoomNumber(e.target.value)}
                    />
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
                  onSubmit={() => reserveRoom()}
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
