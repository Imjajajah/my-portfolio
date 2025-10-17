import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

// 🔑 IMAGE IMPORTS (Based on your folder structure)
import accreImg from "../assets/projects/accre.png";
import crgsImg from "../assets/projects/crgs.png";
import qrImg from "../assets/projects/qr.jpeg";
import trackerSystemImg from "../assets/projects/tracker-system.png";
import financeSystemImg from "../assets/projects/finance-system.png";
import membershipSystemImg from "../assets/projects/membership-system.png";
import smartstudyImg from "../assets/projects/smartstudy.png";
import patientSystemImg from "../assets/projects/patient-system.png";
import algoriteesImg from "../assets/projects/algoritees.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row 
          style={{ justifyContent: "center", paddingBottom: "10px" }}
          className="d-flex align-items-stretch" // THIS FIXES UNEVEN ROW HEIGHTS
        >

          {/* 1. Alumni Tracker System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trackerSystemImg}
              isBlog={false}
              title="Alumni Tracker System"
              description="Led the front-end design and development of the PUPQC Alumni Tracker System, ensuring a responsive and user-friendly interface. Also contributed minor backend enhancements. (Tech Stack: Django, HTML, CSS, JS, Bootstrap, Git, Jira)"
              ghLink="https://github.com/gfmicproj/GFMIC_Membership_Frontend"
              demoLink="https://alumnifrontenddeployv1-2.onrender.com/"
            />
          </Col>

          {/* 2. GFMIC Membership (Web) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={membershipSystemImg}
              isBlog={false}
              title="GFMIC Membership (Web)"
              description="Developed the responsive front-end interface for the GFMIC membership platform, focusing on seamless user registration and efficient record management. (Tech Stack: Django, HTML, CSS, JS, Bootstrap, Git, Jira)"
              ghLink="https://portal.gfmic.ph/membership/#member_register"
              demoLink="https://portal.gfmic.ph/membership/#member_register"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={accreImg}
              isBlog={false}
              title="PUPQC-Accreditation"
              description="Created a comprehensive public-facing website using Google Sites to showcase PUPQC's **institutional achievements,** campus information, and major accreditation highlights. (Tech Stack: Googlesite)"
              ghLink="#" 
              demoLink="#"
            />
          </Col>

          {/* 3. PUPQC-CRGS */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crgsImg}
              isBlog={false}
              title="PUPQC-CRGS"
              description="Enhanced the PUPQC cashier system by developing key front-end features, resulting in improved financial transaction efficiency and user experience. (Tech Stack: Laravel, Php, HTML, CSS, JS, Bootstrap, Git, Jira)"
              ghLink="https://github.com/rjdparungao/pupqc-crgs"
            />
          </Col>

          {/* 4. QR-Attendance System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qrImg}
              isBlog={false}
              title="QR-Attendance System"
              description="Developed the full-stack QR-Attendance System, implementing QR code generation and scanning logic to accurately record and manage attendance. (Tech Stack: Django, HTML, CSS, JS, Bootstrap, Git, Postgres)"
              ghLink="https://github.com/Imjajajah/qr-attendance-system"
            />
          </Col>

          {/* 5. Patient Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={patientSystemImg}
              isBlog={false}
              title="Patient Management System"
              description="Developed a full-featured hospital system managing patient records, emergency admission, appointments, and doctor assessments. Handled core front-end logic with minimal, simple backend tasks. (Tech Stack: Laravel, JS, Bootstrap, Git)"
              ghLink="https://github.com/Imjajajah/patient-management-system"
            />
          </Col>

          {/* 6. Algoritees */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={algoriteesImg}
              isBlog={false}
              title="Algoritees"
              description="Designed and implemented a web-based e-commerce platform for algorithm-themed merchandise, integrating product listings and a secure checkout flow. (Tech Stack: Laravel, JS, Bootstrap, Git)"
              ghLink="https://github.com/Imjajajah/algoritees"
            />
          </Col>
          
          {/* 7. GFMIC Finance System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={financeSystemImg}
              isBlog={false}
              title="GFMIC Finance System"
              description="Developed the front-end for GFMIC's dedicated financial management platform, providing users with robust tools for transaction tracking, budgeting, and financial reporting. (Tech Stack: Django, HTML, CSS, JS, Bootstrap, Git, MySQL)"
              ghLink="https://github.com/gfmicproj/GFMIC_Finance_Frontend"
              demoLink="https://finance.gfmic.ph/"
            />
          </Col>

          {/* 8. SmartStudy App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartstudyImg}
              isBlog={false}
              title="SmartStudy App"
              description="Designed and implemented a mobile application for students, featuring reviewer creation tools, integrated study timers, and performance statistic tracking. (Tech Stack: Flutterflow, Firebase)"
              ghLink="https://github.com/Imjajajah/smartstudy-app"
            />
          </Col>

          {/* 9. PUPQC-Accreditation */}
        

        </Row>
      </Container>
    </Container>
  )
}

export default Projects;