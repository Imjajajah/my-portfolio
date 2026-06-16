import React from "react";
import { Col, Row } from "react-bootstrap"; 
import { 
  DiJavascript1, DiPython, DiNodejs, DiReact, DiDatabase, 
} from "react-icons/di"; 
import {
  SiPhp, SiDjango, SiLaravel, SiBootstrap, SiHtml5, SiCss3, SiMongodb, SiTailwindcss, SiPostgresql,
} from "react-icons/si";
import { FaRestroom } from "react-icons/fa"; 

// SectionHeader definition (necessary to prevent 'not defined' error)
const SectionHeader = ({ title }) => (
  <h4 style={{ 
    marginTop: '30px', 
    marginBottom: '10px', 
    width: '100%', 
    textAlign: 'center', 
    fontWeight: '600',
    borderBottom: '2px solid #336791', 
    paddingBottom: '5px',
    color: '#336791' 
  }}>
    {title}
  </h4>
);

const Techstack = () => {
  return (
    <div style={{ padding: "0 15px 50px 15px" }}>
      
      {/* --- SECTION 1: FRONTEND & CORE WEB --- */}
      <SectionHeader title="Frontend & Core Web" />
      <Row style={{ justifyContent: "center" }}>
        {/* Core Web Languages */}
        <Col xs={4} md={2} className="tech-icons html-icon tech-container">
          <div className="tech-name">HTML5</div>
          <SiHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons css-icon tech-container">
          <div className="tech-name">CSS3</div>
          <SiCss3 />
        </Col>
        <Col xs={4} md={2} className="tech-icons js-icon tech-container">
          <div className="tech-name">Javascript</div>
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons react-icon tech-container">
          <div className="tech-name">React.js</div>
          <DiReact />
        </Col>
        <Col xs={4} md={3} className="tech-icons tailwind-icon tech-container">
          <div className="tech-name">Tailwind CSS</div>
          <SiTailwindcss />
        </Col>
         <Col xs={4} md={3} className="tech-icons bootstrap-icon tech-container">
          <div className="tech-name">Bootstrap</div>
          <SiBootstrap />
        </Col>
      </Row>

      {/* --- SECTION 2: BACKEND & FULL-STACK FRAMEWORKS --- */}
      <SectionHeader title="Backend & Full-Stack Frameworks" />
      <Row style={{ justifyContent: "center" }}>
        <Col xs={4} md={2} className="tech-icons php-icon tech-container">
          <div className="tech-name">PHP</div>
          <SiPhp />
        </Col>
        <Col xs={4} md={2} className="tech-icons laravel-icon tech-container">
          <div className="tech-name">Laravel</div>
          <SiLaravel />
        </Col>
        <Col xs={4} md={2} className="tech-icons python-icon tech-container">
          <div className="tech-name">Python</div>
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons django-icon tech-container">
          <div className="tech-name">Django</div>
          <SiDjango />
        </Col>
        <Col xs={4} md={2} className="tech-icons nodejs-icon tech-container">
          <div className="tech-name">Node.js</div>
          <DiNodejs />
        </Col>
        
      </Row>

      {/* --- SECTION 3: DATABASES & API DEVELOPMENT (Reduced Redundancy) --- */}
      <SectionHeader title="Databases & API Development" />
      <Row style={{ justifyContent: "center" }}>
        {/* PostgreSQL - New Icon */}
        <Col xs={4} md={2} className="tech-icons postgres-icon tech-container">
          <div className="tech-name">PostgreSQL</div>
          <SiPostgresql /> 
        </Col>

        {/* MySQL - Separate Icon */}
        <Col xs={4} md={2} className="tech-icons mysql-icon tech-container">
          <div className="tech-name">MySQL</div>
          <DiDatabase /> 
        </Col>
        
        <Col xs={4} md={2} className="tech-icons mongodb-icon tech-container">
          <div className="tech-name">MongoDB</div>
          <SiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons rest-icon tech-container">
          <div className="tech-name">RESTful API</div>
          <FaRestroom />
        </Col>
      </Row>
      
    </div>
  );
}

export default Techstack;