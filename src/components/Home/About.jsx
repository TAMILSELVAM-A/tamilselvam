import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";



const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is <span className="yellow">Tamilselvam</span> and I'm from
              <span className="yellow"> Theni, Tamil Nadu, India.</span>
              <br />
              <br />
              I recently graduated with a Master of Computer Application (MCA) in 2023.
              <br />
              <br />
              As a <b className="yellow">Software Engineer</b>, I have a strong foundation in
              <b className="yellow">Machine Learning</b> and <b className="yellow">Software Development</b>.
              I enjoy tackling new challenges and continuously expanding my skillset.
              <br />
              <br />
              I am proficient in <b className="yellow">Python</b> and have knowledge in programming languages such as
              <b className="yellow"> JavaScript</b> and <b className="yellow">REST API</b> .
              <br />
              <br />
              I have experience working with frameworks like <b className="yellow">Node.js </b>,
              <b className="yellow"> React.js </b>,
              <b className="yellow"> Flask</b>, and <b className="yellow">ExpressJS</b>, as well as libraries like
              <b className="yellow">Scikit-learn, NumPy, Pandas</b> .
              <br />
              <br />
              I am also interested in developing new
              <i>
                <b className="yellow"> Web Technologies and Products </b>
              </i>
              and exploring areas related to <b className="yellow">Machine Learning</b>,
              such as predictive modeling, classification, and exploratory data analysis.
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/TAMILSELVAM-A"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tamilselvam09/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/TAMILSELVAM_09/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <SiLeetcode />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );

}

export default About