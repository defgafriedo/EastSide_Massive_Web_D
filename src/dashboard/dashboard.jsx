import React, { useRef, useState,useEffect } from "react";
import { Card, Row, Col, Container, Table, Button } from "react-bootstrap";
import "./dashboard.css";
import background from "../img/background1.png";
import axios from 'axios';
import top1 from "../img/dashboard/top1.png";
import top2 from "../img/dashboard/top2.png";
import top3 from "../img/dashboard/top3.png";
import testi1 from "../img/dashboard/testi1.png";
import testi2 from "../img/dashboard/testi2.png";
import testi3 from "../img/dashboard/testi3.png";

const Dashboard = () => {
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)), url('${background}')`;
  const containerRef = useRef(null);
  const [galleryData, setGalleryData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/atsgetartwork');
        const data = response.data;
        setGalleryData(data.artList);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const processPhoto = (photo) => {
    if (!photo) {
      return ''; // handle undefined or null case
    }

    const delimiter = "karyaAsset/";
    const basePath = 'http://localhost:5000/karya/';
    const slicedPath = photo.substring(photo.indexOf(delimiter) + delimiter.length);
    const fullPath = `${basePath}${slicedPath}`;
    const fileURL = fullPath;
    return fileURL;
  };


  const tableData = [
    {
      artist: "Nanmaru Yamada",
      price: 1000000,
      sumOfArt: 200,
    },
    {
      artist: "Nova Phoenixblade",
      price: 2000000,
      sumOfArt: 105,
    },
    {
      artist: "Luna Stormshard",
      price: 3500000,
      sumOfArt: 170,
    },
    {
      artist: "Seraphina Darkflame",
      price: 1000000,
      sumOfArt: 160,
    },
    {
      artist: "Orion Frostbane",
      price: 100000,
      sumOfArt: 200,
    },
    {
      artist: "Seraphina Darkflame",
      price: 10000000,
      sumOfArt: 305,
    },
    {
      artist: "Zenith Thunderhawk",
      price: 15000000,
      sumOfArt: 400,
    },
    {
      artist: "Cipher Nightshade",
      price: 70000000,
      sumOfArt: 100,
    },
    {
      artist: "Astral Ironheart",
      price: 1000000,
      sumOfArt: 70,
    },
    {
      artist: "Zephyr Steelwing",
      price: 2000000,
      sumOfArt: 10,
    },
  ];


  return (
    <div>
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
            {galleryData && galleryData.map((card, index) => (
              <Col style={{ Width: "16rem" }} key={index}>
                <Card className="mb-4" style={{ width: "16rem" }}>
                <Card.Img variant="top" src={processPhoto(card.image)} style={{ height: "300px" }} />
                  <Card.Body>
                    <Card.Title style={{ fontSize: '22px' }}>{card.judul}</Card.Title>
                    <Card.Text style={{ fontSize: '16px' }}>{card.artist}</Card.Text>
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
            <Card style={{ width: "16rem" }}>
              <Card.Img variant="top" src={top1} />
              <Card.Body>
                <Card.Title>Fall Apart by Jidan Bjir</Card.Title>
                <Card.Text>Price: Rp 25.000.000,00</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto" className="top-art-2">
            <Card className="mb-5 mt-5" style={{ width: "16rem" }}>
              <Card.Img variant="top" src={top2} />
              <Card.Body>
                <Card.Title>Lies by Jidan Bjir</Card.Title>
                <Card.Text>Price: Rp 25.000.000,00</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto" style={{ marginLeft: "4rem" }} className="top-art-3">
            <Card style={{ width: "16rem" }}>
              <Card.Img variant="top" src={top3} />
              <Card.Body>
                <Card.Title>Blood Tsuki by Jidan Bjir</Card.Title>
                <Card.Text>Price: Rp 25.000.000,00</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="black-background " style={{ marginBottom: "4rem" }}>
          <Col>
            <Container>
              <Button variant="outline-black" className="navbar-artist">
                Trending
              </Button>
              <Button variant="outline-black" className="navbar-artist">
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
                {tableData.slice(0, 5).map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.artist}</td>
                    <td>{item.price}</td>
                    <td style={{ display: "flex", justifyContent: "center" }}>
                      {item.sumOfArt}
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
                {tableData.slice(5, 10).map((item, index) => (
                  <tr key={index}>
                    <td>{index + 6}</td>
                    <td>{item.artist}</td>
                    <td>{item.price}</td>
                    <td style={{ display: "flex", justifyContent: "center" }}>
                      {item.sumOfArt}
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

          <Row
            className="justify-content-center"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Col md="auto" className="py-5 body-testinominal">
              <Card
                className="align-items-center py-5 px-3"
                style={{ width: "16rem", background: "#D9D9D9" }}
              >
                <Card.Img
                  variant="top"
                  src={testi1}
                  style={{ width: "75px", height: "57px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ color: "black", fontSize: "16px" }}>
                    Ananta Kun
                  </Card.Title>
                  <Card.Text style={{ color: "black", fontSize: "12px" }}>
                    <strong>Artist Top 2</strong>
                  </Card.Text>
                  <Card.Text style={{ color: "black", fontSize: "12px" }}>
                    “There’s twin line beetwen life and death. U will find
                    justice over there.”
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="auto" className="body-testinominal">
              <Card
                className="align-items-center py-5 px-3"
                style={{ width: "16rem", background: "#D9D9D9" }}
              >
                <Card.Img
                  variant="top"
                  src={testi2}
                  style={{ width: "75px", height: "57px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ color: "black", fontSize: "16px" }}>
                    Zidan Bjir
                  </Card.Title>
                  <Card.Text style={{ color: "black", fontSize: "12px" }}>
                    <strong>Artist Top 1</strong>
                  </Card.Text>
                  <Card.Text style={{ color: "black", fontSize: "12px" }}>
                    “There’s twin line beetwen life and death. U will find
                    justice over there.”
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="auto" className="py-5 body-testinominal">
              <Card
                className="align-items-center py-5 px-3"
                style={{ width: "16rem", background: "#D9D9D9" }}
              >
                <Card.Img
                  variant="top"
                  src={testi3}
                  style={{ width: "75px", height: "57px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ color: "black", fontSize: "16px" }}>
                    Reno Kun
                  </Card.Title>
                  <Card.Text style={{ color: "black", fontSize: "12px" }}>
                    <strong>Artist Top 3</strong>
                  </Card.Text>
                  <Card.Text style={{ color: "black", fontSize: "12px" }}>
                    “There’s twin line beetwen life and death. U will find
                    justice over there.”
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;