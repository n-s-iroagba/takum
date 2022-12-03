import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'


function NavBar() {
  return (<>
    
    <Navbar className="text-light navbar badge text-wrap container-fluid py-4 fs-6 ">
      
  
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ms-auto">
          <Nav.Link className = 'nav-item text-light' href='/malecontestants'>Vote Mr. Takum</Nav.Link>
          <Nav.Link className = 'nav-item text-light' href='/femalecontestants'>Vote Miss Takum</Nav.Link>
          <Nav.Link className = 'nav-item text-light' >projects</Nav.Link>
            <Nav.Link className = 'nav-item text-light' >Gallery</Nav.Link>
            
            <Nav.Link className = 'nav-item text-light' >Organisers</Nav.Link>
            
          
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </>
  );
}




export default NavBar;