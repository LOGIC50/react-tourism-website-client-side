import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link
              to="/home"
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "100px",
                fontSize: "1.3rem",
              }}
            >
              Tour Takers
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link
                style={{
                  textDecoration: "none",
                  paddingRight: "20px",
                  paddingTop: "25px",
                  paddingBottom: "20px",
                  color: "white",
                }}
                to="/home"
              >
                Home
              </Link>

              <Link
                style={{
                  textDecoration: "none",
                  paddingRight: "20px",
                  paddingTop: "25px",
                  paddingBottom: "20px",
                  color: "white",
                }}
                to="/aboutus"
              >
                About Us
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  paddingRight: "20px",
                  paddingTop: "25px",
                  paddingBottom: "20px",
                  color: "white",
                }}
                to="/servicepage"
              >
                Tour Packages
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  paddingRight: "20px",
                  paddingTop: "25px",
                  paddingBottom: "20px",
                  color: "white",
                }}
                to="/contactus"
              >
                Contact Us
              </Link>
              <NavDropdown
                style={{
                  textDecoration: "none",
                  paddingRight: "20px",
                  paddingTop: "15px",
                  paddingBottom: "20px",
                  color: "white",
                }}
                to="/contactus"
                title="Dashboard"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/manageorder"
                  >
                    Manage Order
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/addservice"
                  >
                    Add Service
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/deleteservice"
                  >
                    Delete Service
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              {user?.email ? (
                <>
                  <button
                    className=" button-30"
                    onClick={logout}
                    style={{ padding: "5px 20px" }}
                  >
                    Log Out
                  </button>
                  <span
                    style={{
                      textDecoration: "none",
                      paddingRight: "10px",
                      paddingTop: "25px",
                      paddingBottom: "20px",
                      color: "white",
                    }}
                  >
                    Welcome: {user?.displayName}
                  </span>
                </>
              ) : (
                <Link
                  style={{
                    textDecoration: "none",

                    color: "white",
                  }}
                  to="/login"
                >
                  <button style={{ padding: "5px 20px" }} className="button-30">
                    Login
                  </button>
                </Link>
              )}
            </Nav>
            <Nav></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
