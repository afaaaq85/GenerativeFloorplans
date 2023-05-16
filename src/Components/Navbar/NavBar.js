import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useMediaQuery } from "@mui/material";
import logo from '../../assets/img/gfp3.png'
import { Link } from "react-router-dom";
import navIcon1 from '../../assets/img/nav-icon1.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'
import './NavBar.css'
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])



  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (

    <Navbar expand="sm" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img className="navbar-logo" src={logo} alt="Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="menu-items">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ome')} >Home</Nav.Link>
              <Nav.Link href="#features" className={activeLink === 'features' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('features')} >Features</Nav.Link>
              <Nav.Link href="#beta" className={activeLink === 'beta' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('beta')} >Beta</Nav.Link>
            <span className="navbar-text">
              <button className="vvd" onClick={() => document.getElementById('qr').scrollIntoView({ behavior: 'smooth' })}>
                <span>Get the App</span>
              </button>
            </span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default NavBar;