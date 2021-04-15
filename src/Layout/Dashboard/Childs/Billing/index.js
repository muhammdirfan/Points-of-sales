import React from "react";
 import EditableTable from "../../../../Components/Oders";
 import { TabletFilled } from "@ant-design/icons";
 import { Row, Col } from 'antd';
 import styles from './styles';

const Billing = () => {
  return (
    
      <div style={{marginTop: "40px"}}>
        <Row style={styles.Salestablebody}>
        <Row>
          <Col style={styles.salesTableicon}>
            <TabletFilled />
          </Col>
          <Col>
            <h2 style={styles.salesTableheading}>Billing and Orders</h2>
          </Col>
        </Row>
        < EditableTable />
        </Row>
      </div>
  );
};

export default Billing;
