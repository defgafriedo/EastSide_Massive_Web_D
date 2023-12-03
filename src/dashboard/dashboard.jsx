import React, { useRef } from 'react';
import { Card, Row, Col, Container, Table, Button } from 'react-bootstrap';
import './dashboard.css';
import drawing1 from '../img/background1.png';
import art1 from '../img/dashboard/art1.png';
import art2 from '../img/dashboard/art2.png';
import art3 from '../img/dashboard/art3.png';
import art4 from '../img/dashboard/art4.png';
import top1 from '../img/dashboard/top1.png';
import top2 from '../img/dashboard/top2.png';
import top3 from '../img/dashboard/top3.png';
import testi1 from '../img/dashboard/testi1.png';
import testi2 from '../img/dashboard/testi2.png';
import testi3 from '../img/dashboard/testi3.png';
const Dashboard = () => {
    const containerRef = useRef(null);
    document.body.style.background = 'RED';
    document.body.style.backgroundSize = 'cover';

    return (
        <div>
            <Container>
                <Container style={{ marginBottom: '1rem', marginTop: '2rem' }}>
                    <Button variant="outline-black" className="navbar-btn">All</Button>
                    <Button variant="outline-black" className="navbar-btn">Painting</Button>
                    <Button variant="outline-black" className="navbar-btn">Statue</Button>
                </Container>

                <div className="horizontal-scroll-container" style={{ marginBottom: '4rem' }} ref={containerRef}>

                    <Row style={{ flexWrap: 'nowrap' }} className="text-white text-center">
                        <Col style={{ Width: '16rem' }}>
                            <Card className="mb-4" style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={art1} />
                                <Card.Body>
                                    <Card.Title>Hopeless</Card.Title>
                                    <Card.Text>Robin Hanson</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col style={{ Width: '16rem' }}>
                            <Card className="mb-4" style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={art2} />
                                <Card.Body>
                                    <Card.Title>Unconfident</Card.Title>
                                    <Card.Text>Connely Rod</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col style={{ Width: '16rem' }}>
                            <Card className="mb-4" style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={art3} />
                                <Card.Body>
                                    <Card.Title>Dry and Tears</Card.Title>
                                    <Card.Text>Calvin Nera</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col style={{ Width: '16rem' }}>
                            <Card className="mb-4" style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={art4} />
                                <Card.Body>
                                    <Card.Title>Goddess of Fortune</Card.Title>
                                    <Card.Text>Jerry Lorenzo</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col style={{ Width: '16rem' }}>
                            <Card className="mb-4" style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={art1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>Some quick example</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col style={{ Width: '16rem' }}>
                            <Card className="mb-4" style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={art2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>Some quick example</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <Container style={{ marginBottom: '2rem' }}>
                    <h1 style={{ color: 'white', fontSize: '2em' }}>Top 3 Artist</h1>
                </Container>
                <Row className="justify-content-center align-items-center" style={{ marginBottom: '4rem' }}>
                    <Col md="auto" style={{ marginRight: '4rem' }}>
                        <Card className="" style={{ width: '16rem' }}>
                            <Card.Img variant="top" src={top1} />
                            <Card.Body>
                                <Card.Title>Fall Apart by Jidan Bjir</Card.Title>
                                <Card.Text>Price: Rp 25.000.000,00</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="auto">
                        <Card className="mb-5" style={{ width: '16rem' }}>
                            <Card.Img variant="top" src={top2} />
                            <Card.Body>
                                <Card.Title>Lies by Jidan Bjir</Card.Title>
                                <Card.Text>Price: Rp 25.000.000,00</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="auto" style={{ marginLeft: '4rem' }}>
                        <Card style={{ width: '16rem' }}>
                            <Card.Img variant="top" src={top3} />
                            <Card.Body>
                                <Card.Title>Blood Tsuki by Jidan Bjir</Card.Title>
                                <Card.Text>Price: Rp 25.000.000,00</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="black-background " style={{ marginBottom: '4rem' }}>
                    <Col>
                        <Container>
                            <Button variant="outline-black" className="navbar-artist">Trending</Button>
                            <Button variant="outline-black" className="navbar-artist">Top</Button>
                        </Container>
                        <Table borderless variant="dark">
                            <thead>
                                <tr className="block-example border-bottom border-white">
                                    <th>No</th>
                                    <th>Artist</th>
                                    <th>Avg Price</th>
                                    <th>Sum of Art</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Ananta Rizky</td>
                                    <td>1.000.000</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Ananta Rizky</td>
                                    <td>1.000.000</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Ananta Rizky</td>
                                    <td>1.000.000</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Ananta Rizky</td>
                                    <td>1.000.000</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Ananta Rizky</td>
                                    <td>1.000.000</td>
                                    <td>200</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        <Container>
                            <Button variant="outline-black">Trending</Button>
                            <Button variant="outline-black">Top</Button>
                        </Container>
                        <Table borderless variant="dark">
                            <thead>
                                <tr className="block-example border-bottom border-white">
                                    <th>No</th>
                                    <th>Artist</th>
                                    <th>Avg Price</th>
                                    <th>Sum of Art</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>6</td>
                                    <td>Ananta Rizky</td>
                                    <td>1.000.000</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Ananta Rizky</td>
                                    <td>1.000.000</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Ananta Rizky</td>
                                    <td>1.000.000</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Ananta Rizky</td>
                                    <td>1.000.000</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Ananta Rizky</td>
                                    <td>1.000.000</td>
                                    <td>200</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <div className="black-background text-white text-center">
                    <h4 style={{ marginBottom: '3rem', marginBottom: '3rem' }}>Testimonial from success artists</h4>
                    <Row className="justify-content-center" >
                        <Col md="auto" style={{ marginRight: '4rem' }} className='py-5'>
                            <Card className="align-items-center py-5 px-3" style={{ width: '16rem', background: '#D9D9D9', }}>
                                <Card.Img variant="top" src={testi1} style={{ width: '75px', height: '57px', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title style={{ color: 'black', fontSize: '16px' }}>Ananta Kun</Card.Title>
                                    <Card.Text style={{ color: 'black', fontSize: '12px' }}>
                                        <strong>Artist Top 2</strong>
                                    </Card.Text>
                                    <Card.Text style={{ color: 'black', fontSize: '12px' }}>
                                        “There’s twin line beetwen life and death. U will find justice over there.”
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md="auto">
                            <Card className="align-items-center py-5 px-3" style={{ width: '16rem', background: '#D9D9D9', }}>
                                <Card.Img variant="top" src={testi1} style={{ width: '75px', height: '57px', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title style={{ color: 'black', fontSize: '16px' }}>Zidan Bjir</Card.Title>
                                    <Card.Text style={{ color: 'black', fontSize: '12px' }}>
                                        <strong>Artist Top 1</strong>
                                    </Card.Text>
                                    <Card.Text style={{ color: 'black', fontSize: '12px' }}>
                                        “There’s twin line beetwen life and death. U will find justice over there.”
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="auto" style={{ marginLeft: '4rem' }} className='py-5'>
                            <Card className="align-items-center py-5 px-3" style={{ width: '16rem', background: '#D9D9D9', }}>
                                <Card.Img variant="top" src={testi1} style={{ width: '75px', height: '57px', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title style={{ color: 'black', fontSize: '16px' }}>Reno Kun</Card.Title>
                                    <Card.Text style={{ color: 'black', fontSize: '12px' }}>
                                        <strong>Artist Top 3</strong>
                                    </Card.Text>
                                    <Card.Text style={{ color: 'black', fontSize: '12px' }}>
                                        “There’s twin line beetwen life and death. U will find justice over there.”
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>

            </Container>
        </div>
    );
};

export default Dashboard;
