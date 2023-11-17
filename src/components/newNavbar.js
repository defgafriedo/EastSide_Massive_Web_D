import { Navbar, InputGroup, Nav, FormControl, Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.png';
import { FaSearch } from 'react-icons/fa';

function NavBar() {
  return (
    <>
      {/* <Stack direction="horizontal" gap={3}>
      <div className="p-2">First item</div>
      <div className="p-2">Second item</div>
      <div className="p-2">Third item</div>
    </Stack> */}
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: 'rgba(11, 11, 11, 0.5)' }}>
        <Container fluid className='mx-4'>
        <Navbar.Brand href=''><img className="logo" src={logo} alt="Logo" /></Navbar.Brand>
        <div className="d-none d-lg-block" style={{ height: '50px', border: '1px solid #fff', margin: '0 80px 0 20px' }}></div>

        <InputGroup className='search-bar' style={{ width: '250px' }}>
          <InputGroup.Text className="search-icons" style={{ backgroundColor: '#fff' }}>
            <FaSearch />
          </InputGroup.Text>
          <FormControl className="search-input" placeholder='Search' />
        </InputGroup>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ backgroundColor: '#fff', color: '#fff' }} />

        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="ms-auto">
            <Nav.Link href="#dashboard" className='me-5' style={{ color: '#fff' }}>Dashboard</Nav.Link>
            <Nav.Link href="#about" className='me-5' style={{ color: '#fff' }}>About</Nav.Link>
            <Nav.Link href="#listArtist" className='me-5' style={{ color: '#fff' }}>List Artist</Nav.Link>
            <Button variant="primary">Log In/Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
