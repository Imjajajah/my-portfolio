import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";




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
                 Hi, my name is <span className="yellow">Jarrell I. Reyes </span>
                 and I'm based in <span className="yellow"> Quezon City, Philippines.</span>
                <br />
                <br />
                I recently graduated from the <span className="yellow">Polytechnic University of the Philippines</span> in 2025 with a Bachelor of Science in Information Technology.
                <br />
                <br />
                  I am a versatile <b className="yellow">Full-Stack Developer</b> with a strong background in <b className="yellow">Project Leadership</b>, having led multiple systems projects from design to delivery.
                  <br />
                  <br />I am highly proficient in core web technologies including
                    <b className="yellow"> PHP (Laravel), Python (Django), and Javascript </b>. I also have hands-on experience with mobile development using <b className="yellow">Flutter/Dart</b> and <b className="yellow">PostgreSQL/MySQL</b> databases.
                  <br />
                  <br />
                  My work has involved developing various <b className="yellow">Enterprise Solutions</b>, such as a full-featured hospital Patient Management System, a university-used Alumni Tracker, and an attendance system using QR technology.
                  <br />
                  <br />
                  I have a passion for <b className="yellow">Front-end Development</b>, focusing on creating responsive and user-friendly interfaces with tools like <b className="yellow">Bootstrap or Tailwind</b> and modern frameworks. I am also certified in <b className="yellow">Business Analysis</b> and <b className="yellow">Project Management</b>.
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
                      href="https://github.com/Imjajajah"
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
                      href="https://www.linkedin.com/in/jarrellreyes/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
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