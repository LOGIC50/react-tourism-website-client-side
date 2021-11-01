import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const {user, logout} = useAuth();
  
    return (
        <div className='header'>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/home">Tour Takers</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/aboutus">About Us</Nav.Link>
      <Nav.Link href="/contactus">Contact Us</Nav.Link>
      <Nav.Link href="/placeorder">Place Order</Nav.Link>
      <Nav.Link href="/manageorder">Manage Order</Nav.Link>
      <Nav.Link href="/addservice">Add Service</Nav.Link>
      <span className='text-primary'>{user?.displayName}</span>
                {
                  user?.email ?
                  <button className='text-primary' onClick={logout}>Log Out</button>
                  :
                  <Nav.Link href="/login">Login</Nav.Link>}
                </Nav>
    <Nav>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;