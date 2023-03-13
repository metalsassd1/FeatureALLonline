import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../.././CSS/Navbar.css'; 

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar bg-light py-0">
      <Container>
        <Navbar.Brand href="/"> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link as={Link} to="/about">เกี่ยวกับ</Nav.Link>
            <Nav.Link as={Link} to="/contact">ติดต่อ</Nav.Link>
          </Nav>
          <Nav className="ml-auto ">
            <Nav.Link as={Link} to="/login">เข้าสู่ระบบ</Nav.Link>
            <div className='vr'/>
            <Nav.Link as={Link} to="/signup">สมัครสมาชิก</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
