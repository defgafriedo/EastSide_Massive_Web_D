import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Image, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import Background from "../img/profile/background2.png";
import Photo from "../img/profile/contoh.png";
import "./profileStyle.css";

function Editprofile() {
  document.body.style.backgroundImage = ` url('${Background}')`;
  document.body.style.backgroundSize = "cover";

  const [kategoriArtist] = useState([
    "Statue",
    "Ceramics",
    "Clay",
    "Sculpture",
    "Teknik Resin",
    "Resin Engineering",
  ]);

  const [formData, setFormData] = useState({
    email: "",
    nama: "",
    nomerKontak: "",
    alamat: "",
    facebook: "",
    instagram: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Formulir:", formData);
  };

  return (
    <Container
      fluid
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
          @media screen and (max-width: 908px) {
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
          height: "300px",
          borderRadius: "5px",
          marginLeft: "20px",
        }}
      >
        <Col>
          <Col className="d-flex justify-content-center">
            <Col xs={8} className="p-2 text-center mt-2">
              <Image
                src={`${Photo}`}
                style={{ backgroundColor: "white" }}
                roundedCircle
              />

              <h5 className="mt-2" style={{ color: "white" }}>
                Nickname
              </h5>
            </Col>
          </Col>
          <Col
            className="pm-5 d-flex flex-column align-items-start"
            style={{ marginRight: "40px" }}
          >
            <Button className="edit-button d-flex align-items-start">
              Edit&nbsp;profile
            </Button>
            <Button className="edit-button d-flex align-items-start">
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
            height: "650px",
            borderRadius: "5px",
            marginLeft: "30px",
          }}
        >
          <Form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "#292929",
              color: "white",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <h2
              style={{
                color: "white",
                marginTop: "20px",
                fontWeight: "normal",
              }}
            >
              Account Settings
            </h2>

            <Form.Group controlId="email">
              <Form.Label
                style={{
                  display: "block",
                  textAlign: "left",
                  marginTop: "10px",
                }}
              >
                Email Address
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-isi"
              />
            </Form.Group>

            <Form.Group controlId="nama">
              <Form.Label
                style={{
                  display: "block",
                  textAlign: "left",
                  marginTop: "10px",
                }}
              >
                Name:
              </Form.Label>
              <Form.Control
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                required
                className="form-isi"
              />
            </Form.Group>

            <Form.Group controlId="nomerKontak">
              <Form.Label
                style={{
                  display: "block",
                  textAlign: "left",
                  marginTop: "10px",
                }}
              >
                Contact Number:
              </Form.Label>
              <Form.Control
                type="tel"
                name="nomerKontak"
                pattern="[0-9]{10,}"
                value={formData.nomerKontak}
                onChange={handleChange}
                required
                className="form-isi"
              />
            </Form.Group>
            <Form.Group controlId="alamat">
              <Form.Label
                style={{
                  display: "block",
                  textAlign: "left",
                  marginTop: "10px",
                }}
              >
                Address:
              </Form.Label>
              <Form.Control
                type="text"
                name="alamat"
                value={formData.alamat}
                onChange={handleChange}
                required
                className="form-isi"
              />
            </Form.Group>
            <Form.Group controlId="facebook">
              <Form.Label
                style={{
                  display: "block",
                  textAlign: "left",
                  marginTop: "10px",
                }}
              >
                Facebook:
              </Form.Label>
              <Form.Control
                type="text"
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
                className="form-isi"
              />
            </Form.Group>
            <Form.Group controlId="instagram">
              <Form.Label
                style={{
                  display: "block",
                  textAlign: "left",
                  marginTop: "10px",
                }}
              >
                Instagram:
              </Form.Label>
              <Form.Control
                type="text"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                className="form-isi"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="mt-4 button-save-profile"
              style={{
                marginLeft: "70%",
                fontSize: "12px",
                width: "31%",
                height: "10%",
                border: "none",
              }}
            >
              Save Profile
            </Button>
          </Form>
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
          <p>
            A talented and dedicated painter, Ahmad Suyanto represents harmony
            between creative imagination and deep technical skills. Born on
            January 11 1988 in Surabaya, Ahmad has explored the world of art
            from a young age, building a strong foundation for his creativity.
          </p>
          <Button
            className="edit-description-button"
            style={{
              fontStyle: "italic",
              borderRadius: "5px",
            }}
          >
            Edit Description
          </Button>
          <Col
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "5%",
              flexDirection: "column",
              flexwrap: "wrap",
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
              {kategoriArtist.map((kategori, index) => (
                <Button
                  key={index}
                  className="cetegory-button"
                  onClick={() => alert(kategori)}
                >
                  {kategori}
                </Button>
              ))}
              <Button className="cetegory-button">&nbsp; + &nbsp;</Button>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Editprofile;
