import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";
import Phisingurl from "../assets/projects/PHISINGURL.png";
import BreastCancer from "../assets/projects/Breastcancer.png";
import Terrorism from "../assets/projects/Terrorism.png"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Phisingurl}
              isBlog={false}
              title="Phising URL Detection"
              description="The “PHISHING URL DETECTION” aims to develop a web application that uses machine learning
                            algorithms to detect phishing URLs. The application will be built using the Python Flask framework and
                            will analyze various features of a URL, such as domain age, SSL certificate, and URL length, to determine
                            if it is a phishing URL. The system will be trained on a dataset of both legitimate and phishing URLs to
                            accurately classify incoming URLs."
              ghLink="https://github.com/TAMILSELVAM-A/Phising-URL-Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BreastCancer}
              isBlog={true}
              title="Breast Cancer EDA"
              description="This project focuses on analyzing a breast cancer dataset through Exploratory Data Analysis (EDA) and machine learning to predict whether a tumor is malignant or benign. By exploring patterns, relationships, and key features within the data, the goal is to uncover insights that aid in early detection and diagnosis. The project also involves building and evaluating predictive models to identify influential factors, providing a comprehensive approach to understanding breast cancer characteristics and improving diagnostic accuracy."
              ghLink="https://www.kaggle.com/code/tamilselvama/breast-cancer-prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Terrorism}
              isBlog={true}
              title="Terrorism EDA "
              description="This ecommerce website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, products and admin panel. The user interface is designed for efficient product management and includes a complete purchase process. The admin panel, accessible for CRUD on users and products, includes a chart for statistics display. Stripe API is integrated to handle customer payments. The website uses MongoDB and Firebase as the database."
              ghLink="https://www.kaggle.com/code/tamilselvama/terrorism-eda-data-analysis"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects