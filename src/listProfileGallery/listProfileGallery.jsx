import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import drawing1 from "../img/listProfileGallery/Drawing1.png";
import drawing2 from "../img/listProfileGallery/Drawing2.png";
import drawing3 from "../img/listProfileGallery/Drawing3.png";
import "./listProfileGalleryStyle.css";
import Background3 from "../img/background3.png";
import axios from 'axios';


function ListProfileGallery() {
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('${Background3}')`;

  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/atsListGallery');
        const data = response.data;
        setGalleryData(data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

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
    <>
      <Container className="my-5 d-flex justify-content-center align-items-center">
        <Row>
          {galleryData.map((art, index) => (
            <Col className="mx-4 my-4" key={index}>
              <Card className="card">
                <Card.Img variant="top" src={processPhoto(art.image)} />
                <Card.Body>
                  <Card.Title>{art.nama}</Card.Title>
                  <Card.Text>{art.deskripsi}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default ListProfileGallery;
