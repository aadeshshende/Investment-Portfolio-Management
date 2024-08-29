import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Navbar.css';

const CustomNavbar = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleLogout = () => {
    // Logic for logout (if any) can be added here
    navigate('/loginregister'); // Redirect to login/register page
  };

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <div className="container-fluid shadow-b">
        <Navbar.Brand href="/">
          <img src="default-monochrome.svg" alt="Logo" className="d-inline-block align-top" style={{ width: '200px', height: '50px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/dashboard" className="navbar">Dashboard</Nav.Link>
            <Nav.Link href="/orders" className="navbar">Orders</Nav.Link>
            <Nav.Link href="/watchlist" className="navbar">Watchlist</Nav.Link>
            <Nav.Link href="/holdings" className="navbar">Holdings</Nav.Link>
            <Nav.Link href="/funds" className="navbar">Funds</Nav.Link>
            <NavDropdown title="Profile" id="profile-dropdown" className="navbar">
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              <NavDropdown.Item href="/user-settings">User Settings</NavDropdown.Item>
              <NavDropdown.Item href="/help-support">Help and Support</NavDropdown.Item>
              <NavDropdown.Item href="/about-us">About Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
