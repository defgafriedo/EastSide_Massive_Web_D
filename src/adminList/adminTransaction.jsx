import React, { useRef } from 'react';
import { Card, Row, Col, Container, Table, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './adminList.css';
import drawing1 from '../img/background3.png';
import { FaEllipsisH, FaCheck, FaTimes, FaHome, FaCreditCard, FaUserCircle } from "react-icons/fa";


const adminTransaction = () => {


    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)), url('${drawing1}')`;
    document.body.style.backgroundSize = 'cover';

    return (
        <div>
            <Row className='p-5'>
                <Col xs={2}>
                    <Container style={{ backgroundColor: '#212529', color: 'white', textAlign: 'left', padding: '0px' }}>
                        <div>
                            <h3 className='p-2'>Dashboard</h3>
                        </div>
                        <ul className="list-unstyled components">
                            <Link to="/adminList">
                                <li className="sidebarhover p-2">
                                    <FaHome />{'\u00A0'} Overview
                                </li>
                            </Link>
                            <Link to="/adminTransaction">
                                <li className="sidebarhover p-2">
                                    <FaCreditCard />{'\u00A0'} All Transactions
                                </li>
                            </Link>
                            <Link to="/adminList">
                                <li className="sidebarhover p-2">
                                    <FaUserCircle />{'\u00A0'} All Accounts
                                </li>
                            </Link>
                        </ul>
                    </Container>
                </Col>
                <Col style={{ backgroundColor: '#212529', color: 'white' }}>
                    <h1>List Transaction</h1>
                    <Row>
                        <Col xs={12}>
                            <ul className="list-inline" style={{color: 'white' }}>
                                <li className="list-inline-item">All</li>
                                <li className="list-inline-item">Success</li>
                                <li className="list-inline-item">Refunded</li>
                                <li className="list-inline-item">Uncaptured</li>
                            </ul>
                        </Col>
                    </Row>
                    <Table borderless variant="dark">
                        <thead>
                            <tr className="block-example border-bottom border-white">
                                <th><input type="checkbox" /></th>
                                <th>Amount</th>
                                <th>status</th>
                                <th>Description</th>
                                <th>Customer</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>100.000</td>
                                <td>
                                    <div style={{ backgroundColor: 'lightgreen', padding: '5px', borderRadius: '5px', display: 'flex', alignItems: 'center', color: 'darkgreen' }}>
                                        <FaCheck />
                                        <span style={{ marginRight: '5px' }}>Succeeded</span>
                                    </div>
                                </td>
                                <td>Invoice 6B1E73DA-0017</td>
                                <td>Nanahira@email.com</td>
                                <td>2023-11-23 19:23</td>
                                <td><Button variant="transparent" style={{ color: 'white' }}><FaEllipsisH /></Button></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>100.000</td>
                                <td>
                                    <div style={{ backgroundColor: 'lightgreen', padding: '5px', borderRadius: '5px', display: 'flex', alignItems: 'center', color: 'darkgreen' }}>
                                        <FaCheck />
                                        <span style={{ marginRight: '5px' }}>Succeeded</span>
                                    </div>
                                </td>
                                <td>Invoice 6B1E73DA-0017</td>
                                <td>Nanahira@email.com</td>
                                <td>2023-11-23 19:23</td>
                                <td><Button variant="transparent" style={{ color: 'white' }}><FaEllipsisH /></Button></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>100.000</td>
                                <td>
                                    <div style={{ backgroundColor: 'lightgreen', padding: '5px', borderRadius: '5px', display: 'flex', alignItems: 'center', color: 'darkgreen' }}>
                                        <FaCheck />
                                        <span style={{ marginRight: '5px' }}>Succeeded</span>
                                    </div>
                                </td>
                                <td>Invoice 6B1E73DA-0017</td>
                                <td>Nanahira@email.com</td>
                                <td>2023-11-23 19:23</td>
                                <td><Button variant="transparent" style={{ color: 'white' }}><FaEllipsisH /></Button></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>100.000</td>
                                <td>
                                    <div style={{ backgroundColor: 'lightgreen', padding: '5px', borderRadius: '5px', display: 'flex', alignItems: 'center', color: 'darkgreen' }}>
                                        <FaCheck />
                                        <span style={{ marginRight: '5px' }}>Succeeded</span>
                                    </div>
                                </td>
                                <td>Invoice 6B1E73DA-0017</td>
                                <td>Nanahira@email.com</td>
                                <td>2023-11-23 19:23</td>
                                <td><Button variant="transparent" style={{ color: 'white' }}><FaEllipsisH /></Button></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>100.000</td>
                                <td>
                                    <div style={{ backgroundColor: 'lightgreen', padding: '5px', borderRadius: '5px', display: 'flex', alignItems: 'center', color: 'darkgreen' }}>
                                        <FaCheck />
                                        <span style={{ marginRight: '5px' }}>Succeeded</span>
                                    </div>
                                </td>
                                <td>Invoice 6B1E73DA-0017</td>
                                <td>Nanahira@email.com</td>
                                <td>2023-11-23 19:23</td>
                                <td><Button variant="transparent" style={{ color: 'white' }}><FaEllipsisH /></Button></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>100.000</td>
                                <td>
                                    <div style={{ backgroundColor: 'lightgreen', padding: '5px', borderRadius: '5px', display: 'flex', alignItems: 'center', color: 'darkgreen' }}>
                                        <FaCheck />
                                        <span style={{ marginRight: '5px' }}>Succeeded</span>
                                    </div>
                                </td>
                                <td>Invoice 6B1E73DA-0017</td>
                                <td>Nanahira@email.com</td>
                                <td>2023-11-23 19:23</td>
                                <td><Button variant="transparent" style={{ color: 'white' }}><FaEllipsisH /></Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div >
    );
};

export default adminTransaction;
