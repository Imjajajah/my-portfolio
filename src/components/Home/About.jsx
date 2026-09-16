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
                  Hi, my name is <span className="yellow">Jarrell I. Reyes</span> and I'm a <b className="yellow">Full-Stack & Mobile Software Engineer</b> based in <span className="yellow">Quezon City, Philippines</span> (<b className="yellow">Civil Service Professional Eligible</b>).
                  <br />
                  <br />
                  I graduated from the <span className="yellow">Polytechnic University of the Philippines (PUP)</span> with a Bachelor of Science in Information Technology, specializing in architecting, developing, and deploying multi-platform software suites for enterprise clients serving thousands of active transaction logs.
                  <br />
                  <br />
                  I specialize in <b className="yellow">offline-first data synchronization protocols</b>, <b className="yellow">transactional security</b>, and <b className="yellow">complex database query optimization</b>. My core stack spans <b className="yellow">JavaScript (TypeScript, React, Node.js, Express)</b>, <b className="yellow">Flutter / Dart</b>, <b className="yellow">PHP (Laravel, CodeIgniter MVC)</b>, and <b className="yellow">Python (Django)</b>, backed by <b className="yellow">PostgreSQL, MySQL, SQLite</b>, and <b className="yellow">Google Firebase</b>.
                  <br />
                  <br />
                  In real-world production environments, I engineer mission-critical systems: from sequential compound billing logic and thread-safe cashier transaction pipelines to custom hardware protocols (<b className="yellow">ESC/POS Bluetooth thermal printing</b>) and payment gateways (<b className="yellow">PayMongo SDK & Webhooks</b>).
                  <br />
                  <br />
                  Backed by certifications in <b className="yellow">Web Development</b>, <b className="yellow">Project Management (Coursera)</b>, and <b className="yellow">Cybersecurity (Fortinet)</b>, I bring end-to-end engineering discipline — translating complex business logic into scalable, automated software.
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
                      className="icon-colour home-social-icons"
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
                      className="icon-colour home-social-icons"
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

export default About;