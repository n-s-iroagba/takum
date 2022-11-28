import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './navbar.css'


function NavBar() {
  return (
    <Navbar className="ml-auto text-light navbar badge text-wrap container-fluid py-4 fs-6 ">
      
      
        <Navbar.Brand className ="ms-auto text-dark">takum pageant logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ms-auto">
            <Nav.Link className = ' text-light' href="#home">Our History</Nav.Link>
            <Nav.Link className = 'nav-item text-light' href="#home">Gallery</Nav.Link>
            <Nav.Link className = 'nav-item text-light' href="#home">Become A Sponsor</Nav.Link>
            <Nav.Link className = 'nav-item text-light' href="#home">Vote Miss Takum</Nav.Link>
            <Nav.Link className = 'nav-item text-light' href="#home">Vote Mr Takum</Nav.Link>
            <Nav.Link className = 'nav-item text-light' href="#home">Organisers</Nav.Link>
            <Nav.Link className = 'nav-item text-light' href="#home">Contact Us</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
    
    </Navbar>
  );
}




export default NavBar;