import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col, Container, Table, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './adminList.css';
import drawing1 from '../img/background3.png';
import { FaEllipsisH, FaCheck, FaTimes, FaHome, FaCreditCard, FaUserCircle } from "react-icons/fa";


const AdminTransaction = () => {
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)), url('${drawing1}')`;
    document.body.style.backgroundSize = 'cover';
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/atsShowAllOrder');
                setTransactions(response.data.message);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Row className='p-5'>
                <Col xs={2}>
                    <Container style={{ backgroundColor: '#212529', color: 'white', textAlign: 'left', padding: '0px' }}>
                        <div>
                            <h3 className='p-2'>Dashboard</h3>
                        </div>
                        <ul className="list-unstyled components">
                            <Link to="/admin/adminOverview">
                                <li className="sidebarhover p-2">
                                    <FaHome />{'\u00A0'} Overview
                                </li>
                            </Link>
                            <Link to="/admin/adminTransaction">
                                <li className="sidebarhover p-2">
                                    <FaCreditCard />{'\u00A0'} All Transactions
                                </li>
                            </Link>
                            <Link to="/admin/adminList">
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
                            <ul className="list-inline" style={{ color: 'white' }}>
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
                            {transactions.map(transaction => (
                                <tr key={transaction.id}>
                                    <td><input type="checkbox" /></td>
                                    <td>Rp. {transaction.total}</td>
                                    <td>
                                        <div style={{ backgroundColor: 'lightgreen', padding: '5px', borderRadius: '5px', display: 'flex', alignItems: 'center', color: 'darkgreen' }}>
                                            <FaCheck />
                                            <span style={{ marginRight: '5px' }}>{transaction.status}</span>
                                        </div>
                                    </td>
                                    <td>{transaction.invoice}</td>
                                    <td>{transaction.nama_pembeli}</td>
                                    <td className="px-4">{new Date(transaction.tanggal).toISOString().split('T')[0]}</td>
                                    <td><Button variant="transparent" style={{ color: 'white' }}><FaEllipsisH /></Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div >
    );
};

export default AdminTransaction;
