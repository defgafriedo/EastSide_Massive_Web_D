import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Table } from 'react-bootstrap';
import Dana from '../img/paymentLogo/Dana.png'
import OVO from '../img/paymentLogo/OVO.png'
import ShopeePay from '../img/paymentLogo/ShopeePay.png'
import BRI from '../img/paymentLogo/bankBRI.png'
import BCA from '../img/paymentLogo/BankBCA.png'
import './paymentStyle.css'

const payment = () => {
  return (
    <Container>
      <Row >
        <Col md={8} className='my-4'>
          <Card className='card'>
            <Card.Body className='card-body'>
              <div className="w-auto">
                <h5>Payment</h5>
                <div className='my-3'>
                  <input type="radio" id="Dana" name="paymentMethod" value="Dana" />
                  <label htmlFor="Dana"><img className="Dana mx-3" src={Dana} alt="Dana"/></label>
                </div>
                <div className='my-3'>
                  <input type="radio" id="Ovo" name="paymentMethod" value="Ovo" />
                  <label htmlFor="Ovo"><img className="Ovo mx-3" src={OVO} alt="OVO"/></label>
                </div>
                <div className='my-3'>
                  <input type="radio" id="Shopee-pay" name="paymentMethod" value="Shopee-pay" />
                  <label htmlFor="Shopee-pay"><img className="ShopeePay mx-3" src={ShopeePay} alt="ShopeePay"/></label>
                </div>
              </div>
              <div className='my-5'>
                <h5>Virtual Account</h5>
                <div className='my-3'>
                  <input type="radio" id="BRI" name="paymentMethod" value="BRI" />
                  <label htmlFor="BRI"><img className="BRI mx-3" src={BRI} alt="BRI"/></label>
                </div>
                <div className='my-3'>
                  <input type="radio" id="BCA" name="paymentMethod" value="BCA" />
                  <label htmlFor="BCA"><img className="BCA mx-3" src={BCA} alt="BCA"/></label>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className='my-4'>
          <Card className='card'>
            <Card.Body >
              <Table borderless hover size='sm' className='table-payment'>
                <tbody>
                  <tr>
                    <td className="text-start">Artwork Price</td>
                    <td className="text-end">Rp.900.000,00</td>
                  </tr>
                  <tr>
                    <td className="text-start">Shopping Fee</td>
                    <td className="text-end">Rp.100.000,00</td>
                  </tr>
                  <br />
                  <br />
                  <br />
                  <tr>
                    <td className="text-start">Total</td>
                    <td className="text-end">Rp.1.000.000,00</td>
                  </tr>

                </tbody>
              </Table>
              <div className="d-grid gap-2">
                <Button variant="primary">
                  Check Out
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default payment;
