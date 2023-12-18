import {
  Navbar,
  InputGroup,
  Nav,
  FormControl,
  Button,
  Container,
  Image,
} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../img/logo.png";
import { FaSearch } from "react-icons/fa";
import "./newNavbarStyle.css";
import drawing2 from '../img/Drawing2.png'
import Dropdown from "react-bootstrap/Dropdown";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminIn, setIsAdminIn] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    // Cek Local Storage saat komponen dimuat
    const storedToken = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId");
    const storedUserLevel = localStorage.getItem("userLevel");

    if (storedToken && storedUserId && storedUserLevel) {
      setIsLoggedIn(true);
      setUserId(storedUserId);
      if (storedUserLevel === 'user') {
        setIsAdminIn(false);
      } else if (storedUserLevel === 'admin') {
        setIsAdminIn(true);
      }
    } else {
      setIsLoggedIn(false);
      setIsAdminIn(false);
    }
  }, []);


  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1//atsgetuser?id_user=${userId}`);
        const userData = response.data.user;
        setUsername(userData.nama);
        setEmail(userData.email);
        if (response.data.success && response.data.user) {
          console.log("api", response.data.user.image);
          // setPhoto(response.data.user.image);
          const delimiter = "profileAsset/";
          const basePath = "http://localhost:5000/stat/";
          const slicedPath = response.data.user.image.substring(
            response.data.user.image.indexOf(delimiter) + delimiter.length
          );
          const fullPath = `${basePath}${slicedPath}`;
          const fileURL = fullPath;
          setPhoto(fileURL);
          console.log("api", fullPath);
        } else {
          console.error("sad", response.data.message);
        }
        console.log("Fetched user data:", userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (isLoggedIn && userId) {
      fetchUserData();
    }
  }, [isLoggedIn, userId]);

  function handleLogout() {
    setIsLoggedIn(false);
    setIsAdminIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("userLevel");
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
            <Link to="/dashboard">
              <img src={logo} alt="Logo" />
            </Link >
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
            <Nav className="ms-auto" >
              <Nav.Link href="/dashboard" className="me-5 nav" style={{ fontSize: '16px' }}>
                Home
              </Nav.Link>
              <Nav.Link href="/aboutus" className="me-5 nav" style={{ fontSize: '16px' }}>
                About
              </Nav.Link>
              <Nav.Link href="/listprofileseniman" className="me-5 nav" style={{ fontSize: '16px' }}>
                List Artist
              </Nav.Link>

              {isAdminIn && (
                <Nav.Link href="/admin/adminOverview" className="me-5 nav" style={{ fontSize: '16px' }}>
                  Dashboard
                </Nav.Link>
              )}

              {!isLoggedIn && (
                <Button href="/login" variant="primary">
                  Log In/Sign Up
                </Button>
              )}
              {isLoggedIn && (
                <Dropdown
                  data-bs-theme="dark"
                  className="d-md-inline-block ms-md-auto"
                >
                  <Dropdown.Toggle
                    id="dropdown-button-dark-example1"
                    variant="secondary"
                    style={{
                      border: "1px solid white",
                      backgroundColor: "#0B0B0B",
                    }}
                  >
                    Profile
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu-end">
                    <Dropdown.Item
                      href="/profilegaleryartis"
                      style={{ display: "flex" }}
                    >
                      <Image
                        src={photo}
                        style={{
                          backgroundColor: "white",
                          borderRadius: "50%",
                          width: "40px",
                          height: "40px",
                        }}
                      />
                      <div
                        style={{
                          fontSize: "5px",
                          display: "block",
                          marginLeft: "2%",
                        }}
                      >
                        <span style={{ display: "block" }}>
                          {username}
                        </span>
                        <span style={{ display: "block" }}>
                          {email}
                        </span>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="/user1">View profile</Dropdown.Item>
                    <Dropdown.Item href="/editprofile1">Setting</Dropdown.Item>
                    <Dropdown.Item href="/order-list">
                      Status Orderer
                    </Dropdown.Item>
                    <Dropdown.Item href="/login" onClick={handleLogout}>Log out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>


              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;