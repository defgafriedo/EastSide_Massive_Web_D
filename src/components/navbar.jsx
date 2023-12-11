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
                      href="#/action-4"
                      style={{ display: "flex" }}
                    >
                      <Image
                        src={Photo}
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
                          {user[0].username}
                        </span>
                        <span style={{ display: "block" }}>
                          {user[0].email}
                        </span>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="/user1">View profile</Dropdown.Item>
                    <Dropdown.Item href="/">Setting</Dropdown.Item>
                    <Dropdown.Item href="/order-list">
                      Status Orderer
                    </Dropdown.Item>
                    <Dropdown.Item href="/login">Log out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>