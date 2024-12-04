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
              <b className="yellow"> JavaScript</b> and <b className="yellow">REST API</b>.
              <br />
              <br />
              I have experience working with frameworks like <b className="yellow">Node.js </b>,
              <b className="yellow"> React.js </b>,
              <b className="yellow"> Flask</b>, and <b className="yellow">ExpressJS</b>, as well as libraries like
              <b className="yellow">Scikit-learn, NumPy, Pandas</b>.
              <br />
              <br />
              I am also interested in developing new
              <i>
                <b className="yellow"> Web Technologies and Products </b>
              </i>
              and exploring areas related to <b className="yellow">Machine Learning</b>,
              such as predictive modeling, classification, and exploratory data analysis.
              <br />
              <br />
              <h3 className="yellow">Work Experience</h3>
              <p>
                <ul>
                  <li>Utilized the <span className="yellow">Berry template</span> to design and implement the user interface of our project, enhancing the visual appeal and user experience with pre-designed components and layouts.</li>
                  <li>Created visually appealing and user-friendly interfaces by integrating <span className="yellow">Material-UI</span> components, enhancing usability and improving the overall look and feel of the application.</li>
                  <li>Collaborated with team members to design and implement <span className="yellow">RESTful API</span> endpoints using <span className="yellow">Node.js</span> and <span className="yellow">Express</span>, adhering to industry best practices and standards for web API development.</li>
                  <li>Enhanced database performance and efficiency by optimizing queries and schema design in <span className="yellow">SQL</span> databases, facilitating smoother data storage and retrieval processes.</li>
                </ul>
              </p>
              <br />
              <h3 className="yellow">Projects</h3>
              <p>
                <a href="https://app.technofundainvesting.com/" target="_blank" rel="noreferrer"><b className="yellow">Dhruva</b></a> - A project built to a community based collaboration platform for stock market investing community.
              </p>
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

export default About;
