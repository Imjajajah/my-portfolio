import React from "react";
// react-bootstrap provides Col and Row
import { Col, Row } from "react-bootstrap"; 
import {
  SiVisualstudiocode, // Assumed primary IDE for your listed languages
  SiPostman,          // Used for RESTful API Development
  SiGithub,           // Used alongside Git
  SiJira,             // Explicitly listed for project management
} from "react-icons/si";
import { DiGit } from "react-icons/di"; // Explicitly listed

// SectionHeader component definition (MUST be in this file or imported to avoid error)
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

const Toolstack = () => {
  return (
    <div style={{ padding: "0 15px 50px 15px" }}>
      {/* Title adjusted to reflect actual tools */}
      <SectionHeader title="Development Tools & Project Management" /> 
      <Row style={{ justifyContent: "center" }}>
        
        {/* Development Tools (VS Code & Postman) */}
        <Col xs={4} md={2} className="tech-icons vscode-icon tool-container">
          <div className="tech-name">VS Code</div>
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons postman-icon tool-container">
          <div className="tech-name">Postman</div>
          <SiPostman />
        </Col>

        {/* Version Control & Management (Git, GitHub, Jira) */}
        <Col xs={4} md={2} className="tech-icons git-icon tool-container">
          <div className="tech-name">Git</div>
          <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons github-icon tool-container">
          <div className="tech-name">GitHub</div>
          <SiGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons jira-icon tool-container">
          <div className="tech-name">Jira</div>
          <SiJira />
        </Col>
        
     
        
      </Row>
    </div>
  );
}

export default Toolstack;