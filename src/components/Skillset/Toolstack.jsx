import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify,
  SiPycharm,
  SiTensorflow
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ fontSize: '14px' }}>Visual Studio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ fontSize: '14px' }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
        <p style={{ fontSize: '14px' }}>PyCharm</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <p style={{ fontSize: '14px' }}>Tensorflow</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
