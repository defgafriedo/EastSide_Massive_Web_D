import React, { useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import drawing1 from "../img/listProfileGallery/Drawing1.png";
import drawing2 from "../img/listProfileGallery/Drawing2.png";
import drawing3 from "../img/listProfileGallery/Drawing3.png";
import drawing4 from "../img/listProfileGallery/Drawing4.png";
import drawing5 from "../img/listProfileGallery/Drawing5.png";
import drawing6 from "../img/listProfileGallery/Drawing6.png";
import drawing7 from "../img/listProfileGallery/Drawing7.png";
import drawing8 from "../img/listProfileGallery/Drawing8.png";
import drawing9 from "../img/listProfileGallery/Drawing9.png";
import "./listProfileGalleryStyle.css";
import Background3 from "../img/background3.png";

function ListProfileGallery() {
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('${Background3}')`;

  const [imgGalery] = useState([
    drawing1,
    drawing2,
    drawing3,
    drawing4,
    drawing5,
    drawing6,
    drawing7,
    drawing8,
    drawing9,
  ]);

  const [title] = useState([
    "Title By..",
    "Title By..",
    "Title By..",
    "Title By..",
    "Title By..",
    "Title By..",
    "Title By..",
    "Title By..",
    "Title By..",
  ]);

  const [price] = useState([
    25000000, 10000000, 5000000, 1000000, 35000000, 60000000, 5000000, 1000000,
    5000000,
  ]);

  return (
    <>
      <Container className="my-5 d-flex justify-content-center align-items-center">
        <Row>
          {title.map((titlefill, index) => (
            <Col className="mx-4 my-4" key={index}>
              <Card className="card">
                <Card.Img variant="top" src={imgGalery[index]} />
                <Card.Body>
                  <Card.Title>{titlefill}</Card.Title>
                  <Card.Text>Price Rp.{price[index]}</Card.Text>
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
