import React from 'react';
import {Navbar} from 'react-bootstrap';
import logo from "../logo.png";

const NavbarTop = () => {
    return (
        <Navbar className="navbar">
        <Navbar.Brand href="/">
        
          <img
            alt="logo"
            src={logo}
            width="60"
            height="80"
            className="d-inline-block align-top"
          />{' '}
          <Navbar.Text className="navbar-txt" style={{color:'#2e2e2e'}}>CET Notice Board</Navbar.Text>
          
        </Navbar.Brand>
      </Navbar>
    );
};

export default NavbarTop;