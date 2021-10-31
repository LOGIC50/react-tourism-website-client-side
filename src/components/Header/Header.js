import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
// import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
  const {user, logout} = useFirebase();
    return (
        <div className='header'>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Tour Takers</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/aboutus">About Us</Nav.Link>
      <Nav.Link href="/placeorder">Place Order</Nav.Link>
      <Nav.Link href="/manageorder">Manage Order</Nav.Link>
      <Nav.Link href="/addservice">Add Service</Nav.Link>
      <span className='text-primary'>{user.displayName}</span>
                {
                  user.email ?
                  <button className='text-primary' onClick={logout}>Log Out</button>
                  :
                  <Nav.Link href="/login">Login</Nav.Link>}
                </Nav>
    <Nav>
    {/* <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
        <NavDropdown.Item href="">Place Order</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/manageorder">Manage Order</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/addservice">Add a service</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            {/* <Navbar bg="primary" variant="dark">
              <Container>
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/aboutus">About Us</Nav.Link>
                <Nav.Link href="/contactus">Contact Us</Nav.Link>
                <span>{user.displayName}</span>
                {
                  user.email ?
                  <button onClick={logout}>Log Out</button>
                  :
                  <Nav.Link href="/login">Login</Nav.Link>
                }
                  <Nav.Link href="/placeorder">Place Order</Nav.Link>
                  <Nav.Link href="/manageorder">Manage Order</Nav.Link>
                  
                  
              </Nav>
              </Container>
            </Navbar> */}
        </div>
    );
};

export default Header;