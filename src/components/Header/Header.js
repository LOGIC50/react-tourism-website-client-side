import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
// import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
  const {user, logout} = useFirebase();
    return (
        <div className='header'>
            <Navbar bg="primary" variant="dark">
              <Container>
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/aboutus">About Us</Nav.Link>
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
            </Navbar>
        </div>
    );
};

export default Header;