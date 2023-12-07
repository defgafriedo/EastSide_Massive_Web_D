import React, { useState } from "react";
import { Card, Row, Col, Container, Image } from "react-bootstrap";
import drawing1 from "../img/listProfileGallery/Drawing1.png";
import drawing2 from "../img/listProfileGallery/Drawing2.png";
import drawing3 from "../img/listProfileGallery/Drawing3.png";
import drawing4 from "../img/listProfileGallery/Drawing4.png";
import drawing5 from "../img/listProfileGallery/Drawing5.png";
import drawing6 from "../img/listProfileGallery/Drawing6.png";
import drawing7 from "../img/listProfileGallery/Drawing7.png";
import drawing8 from "../img/listProfileGallery/Drawing8.png";
import drawing9 from "../img/listProfileGallery/Drawing9.png";
import "./listProfileSenimanStyle.css";
import Photo from "../img/profile/contoh.png";
import Background3 from "../img/background3.png";

function ListProfileGallery() {
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('${Background3}')`;

  const [imgGalery, setimgGalery] = useState([
    {
      image: drawing1,
      name: "Zidan",
      achievement: "Masterpiece",
      title: "Tittle...",
    },
    {
      image: drawing2,
      name: "Ananta",
      achievement: "Masterpiece",
      title: "Title...",
    },
    {
      image: drawing3,
      name: "Puspa",
      achievement: "Masterpiece",
      title: "Title...",
    },
    {
      image: drawing4,
      name: "Ichan",
      achievement: "Masterpiece",
      title: "Title By..",
    },
    {
      image: drawing5,
      name: "Nando",
      achievement: "Masterpiece",
      title: "Title By..",
    },
    {
      image: drawing6,
      name: "Reno",
      achievement: "Masterpiece",
      title: "Title By..",
    },
    {
      image: drawing7,
      name: "Yasha",
      achievement: "Masterpiece",
      title: "Title By..",
    },
    {
      image: drawing8,
      name: "Yunn",
      achievement: "Masterpiece",
      title: "Title By..",
    },
    {
      image: drawing9,
      name: "Ichan Racing",
      achievement: "Masterpiece",
      title: "Title By..",
    },
  ]);

  return (
    <>
      <Container className="my-5 d-flex justify-content-center align-items-center">
        <Row>
          {imgGalery.map((galleryItem, index) => (
            <Col className="mx-4 my-4" key={index}>
              <Card className="card">
                <Card style={{ position: "relative" }}>
                  <Card.Img variant="top" src={galleryItem.image} />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "40%",
                      marginLeft: "2%",
                    }}
                  >
                    <div
                      style={{ flex: 1, display: "flex", alignItems: "center" }}
                    >
                      <Image
                        src={Photo}
                        style={{
                          backgroundColor: "white",
                          borderRadius: "40%",
                          width: "80px",
                          height: "80px",
                        }}
                      />
                    </div>
                    <div style={{ flex: 2 }}>
                      <Card.Title>{galleryItem.name}</Card.Title>
                      <Card.Title
                        style={{ fontWeight: "normal", fontSize: "12px" }}
                      >
                        {galleryItem.achievement}
                      </Card.Title>
                    </div>
                  </div>
                </Card>
                <Card.Body>
                  <Card.Title
                    style={{
                      fontWeight: "normal",
                      fontSize: "10px",
                      textAlign: "justify",
                    }}
                  >
                    {galleryItem.title}
                  </Card.Title>
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
