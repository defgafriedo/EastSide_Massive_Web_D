import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row, Table, } from "react-bootstrap";
import { Link } from "react-router-dom";
import Gambar from "../img/Drawing2.png";
import Background3 from "../img/background3.png";
import axios from 'axios';


const OrderList = ({ idPembeli }) => {
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('${Background3}')`;

  const [orderData, setOrderData] = useState([]);
  const storedUserId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/atsShowOrder/${storedUserId}`);
        const data = response.data;
        setOrderData(data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [idPembeli]);

  const processPhoto = (photo) => {
    if (!photo) {
      return '';
    }
    const delimiter = "karyaAsset/";
    const basePath = 'http://localhost:5000/karya/';
    const slicedPath = photo.substring(photo.indexOf(delimiter) + delimiter.length);
    const fullPath = `${basePath}${slicedPath}`;
    const fileURL = fullPath;
    return fileURL;
  };

  return (
    <Container fluid>
      <div
        className="mx-5 my-4 d-flex"
        style={{
          backgroundColor: "rgba(72, 90, 255, 0.65)",
          color: "#fff",
          borderRadius: "10px",
        }}
      >
        <h3 className="mx-3 my-2">Order Status List</h3>
      </div>

      <Col className="mx-5 my-3" style={{ color: "#fff" }}>
        {orderData.map(order => (
          <Row key={order.id}
            className="rounded-4 my-4"
            style={{ backgroundColor: "rgba(11, 11, 11, 0.8)" }}
          >
            <Col className="px-0 col-md-3 d-flex flex-column align-items-center">
              <img src={processPhoto(order.image)} className="img-fluid mt-4 w-50 h-50" style={{ objectFit: "cover" }} alt="Order Image" />
              <h5 className="mx-5 mt-3" style={{ alignItems: 'center' }}>{order.nama} <small style={{ fontSize: '12px' }}>by {order.nama_pembeli}</small></h5>
            </Col>
            <Col className="col-md-9 my-2">
              <Row className="m-3">
                <table style={{ fontWeight: '500' }}>
                  <tbody style={{ border: '1px solid #545454' }}>
                    <tr>
                      <td className="px-3 py-1" style={{ borderRight: '1px solid #545454', textAlign: 'right', width: '25%' }}>Order Status</td>
                      <td className="px-4">{order.status}</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-1" style={{ borderRight: '1px solid #545454', textAlign: 'right' }}>Order Date</td>
                      <td className="px-4">{new Date(order.tanggal).toISOString().split('T')[0]}</td>

                    </tr>
                    <tr>
                      <td className="px-3 py-1" style={{ borderRight: '1px solid #545454', textAlign: 'right' }}>Payment Method</td>
                      <td className="px-4">{order.metode_pembayaran}</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-1" style={{ borderRight: '1px solid #545454', textAlign: 'right' }}>Payment Number</td>
                      <td className="px-4">{order.nomor_pembayaran}</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-1" style={{ borderRight: '1px solid #545454', textAlign: 'right' }}>Address</td>
                      <td className="px-4">{order.alamat}</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-1" style={{ borderRight: '1px solid #545454', textAlign: 'right' }}>Invoice</td>
                      <td className="px-4">{order.invoice}</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-1" style={{ borderRight: '1px solid #545454', textAlign: 'right' }}>Resi Number</td>
                      <td className="px-4">{order.resi}</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-1" style={{ borderRight: '1px solid #545454', textAlign: 'right' }}>Delivery</td>
                      <td className="px-4">{order.kurir}</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-1" style={{ borderRight: '1px solid #545454', textAlign: 'right' }}>Total</td>
                      <td className="px-4">{order.total}</td>
                    </tr>
                  </tbody>
                </table>
              </Row>

              <Row className="mx-1 my-2 justify-content-end">
                <Col xs="auto" className="my-1">
                  <Button variant="secondary" href="/order-detail" style={{ width: '15rem' }}>
                    Report
                  </Button>
                </Col>
                <Col xs="auto" className="my-1">
                  <Button variant="primary" href="/order-detail" style={{ width: '15rem' }}>
                    Received
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
      </Col>
    </Container>
  );
};

export default OrderList;