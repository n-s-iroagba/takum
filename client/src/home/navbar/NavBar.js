import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavItem, Dropdown, NavLink } from 'react-bootstrap';
import './navbar.css'
import vibrantPic from './vibrant.jpg'
import { useNavigate } from 'react-router-dom';

function NavBar( {galleryRef,contactRef,aboutRef,scrollToTargetDiv}) {
  const navigate = useNavigate()

  return (<>
    <Navbar expand="lg" className="navbar text-light">
      <Navbar.Brand href="#home"><img style={{ height: '1.8cm', width: '1.8cm',marginLeft:'0.5cm'}} src={vibrantPic} alt='vibrant logo' /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"className='toggle' />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-items">
          <Nav.Link  className='nav-item text-light' href='/'>HOME</Nav.Link>
          <Dropdown as={NavItem} >
            <Dropdown.Toggle as={NavLink} className='dropdown-item text-light'>CONTEST</Dropdown.Toggle>
            <Dropdown.Menu style={{backgroundColor:'brown'}}>
              <Dropdown.Item className='dropdown-item'onClick={()=>{
                alert('TO PARTICPATE IN MISS TAKUM PAGEANTRY,KINDLY CONTACT US')
                scrollToTargetDiv(contactRef)}}>MISS TAKUM</Dropdown.Item>
              <Dropdown.Item className='dropdown-item'onClick={()=>{
                alert('TO PARTICPATE IN MR TAKUM PAGEANTRY,KINDLY CONTACT US')
                scrollToTargetDiv(contactRef)}}>MR.TAKUM</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown as={NavItem} >
            <Dropdown.Toggle as={NavLink} className='dropdown-item text-light'>MR & MISS TAKUM VOTING POLL</Dropdown.Toggle>
            <Dropdown.Menu style={{backgroundColor:'brown'}}>
            <Dropdown.Item className='dropdown-item' onClick={()=>navigate('/femalecontestants')}>MISS TAKUM</Dropdown.Item>
              <Dropdown.Item className='dropdown-item'onClick={()=>navigate('/malecontestants')}>MR.TAKUM</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Link className='nav-item text-light'onClick={()=>scrollToTargetDiv(galleryRef)} >GALLERY</Nav.Link>
          <Nav.Link className='nav-item text-light'onClick={()=>scrollToTargetDiv(aboutRef)} >ABOUT US</Nav.Link>
          <Nav.Link className='nav-last nav-item text-light'onClick={()=>scrollToTargetDiv(contactRef)} >CONTACT US</Nav.Link>

        </Nav>
      </Navbar.Collapse>

    </Navbar>
    </>
  );
}




export default NavBar;