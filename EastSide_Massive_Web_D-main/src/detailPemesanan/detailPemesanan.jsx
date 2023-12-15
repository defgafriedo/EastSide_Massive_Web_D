import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './detailPemesanan.css';

const detailPemesanan = () => {
    // document.body.style.backgroundImage = linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('${drawing1}');
  return (
    <Container style={{ marginTop: '50px' }}>

    <Row>
      <Col>
        <Card.Title  style={{ backgroundColor: 'rgba(72, 90, 255, 0.65,)', opacity: '75px', color: 'white' }}>Order List</Card.Title>
      </Col>
    </Row>

    <Row>
      <Col md={8}>
        <Row>
          <Col>
            <Card style={{ marginTop: '20px',width: '54rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Text>
                Abstract paintings often create a unique and sometimes perplexing visual experience, liberating the viewer from the constraints of objective representation. In abstract art, forms and colors are combined in ways not bound by physical reality, creating a broad space for interpretation.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <FloatingLabel controlId="floatingTextarea2" label="Comments" style={{ marginTop: '10px',color: 'white' }}>
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px',backgroundColor: 'rgba(64,64,64,0.7)' }}
              />
            </FloatingLabel>
          </Col>
        </Row>
      </Col>

      <Col md={4}>
        <Row>
          <Col>
            <Col md={30}>
              <Card style={{ width: '25rem', marginTop: '20px' }}>
                <Card.Body>
                  <Row>
                    <Col>
                      Artwork Price
                    </Col>
                    <Col>
                      Rp. 1,000,000
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      Shipping Fee
                    </Col>
                    <Col>
                      Rp. 100.000,00
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      Total
                    </Col>
                    <Col>
                      Rp. 1.000.000,00
                    </Col>
                  </Row>
                  <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" style={{marginTop:'10px'}}>
                      Block level button
                    </Button>
                    
                  </div>

                </Card.Body>
              </Card>
            </Col>
          </Col>
        </Row>
      </Col>
    </Row>


  </Container>
  );
}

export default detailPemesanan