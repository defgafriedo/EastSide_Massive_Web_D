import React, { useRef, useState, useEffect } from "react";
import { Card, Row, Col, Container, Table, Button } from "react-bootstrap";
import "./dashboard.css";
import background from "../img/background1.png";
import axios from "axios";
import testi1 from "../img/dashboard/testi1.png";
import testi2 from "../img/dashboard/testi2.png";
import testi3 from "../img/dashboard/testi3.png";

const Dashboard = () => {
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)), url('${background}')`;
  const containerRef = useRef(null);
  const [galleryData, setGalleryData] = useState([]);
  const [galleryTop, setGalleryTop] = useState([]);
  const [galleryTrending, setGalleryTrending] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/atsgetartwork"
        );
        const data = response.data;
        setGalleryData(data.artList);
        const sortedGalleryTop = [...response.data.artList].sort((a, b) => b.harga - a.harga);
        setGalleryTop(sortedGalleryTop)

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
    const fetchDataavg = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/atsavgart"
        );
        const data = response.data;
        setGalleryTrending(data.artList);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchDataavg();
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

  const processPhotoprofile = (photo) => {
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
    <div >
      <Container>
        <style>
          {`
          @media screen and (max-width: 900px) {
            .container-fluid {
              flex-direction: column !important;
            }
          }
        `}
        </style>
        <Container style={{ marginBottom: "1rem", marginTop: "2rem" }}>
          <Button variant="outline-black" className="navbar-btn">
            All
          </Button>
          <Button
            variant="outline-black"
            className="navbar-btn"
            href="/dashboardpainting"
          >
            Painting
          </Button>
          <Button
            variant="outline-black"
            className="navbar-btn"
            href="/dashboardstatue"
          >
            Statue
          </Button>
          <Button
            href="/list-profile-gallery"
            variant="outline-black"
            className="navbar-btn"
          >
            | All Galery
          </Button>
        </Container>

        <div
          className="horizontal-scroll-container"
          style={{ marginBottom: "4rem" }}
          ref={containerRef}
        >
          <Row
            style={{ flexWrap: "nowrap" }}
            className="text-white text-center"
          >
            {galleryData &&
              galleryData.map((card, index) => (
                <Col md="auto" style={{ Width: "16rem" }} key={index}>
                  <Card className="mb-4" style={{ width: "16rem" }}>
                    <Card.Img
                      variant="top"
                      src={processPhoto(card.image)}
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title>{card.judul}</Card.Title>
                      <Card.Text>{card.artist}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
        <Row
          className="justify-content-center align-items-center top-3-artist"
          style={{ marginBottom: "4rem" }}
        >
          <Container style={{ marginBottom: "2rem" }}>
            <h1 style={{ color: "white", fontSize: "2em" }}>Top 3 Artist</h1>
          </Container>

          <Col md="auto" style={{ marginRight: "4rem" }} className="top-art-1">
            {galleryTop.length > 0 && (
              <Card className="mb-5 mt-5" style={{ width: "16rem" }}>
                <Card.Img
                  variant="top"
                  src={processPhoto(galleryTop[0].image)}
                  style={{ height: "300px", width: "auto", objectFit: "cover" }}
                />

                <Card.Body>
                  <Card.Title>{galleryTop[0].judul} by {galleryTop[0].artist}</Card.Title>
                  <Card.Text>{`Price: Rp ${galleryTop[0].harga},00`}</Card.Text>
                </Card.Body>
              </Card>
            )}
          </Col>

          <Col md="auto" className="top-art-2">
            {galleryTop.length > 0 && (
              <Card className="mb-5 mt-5" style={{ width: "16rem" }}>
                <Card.Img
                  variant="top"
                  src={processPhoto(galleryTop[1].image)}
                  style={{ height: "300px", width: "auto", objectFit: "cover" }}
                />

                <Card.Body>
                  <Card.Title>{galleryTop[1].judul} by {galleryTop[1].artist}</Card.Title>
                  <Card.Text>{`Price: Rp ${galleryTop[1].harga.toString()},00`}</Card.Text>

                </Card.Body>
              </Card>
            )}
          </Col>

          <Col md="auto" style={{ marginLeft: "4rem" }} className="top-art-3">
            {galleryTop.length > 0 && (
              <Card className="mb-5 mt-5" style={{ width: "16rem" }}>
                <Card.Img
                  variant="top"
                  src={processPhoto(galleryTop[2].image)}
                  style={{ height: "300px", width: "auto", objectFit: "cover" }}
                />

                <Card.Body>
                  <Card.Title>{galleryTop[2].judul} by {galleryTop[2].artist}</Card.Title>
                  <Card.Text>{`Price: Rp ${galleryTop[2].harga},00`}</Card.Text>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
        <Row className="black-background " style={{ marginBottom: "4rem" }}>
          <Col>
            <Container>
              <Button variant="outline-black" className="navbar-artist">
                Trending
              </Button>
              <Button
                variant="outline-black"
                className="navbar-artist"
                style={{ marginLeft: "2%" }}
              >
                Top
              </Button>
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
                {galleryTrending.slice(0, 5).map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.user_name}</td>
                    <td>{item.average_harga}</td>
                    <td style={{ display: "flex", justifyContent: "center" }}>
                      {item.data_count}
                    </td>
                  </tr>
                ))}
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
                {galleryTrending.slice(5, 10).map((item, index) => (
                  <tr key={index}>
                    <td>{index + 6}</td>
                    <td>{item.user_name}</td>
                    <td>{item.average_harga}</td>
                    <td style={{ display: "flex", justifyContent: "center" }}>
                      {item.data_count}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <div
          className="black-background text-white text-center"
          style={{
            display: "fles",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4 style={{ marginTop: "1%" }}>Testimonial from success artists</h4>

          <Row className="justify-content-center" style={{ display: "flex", alignItems: "center" }}>
            {galleryData.length > 0 && (
              <Col md="auto" className="py-5 body-testinominal">
                <Card className="align-items-center py-5 px-3" style={{ width: "16rem", background: "#D9D9D9" }}>
                  <Card.Img variant="top" src={processPhotoprofile(galleryData[2].artistimg)} style={{ width: "75px", height: "57px", objectFit: "cover" }} />
                  <Card.Body>
                    <Card.Title style={{ color: "black", fontSize: "16px" }}>{galleryData[2].artist}</Card.Title>
                    <Card.Text style={{ color: "black", fontSize: "12px" }}><strong>Artist Top 2</strong></Card.Text>
                    <Card.Text style={{ color: "black", fontSize: "12px", }}>
                      "{galleryData[2].artistdesk && galleryData[2].artistdesk.split('.').shift() + '.'}"
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )}
            {galleryData.length > 0 && (
              <Col md="auto" className="body-testinominal">
                <Card
                  className="align-items-center py-5 px-3"
                  style={{ width: "16rem", background: "#D9D9D9" }}
                >
                  <Card.Img variant="top" src={processPhotoprofile(galleryData[0].artistimg)} style={{ width: "75px", height: "57px", objectFit: "cover" }} />
                  <Card.Body>
                    <Card.Title style={{ color: "black", fontSize: "16px" }}>{galleryData[0].artist}</Card.Title>
                    <Card.Text style={{ color: "black", fontSize: "12px" }}><strong>Artist Top 1</strong></Card.Text>
                    <Card.Text style={{ color: "black", fontSize: "12px", }}>
                      "{galleryData[0].artistdesk && galleryData[0].artistdesk.split('.').shift() + '.'}"
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
            )}
            {galleryData.length > 0 && (
              <Col md="auto" className="py-5 body-testinominal">
                <Card
                  className="align-items-center py-5 px-3"
                  style={{ width: "16rem", background: "#D9D9D9" }}
                >
                 <Card.Img variant="top" src={processPhotoprofile(galleryData[4].artistimg)} style={{ width: "75px", height: "57px", objectFit: "cover" }} />
                  <Card.Body>
                    <Card.Title style={{ color: "black", fontSize: "16px" }}>{galleryData[4].artist}</Card.Title>
                    <Card.Text style={{ color: "black", fontSize: "12px" }}><strong>Artist Top 3</strong></Card.Text>
                    <Card.Text style={{ color: "black", fontSize: "12px", }}>
                      "{galleryData[4].artistdesk && galleryData[4].artistdesk.split('.').shift() + '.'}"
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
