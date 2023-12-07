import {
  Navbar,
  InputGroup,
  Nav,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../img/logo.png";
import { FaSearch } from "react-icons/fa";
import "./newNavbarStyle.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isAdminIn, setIsAdminIn] = useState(true);

  function handleLogin() {
    // Your login logic here
    // Example: setIsLoggedIn(true);
  }
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "rgba(11, 11, 11, 0.5)" }}
      >
        <Container className="mx-4">
          <Navbar.Brand href="">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <div
            className="d-none d-lg-block"
            style={{
              height: "50px",
              border: "1px solid #fff",
              margin: "0 80px 0 20px",
            }}
          ></div>
          <div style={{ display: "flex" }}>
            <InputGroup
              className="search-bar "
              style={{ width: "250px", borderColor: "#535353" }}
            >
              <InputGroup.Text
                className="search-icons"
                style={{
                  backgroundColor: "#535353",
                  borderColor: "#535353",
                  color: "var(--mid-gray-mid-gray-4, #9AA6AC)",
                }}
              >
                <FaSearch />
              </InputGroup.Text>
              <FormControl
                className="search-input"
                placeholder="Search"
                style={{
                  cursor: "text",
                  backgroundColor: "#535353",
                  borderColor: "#535353",
                  color: "#fff",
                }}
              />
            </InputGroup>

            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              style={{
                backgroundColor: "#fff",
                color: "#fff",
                marginLeft: "15px",
              }}
            />
          </div>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/dashboard" className="me-5 nav">
                Home
              </Nav.Link>
              <Nav.Link href="/aboutus" className="me-5 nav">
                About
              </Nav.Link>
              <Nav.Link href="list-seniman-gallery" className="me-5 nav">
                List Artist
              </Nav.Link>

              {isAdminIn && (
                <Nav.Link href="/adminlist" className="me-5 nav">
                  Dashboard
                </Nav.Link>
              )}

              {!isLoggedIn && (
                <Button href="/login" variant="primary">
                  Log In/Sign Up
                </Button>
              )}
              {isLoggedIn && (
                <Button
                  href="/profilegaleryartis"
                  variant="primary"
                  className="btn-login-custom"
                >
                  Username
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
