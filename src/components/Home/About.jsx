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
                 I graduated from the <span className="yellow">Polytechnic University of the Philippines</span> in 2025 with a Bachelor of Science in Information Technology, and I'm currently working as a <b className="yellow">Technical Support Engineer</b> at <b className="yellow">Telus</b>, supporting Google's RCS ecosystem and enterprise telecom clients.
                 <br />
                 <br />
                  As a <b className="yellow">Freelance Full-Stack & Mobile Developer</b>, I architect and deploy <b className="yellow">multi-platform enterprise systems</b> — from admin web dashboards and offline-first field operations apps to customer-facing mobile portals — for real clients in production.
                  <br />
                  <br />
                  I specialize in <b className="yellow">offline-first synchronization protocols</b>, <b className="yellow">transactional security</b>, and <b className="yellow">secure database engineering</b>. My stack spans{" "}
                  <b className="yellow">PHP (Laravel, CodeIgniter)</b>, <b className="yellow">Python (Django)</b>, <b className="yellow">Flutter/Dart</b>, and <b className="yellow">JavaScript (Next.js, React)</b>, backed by <b className="yellow">MySQL, PostgreSQL, Firebase, and SQLite</b>.
                  <br />
                  <br />
                  I integrate real-world payment systems (<b className="yellow">PayMongo</b>), hardware peripherals (<b className="yellow">ESC/POS Bluetooth printing</b>), and third-party logistics APIs — translating complex business workflows into robust, automated software pipelines.
                  <br />
                  <br />
                  I also hold certifications in <b className="yellow">Business Analysis</b>, <b className="yellow">Project Management</b>, and <b className="yellow">Cybersecurity</b>, enabling me to engage stakeholders and lead full project lifecycles from requirements to delivery.
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