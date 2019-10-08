import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" fixed="top"
          style={{
            'padding': '12px 44px',
            'box-shadow': '0 2px 4px 0 rgba(0,0,0,0.25)',
            'background-color': "#ebfafa"
          }}
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="saikal" id="responsive-navbar-nav"
            style={{
              'font-size': '18px'
            }}
          >
            <Nav.Link className="nav-link" href="/">Home</Nav.Link>
            <Nav.Link className="nav-link" href="/service">Services</Nav.Link>
            <Nav.Link className="nav-link" href="/about">About</Nav.Link>
            <Nav.Link className="nav-link" href="/contact">Contact</Nav.Link>
            <Nav.Link className="nav-link" href="/appliance_gallery">Gallery</Nav.Link>
          </Navbar.Collapse>
          <Navbar.Brand href="/"
            style={{
              color: '#0082A3',
              // 'font-size': '22px'
            }}
          >Smart Appliance Fix</Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Dashboard;
