import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,

  // 🔑 Facebook and Instagram icons from ai or fa are not needed here if using fa below
} from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa"; // 🔑 Import FaFacebookF and FaInstagram

import './Social.css'

const Social = () => {
  return (
    <Container style={{padding: '30px'}}>
    <Row>
              <Col md={12} className="contact-social">
                <div className='contact-text'>
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                </div>
                <ul className="contact-social-links">
                  {/* GitHub */}
                  <li className="contact-icons">
                    <a
                      href="https://github.com/Imjajajah" // Updated this to your GitHub username
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>

                  {/* 🔑 FACEBOOK ICON ADDED */}
                  <li className="contact-icons">
                    <a
                      href="https://www.facebook.com/jarrell.reyes.12/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color contact-social-icons"
                      aria-label="facebook"
                    >
                      <FaFacebookF />
                    </a>
                  </li>

                  {/* 🔑 INSTAGRAM ICON ADDED */}
                  <li className="contact-icons">
                    <a
                      href="https://www.instagram.com/im_jajajah/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color contact-social-icons"
                      aria-label="instagram"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                 
                  {/* LinkedIn */}
                  <li className="contact-icons">
                    <a
                      href="https://www.linkedin.com/in/jarrellreyes/" // Updated this to your LinkedIn username
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>

                  
                </ul>
              </Col>
            </Row>
          </Container>
  )
}

export default Social