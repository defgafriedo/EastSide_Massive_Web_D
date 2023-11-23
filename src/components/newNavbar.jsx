import { Navbar, InputGroup, Nav, FormControl, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.png';
import { FaSearch } from 'react-icons/fa';
import './newNavbarStyle.css';

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: 'rgba(11, 11, 11, 0.5)' }}>
        <Container fluid className='mx-4'>
          <Navbar.Brand href=''><img src={logo} alt="Logo" /></Navbar.Brand>
          <div className="d-none d-lg-block" style={{ height: '50px', border: '1px solid #fff', margin: '0 80px 0 20px' }}></div>

          <InputGroup className='search-bar ' style={{ width: '250px', borderColor: '#535353' }} >
            <InputGroup.Text className="search-icons" style={{ backgroundColor: '#535353', borderColor: '#535353', color: 'var(--mid-gray-mid-gray-4, #9AA6AC)' }}>
              <FaSearch />
            </InputGroup.Text>
            <FormControl className="search-input" placeholder='Search' style={{ cursor: 'text', backgroundColor: '#535353', borderColor: '#535353', color: '#fff' }} />
          </InputGroup>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ backgroundColor: '#fff', color: '#fff' }} />

          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="ms-auto">
              <Nav.Link href="/order-list" className='me-5' style={{ color: '#fff' }}>Dashboard</Nav.Link>
              <Nav.Link href="/list-profile-gallery" className='me-5' style={{ color: '#fff' }}>About</Nav.Link>
              <Nav.Link href="/payment" className='me-5' style={{ color: '#fff' }}>List Artist</Nav.Link>
              <Button variant="primary">Log In/Sign Up</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
