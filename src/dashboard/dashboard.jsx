import React, { useRef, useState } from "react";
import { Card, Row, Col, Container, Table, Button } from "react-bootstrap";
import "./dashboard.css";
import drawing1 from "../img/background1.png";
import art1 from "../img/dashboard/art1.png";
import art2 from "../img/dashboard/art2.png";
import art3 from "../img/dashboard/art3.png";
import art4 from "../img/dashboard/art4.png";
import top1 from "../img/dashboard/top1.png";
import top2 from "../img/dashboard/top2.png";
import top3 from "../img/dashboard/top3.png";
import testi1 from "../img/dashboard/testi1.png";
import testi2 from "../img/dashboard/testi2.png";
import testi3 from "../img/dashboard/testi3.png";

const Dashboard = () => {
  const containerRef = useRef(null);
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)), url('${drawing1}')`;

  const cardData = [
    {
      image: require("../img/dashboard/art1.png"),
      title: "Hopeless",
      description: "Robin Hanson",
    },
    {
      image: require("../img/dashboard/art2.png"),
      title: "Unconfident",
      description: "Connely Rod",
    },
    {
      image: art3,
      title: "Dry and Tears",
      description: "Calvin Nera",
    },
  ];

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
            {cardData.map((card, index) => (
              <Col style={{ Width: "16rem" }} key={index}>
                <Card className="mb-4" style={{ width: "16rem" }}>
                  <Card.Img variant="top" src={card.image} />
                  <Card.Body>
                    <Card.Title style={{ fontSize: '22px' }}>{card.title}</Card.Title>
                    <Card.Text style={{ fontSize: '16px' }}>{card.description}</Card.Text>
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
