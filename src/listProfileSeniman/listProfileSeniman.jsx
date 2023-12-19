import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container, Image } from "react-bootstrap";
import "./listProfileSenimanStyle.css";
import axios from "axios";
import Background3 from "../img/background3.png";
import {Link} from 'react-router-dom'

function ListProfileSeniman() {
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('${Background3}')`;

  const [GallerySeniman, setGallerySeniman] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/atsListProfileSeniman"
        );
        const data = response.data;
        const uniqueUsers = Array.from(new Set(data.data.map(item => item.id_user)));
        const uniqueGallery = uniqueUsers.map(userId => data.data.find(item => item.id_user === userId));

        setGallerySeniman(uniqueGallery);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const processPhotoArt = (photo) => {
    if (!photo) {
      return "";
    }
    const delimiter = "karyaAsset/";
    const basePath = "http://localhost:5000/karya/";
    const slicedPath = photo.substring(
      photo.indexOf(delimiter) + delimiter.length
    );
    const fullPath = `${basePath}${slicedPath}`;
    const fileURL = fullPath;
    return fileURL;
  };

  const processPhotoUser = (photo) => {
    if (!photo) {
      return "";
    }
    const delimiter = "profileAsset/";
    const basePath = "http://localhost:5000/stat/";
    const slicedPath = photo.substring(
      photo.indexOf(delimiter) + delimiter.length
    );
    const fullPath = `${basePath}${slicedPath}`;
    const fileURL = fullPath;
    return fileURL;
  };

  return (
    <>
      <Container className="my-5 d-flex justify-content-center align-items-center">
        <Row>
          {GallerySeniman.map((galleryItem, index) => (
            <Col className="mx-4 my-4" key={index}>
               <Link to={`/profilegaleryuser?id_user=${galleryItem.id_user}`}>
                <Card className="card">
                  <Card style={{ position: "relative" }}>
                    <Card.Img
                      variant="top"
                      src={processPhotoArt(galleryItem.image)}
                      style={{ height: "350px", objectFit: "cover" }}
                    />
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
                          src={processPhotoUser(galleryItem.user_image)}
                          style={{
                            backgroundColor: "white",
                            borderRadius: "40%",
                            width: "80px",
                            height: "80px",
                          }}
                        />
                      </div>
                      <div style={{ flex: 2 }}>
                        <Card.Title>{galleryItem.artist_name}</Card.Title>
                        <Card.Title
                          style={{ fontWeight: "normal", fontSize: "12px" }}
                        >
                          {galleryItem.jenis}
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
                      {galleryItem.nama}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default ListProfileSeniman;
