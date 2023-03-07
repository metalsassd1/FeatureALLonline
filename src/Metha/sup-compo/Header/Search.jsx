import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { Nav,NavDropdown} from 'react-bootstrap';
import '../.././CSS/Navbar.css'; 

const NavBar = () => {
  const [search,setSearch]= useState([])



  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <div to="/" className="">
          <img className='image-size-s' src="https://www.allonline.7eleven.co.th/1523c9f77853e87958adda06f7de38de9f8caf21/assets/7online/images/logo.png" alt="ALLONLINE" />
        </div>
        <form className="d-flex">
          <div className="input-group">
            <input className="form-control rounded " type="search" placeholder="ค้นหาสินค้า" aria-label="Search" />
          <Nav className="me-auto custom-navbar">
            <NavDropdown title="หมวดหมู่" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category1">ยีนส์</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category2">นาฬิกา</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category3">แจ็คเก็ต</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <button id='search' className="btn btn-outline-secondary" type="submit"><FaSearch /></button>
          </div>
        </form>
        <Link to="/cart" className="btn btn-outline-dark ms-3 cart form-control"><FaShoppingCart /></Link>
      </div>
    </nav>
  );
};

export default NavBar;
