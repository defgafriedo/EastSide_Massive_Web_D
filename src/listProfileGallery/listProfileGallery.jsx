import { Card, Row, Col, Container } from 'react-bootstrap'
import drawing1 from '../img/listProfileGallery/Drawing1.png'
import './listProfileGalleryStyle.css'

const listProfileGallery = () => {
    return (
        <>
            <Container className='my-5 d-flex justify-content-center align-items-center'>
                <Row>
                    <Col className='mx-4 my-4'>
                        <Card className='card'>
                            <Card.Img variant="top" src={drawing1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Price Rp.25.000.000,00
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mx-4 my-4'>
                        <Card className='card'>
                            <Card.Img variant="top" src={drawing1} className='card-img'/>
                            <Card.Body>
                                <Card.Title className='card-title'>Card Title</Card.Title>
                                <Card.Text className='card-text'>
                                    Price Rp.25.000.000,00
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mx-4 my-4'>
                        <Card className='card'>
                            <Card.Img variant="top" src={drawing1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Price Rp.25.000.000,00
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mx-4 my-4'>
                        <Card className='card'>
                            <Card.Img variant="top" src={drawing1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Price Rp.25.000.000,00
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mx-4 my-4'>
                        <Card className='card'>
                            <Card.Img variant="top" src={drawing1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Price Rp.25.000.000,00
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mx-4 my-4'>
                        <Card className='card'>
                            <Card.Img variant="top" src={drawing1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Price Rp.25.000.000,00
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mx-4 my-4'>
                        <Card className='card'>
                            <Card.Img variant="top" src={drawing1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Price Rp.25.000.000,00
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mx-4 my-4'>
                        <Card className='card'>
                            <Card.Img variant="top" src={drawing1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Price Rp.25.000.000,00
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mx-4 my-4'>
                        <Card className='card'>
                            <Card.Img variant="top" src={drawing1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Price Rp.25.000.000,00
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default listProfileGallery