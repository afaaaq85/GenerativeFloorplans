import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/gfp5.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img className='footer-logo' src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright by GFP. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}


export default Footer