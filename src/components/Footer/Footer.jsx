import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,

} from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa"; // Imported FaFacebookF and FaInstagram

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <span>Copyright © {year}</span>
            <strong className="yellow" style={{ marginLeft: "10px", fontSize: "1.2rem" }}>ImJah</strong>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              {/* GitHub */}
              <li className="social-icons">
                <a
                  href="https://github.com/Imjajajah"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              {/* 🔑 FACEBOOK ICON ADDED */}
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/jarrell.reyes.12/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="facebook"
                >
                  <FaFacebookF />
                </a>
              </li>

              {/* 🔑 INSTAGRAM ICON ADDED */}
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/im_jajajah/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="instagram"
                >
                  <FaInstagram />
                </a>
              </li>
          
              {/* LinkedIn */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jarrellreyes/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer;