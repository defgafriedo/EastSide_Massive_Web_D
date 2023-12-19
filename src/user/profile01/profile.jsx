import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Background from "../../img/profile/background2.png";

import "../profileStyle.css";
import axios from "axios";

function Profile() {
  document.body.style.backgroundImage = ` url('${Background}')`;

  const storedUserId = localStorage.getItem("userId");
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [desk, setDesk] = useState("");
  const [tag, setTag] = useState([]);
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    const fetchUserById = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/atsgetuser",
          {
            params: {
              id_user: storedUserId,
            },
          }
        );

        if (response.data.success && response.data.user) {
          console.log("api", response.data.user.image);
          // setPhoto(response.data.user.image);
          const delimiter = "profileAsset/";
          const basePath = "http://localhost:5000/stat/";
          const slicedPath = response.data.user.image.substring(
            response.data.user.image.indexOf(delimiter) + delimiter.length
          );
          const fullPath = `${basePath}${slicedPath}`;
          const fileURL = fullPath;
          setPhoto(fileURL);
          setName(response.data.user.nama);
          setDesk(response.data.user.deskripsi);
          setTag(response.data.user.tagline.split(','))
          
          console.log("api", fullPath);
        } else {
          console.error("sad", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserById();
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/atsgetartworkbyid?id_user=${storedUserId}`
        );
        const data = response.data;
        setGalleryData(data.artList); // Change to artList instead of artDetails

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();

  }, []);

  const processPhoto = (photo) => {
    if (!photo) {
      return ""; // handle undefined or null case
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


  const [kategoriArtist] = useState([
    "Painter",
    "Abstract Art",
    "Illustration Art",
    "Realist Art",
    "Natural Landscape",
    "Statue",
    "Statue",
    "Ceramics",
    "Clay",
    "Sculpture",
    "Teknik Resin",
    "Resin Engineering",
  ]);

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-start"
      style={{
        backgroundsize: "cover",
        backgroundrepeat: "no-repeat",
        backgroundposition: "center",
        backgroundcolor: "black",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <style>
        {`
          @media screen and (max-width: 900px) {
            .container-fluid {
              flex-direction: column !important;
            }
          }
        `}
      </style>

      <Row
        className="my-2 mb-3"
        style={{
          backgroundColor: "#292929",
          width: "200px",
          height: "400px",
          borderRadius: "5px",
          marginLeft: "20px",
        }}
      >
        <Col>
          <Col className="d-flex justify-content-center">
            <Col xs={8} className="p-2 text-center mt-2">
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: "white",
                }}
              >
                <Image
                  src={photo}
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <h5 className="mt-2" style={{ color: "white" }}>
                {name}
              </h5>
            </Col>
          </Col>
          <Col
            className="pm-5 d-flex flex-column align-items-start"
            style={{ marginRight: "34px" }}
          >
            <Button
              href="/editprofile1"
              className="edit-button d-flex align-items-start"
            >
              Edit&nbsp;profile
            </Button>
            <Button
              href="/login"
              className="edit-button d-flex align-items-start"
            >
              Logout
            </Button>
          </Col>
        </Col>
      </Row>
      <Row className="my-2 mb-3">
        <Col
          style={{
            backgroundColor: "#292929",
            width: "550px",
            height: "500px",
            borderRadius: "5px",
            marginLeft: "30px",
            overflow: "hidden",
            overflowY: "auto",
          }}
        >
          <Col className="gallery-artist">
            <div className="image-galery">
              {galleryData.map((item, index) => (
                <div key={index} className="image-container">
                  <img
                    style={{ width: "200px", height: "300px" }}
                    src={processPhoto(item.image)}
                    alt={`Image`}
                    className="responsive-image mt-2"
                  />

                  <div className="overlay-image">
                    <h6>{item.judul}</h6>
                    <p>By{item.artist}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Col>
      </Row>
      <Row className="my-2 mb-3 m-3">
        <Col
          className="mt-1"
          style={{
            color: "white",
            textAlign: "justify",
            fontWeight: "lighter",
            width: "420px",
          }}
        >
          <h3>Description</h3>
          <p>{desk}</p>
          <Col
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "5%",
              flexDirection: "column",
              flexwrap: "wrap",
              marginLeft: "10%",
            }}
          >
            <div
              className="category-container"
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-end",
                display: "flex",
              }}
            >
              {tag.map((tag, index) => (
                <Button
                  key={index}
                  className="cetegory-button"
                  style={{ fontSize: '12px' }}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
