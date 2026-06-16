import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

// 🔑 FEATURED ENTERPRISE PROJECT IMAGES
import tubigAdminImg from "../assets/projects/tubig-admin.png";
import meterReaderImg from "../assets/projects/meter-reader.png";
import tubigUserImg from "../assets/projects/tubig-user.png";
import mosangsBudbodImg from "../assets/projects/mosangs-budbod.png";

// 🔑 OTHER PROJECT IMAGES
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
          My Recent <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        {/* ===== FEATURED ENTERPRISE SECTION ===== */}
        <div className="featured-section-label">
          <span className="featured-badge-header">⭐ Featured Enterprise Systems</span>
          <p className="featured-subtext">Production-grade, multi-platform suites deployed for real clients</p>
        </div>

        <Row
          style={{ justifyContent: "center", paddingBottom: "10px" }}
          className="d-flex align-items-stretch"
        >
          {/* FEATURED 1: Tubig Pilipinas Admin System */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={tubigAdminImg}
              isBlog={false}
              title="Tubig Pilipinas Admin System"
              description="Enterprise admin web dashboard for GT Industries water utility. Re-engineered the SOA billing engine with strict compound calculation order (Basic → VAT → Arrears → Penalties). Built isolated cashier SI-series sequencing, PayMongo QR billing, audit-grade Excel (.xlsx) data pipelines, and RBAC security middleware in the MVC base controller. (PHP, CodeIgniter, MySQL, jQuery, Git)"
              ghLink="#"
              demoLink="https://tubigpilipinas.gtindustries.ph/login"
              isFeatured={true}
            />
          </Col>

          {/* FEATURED 2: Meter Reader App */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={meterReaderImg}
              isBlog={false}
              title="Meter Reader App"
              description="Offline-first Flutter field operations app for GT Industries. Architected local SQLite caching for offline meter reads with mandatory photo-proof validation. Integrated ESC/POS Bluetooth thermal printing, asynchronous support ticket logging, PayMongo e-payment QR triggers, and partial reading state management for meter replacements. (Flutter, Dart, SQLite, REST APIs)"
              ghLink="#"
              isFeatured={true}
            />
          </Col>

          {/* FEATURED 3: Tubig User App */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={tubigUserImg}
              isBlog={false}
              title="Tubig User App"
              description="Customer self-service mobile app for GT Industries concessionaires. Refactored the SOA data layer to mirror standardized multi-tier fee structures. Integrated PayMongo SDK for real-time mobile bill payments directly from digital statements, reducing physical cashier foot traffic. Standardized in-app cut-off warnings and payment reminders. (Flutter, Dart, PayMongo SDK, iOS & Android)"
              ghLink="#"
              isFeatured={true}
            />
          </Col>

          {/* FEATURED 4: Mosang's Budbod */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={mosangsBudbodImg}
              isBlog={false}
              title="Mosang's Budbod – Food Logistics System"
              description="Full-stack food ordering and logistics platform. Reverse-engineered a legacy undocumented database and migrated all data assets to Google Firebase with zero production downtime. Implemented third-party courier dispatch APIs with distance-based pricing, live order lifecycle tracking, and multi-direction PayMongo webhook receivers for automated ledger synchronization. (Firebase, Firestore, PayMongo Webhooks)"
              ghLink="#"
              demoLink="https://www.mosangsbudbod.ph/"
              isFeatured={true}
            />
          </Col>
        </Row>

        {/* ===== OTHER PROJECTS SECTION ===== */}
        <div className="featured-section-label" style={{ marginTop: "30px" }}>
          <span className="featured-badge-header" style={{ background: "rgba(117,0,250,0.15)", borderColor: "rgba(117,0,250,0.4)" }}>📁 Other Projects & Academic Systems</span>
        </div>

        <Row
          style={{ justifyContent: "center", paddingBottom: "10px" }}
          className="d-flex align-items-stretch"
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

          {/* 3. PUPQC-CRGS */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crgsImg}
              isBlog={false}
              title="PUPQC-CRGS (Cashier System)"
              description="Enhanced the PUPQC cashier system by developing key front-end features, resulting in improved financial transaction efficiency and user experience. (Tech Stack: Laravel, PHP, HTML, CSS, JS, Bootstrap, Git, Jira)"
              ghLink="https://github.com/rjdparungao/pupqc-crgs"
            />
          </Col>

          {/* 4. QR-Attendance System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qrImg}
              isBlog={false}
              title="QR-Attendance System"
              description="Developed the full-stack QR-Attendance System, implementing QR code generation and scanning logic to accurately record and manage attendance. (Tech Stack: Django, HTML, CSS, JS, Bootstrap, Git, PostgreSQL)"
              ghLink="https://github.com/Imjajajah/qr-attendance-system"
            />
          </Col>

          {/* 5. Patient Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={patientSystemImg}
              isBlog={false}
              title="Patient Management System"
              description="Developed a full-featured hospital system managing patient records, emergency admission, appointments, and doctor assessments. (Tech Stack: Laravel, JS, Bootstrap, Git)"
              ghLink="https://github.com/Imjajajah/patient-management-system"
            />
          </Col>

          {/* 6. Algoritees */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={algoriteesImg}
              isBlog={false}
              title="Algoritees E-Commerce"
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
              description="Developed the front-end for GFMIC's dedicated financial management platform, providing robust tools for transaction tracking, budgeting, and financial reporting. (Tech Stack: Django, HTML, CSS, JS, Bootstrap, Git, MySQL)"
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

          {/* 9. PUPQC Accreditation */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={accreImg}
              isBlog={false}
              title="PUPQC-Accreditation"
              description="Created a comprehensive public-facing website using Google Sites to showcase PUPQC's institutional achievements, campus information, and major accreditation highlights. (Tech Stack: Google Sites)"
              ghLink="#"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;