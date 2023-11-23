import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import './inputPostingKarya.css';



const inputPostingKarya = () => {
  return (
   <>
    <Container style={{ marginTop: '50px' }}>
        <Nav variant="underline" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home" style={{color: 'white'}}>Post</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" style={{color: 'white'}}>Sell</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" style={{color: 'white'}} disabled>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Row>
          <Col md={3}>
            <Card style={{ width: '15rem', backgroundColor: 'rgba(72,90,255,0.7)', fontSize: '10px', marginTop: '10px' }}>
              <Card.Body>
                <Card.Title><Form.Label style={{color: 'white'}} > Artwok Posting</Form.Label></Card.Title>
              </Card.Body>
            </Card>

            <Row>
              <Col style={{ marginTop: '10px' }} md={20}>
                <Form.Label style={{color: 'white'}}> Input Gambar</Form.Label>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Control type="file" />
                </Form.Group>
              </Col>

            </Row>
            <Row>
              <Card style={{ width: '18rem', backgroundColor: 'rgba(64,64,64,0.7)' }}>
                <Card.Body>
                  <Card.Title><Form.Label style={{color: 'white'}} > Artwork Theme</Form.Label></Card.Title>
                  <hr />
                  <Col style={{ marginTop: '10px' }} md={20}>
                    <Form.Control type="text" placeholder="Normal text" style={{ backgroundColor: 'rgba(64,64,64,0.7)',color:'white'}}/>
                  </Col>
                </Card.Body>
              </Card>
            </Row>

            <Row style={{ marginTop: '10px' }}>
              <Card style={{ width: '18rem', backgroundColor: 'rgba(64,64,64,0.7)' }}>
                <Card.Body>
                  <Card.Title><Form.Label style={{color: 'white'}}> Artwork Title</Form.Label></Card.Title>
                  <hr />
                  <Col style={{ marginTop: '10px' }} md={20}>
                    <Form.Control type="text" placeholder="Normal text" style={{ backgroundColor: 'rgba(64,64,64,0.7)',color:'white'}} />
                  </Col>
                </Card.Body>
              </Card>
            </Row>

            <Row style={{ marginTop: '10px' }}>
              <Card style={{ width: '18rem', backgroundColor: 'rgba(64,64,64,0.7)' }}>
                <Card.Body>
                  <Card.Title><Form.Label style={{color: 'white'}}> Artwork Type</Form.Label></Card.Title>
                  <hr />
                  <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </DropdownButton>
                </Card.Body>
              </Card>
            </Row>
          </Col>

          <Col md={5}>
            <Row>
              <Col>
                <Col md={30} >
                  <Card style={{ width: '9rem', backgroundColor: 'rgba(72,90,255,0.7)', fontSize: '10px' }}>
                    <Card.Body>
                      <Card.Title style={{marginTop : '10px',color: 'white'}}><Form.Label > Description</Form.Label></Card.Title>
                    </Card.Body>
                  </Card>
                  <FloatingLabel controlId="floatingTextarea2" label="Comments" style={{ marginTop: '10px',color: 'white' }} >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ marginBottom: '10px', height: '300px',backgroundColor: 'rgba(0,0,0,0.7)' }}
                      

                    />
                  </FloatingLabel>
                  <Button variant="primary">Cancel</Button>{' '}
                  <Button variant="primary">Post</Button>{' '}
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
   </>
  );
}

export default inputPostingKarya