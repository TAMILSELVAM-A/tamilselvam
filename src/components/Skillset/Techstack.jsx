import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  SiMaterialui,
  SiGraphql,
  SiSolidity,
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiMysql,
  SiScikitlearn,
  SiPandas,
  SiNumpy
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <p style={{ fontSize: '14px' }}>HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: '14px' }}>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{ fontSize: '14px' }}>Nodejs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: '14px' }}>Reactjs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
        <p style={{ fontSize: '14px' }}>Material UI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p style={{ fontSize: '14px' }}>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
        <p style={{ fontSize: '14px' }}>Scikit-learn</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <p style={{ fontSize: '14px' }}>Pandas</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <p style={{ fontSize: '14px' }}>Numpy</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{ fontSize: '14px' }}>Git</p>
      </Col>
    </Row>
  );
}

export default Techstack;
