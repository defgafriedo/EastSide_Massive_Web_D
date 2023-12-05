import { Container, Row, Col, Button } from "react-bootstrap";
import Background3 from "../img/background3.png";
import Drawing from "../img/orderlist/Drawing3.png";
import Vector from "../img/orderlist/Vector.png";

const orderDetail = () => {
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('${Background3}')`;
  return (
    <>
      <Container style={{ display: "flex" }}>
        <Row
          style={{
            width: "70%",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            marginBottom: "200px",
          }}
        >
          <Col style={{ padding: "4%" }}>
            <Col>
              <div
                style={{
                  backgroundColor: "rgba(72, 90, 255, 0.65)",
                  width: "100%",
                  height: "25%",
                  borderRadius: "5px",
                  color: "white",
                  fontSize: "25px",
                }}
              >
                &nbsp;Order List
              </div>
            </Col>

            <Col
              className="first"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.50)",
                width: "100%",
                height: "70%",
                borderRadius: "5px",
                marginTop: "15px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Col style={{ width: "40%", padding: "5%" }}>
                <img
                  style={{
                    borderRadius: "5px",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    verticalAlign: "middle",
                    display: "block",
                  }}
                  src={Drawing}
                  alt="Abstract Drawing"
                />
              </Col>

              <p
                style={{
                  flex: 1,
                  width: "60%",
                  marginLeft: "2%",
                  color: "white",
                  fontSize: "8px",
                  marginTop: "5%",
                  textAlign: "justify",
                  marginRight: "6%",
                }}
              >
                Abstract paintings often create a unique and sometimes
                perplexing visual experience, liberating the viewer from the
                constraints of objective representation. In abstract art, forms
                and colors are combined in ways not bound by physical reality,
                creating a broad space for interpretation.
              </p>
            </Col>

            <Col
              className="two"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.50)",
                width: "100%",
                padding: "3%",
                marginTop: "3%",
                borderRadius: "5px",
              }}
            >
              <Col style={{ display: "flex", alignItems: "center" }}>
                <img style={{ height: "25px", width: "25px" }} src={Vector} />
                <p
                  style={{
                    marginLeft: "10px",
                    color: "white",
                  }}
                >
                  Shipping Address
                </p>
              </Col>
              <Col style={{}}>
                <input
                  type="text"
                  placeholder="Enter your address"
                  style={{
                    padding: "5px",
                    borderRadius: "3px",
                    border: "1px solid white",
                    color: "white",
                    backgroundColor: "rgba(156, 152, 152, 0.46)",
                    width: "100%",
                    height: "100px",
                  }}
                />
              </Col>
            </Col>
          </Col>
        </Row>
        <Row
          style={{
            width: "50%",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            marginTop: "-39%",
            marginlefyt: "3%",
          }}
        >
          <Col style={{ padding: "4%" }}>
            <Col
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.50)",
                width: "100%",
                borderRadius: "5px",
                height: "100%",
                flexDirection: "column",
              }}
            >
              <Col
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "white",
                  width: "95%",
                  marginLeft: "2%",
                }}
              >
                <p>Artwork Price</p>
                <p>Rp.2000000</p>
              </Col>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "white",
                  width: "95%",
                  marginLeft: "2%",
                }}
              >
                <p>Shipping Fee</p>
                <p>Rp.2000000</p>
              </Col>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "white",
                  width: "95%",
                  marginLeft: "2%",
                  marginTop: "10%",
                }}
              >
                <p>Total</p>
                <p>Rp.2000000</p>
              </Col>
              <Button
                style={{
                  backgroundColor: "rgba(72, 90, 255, 0.65)",
                  width: "100%",
                }}
                href="/payment"
              >
                Chechk Out
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default orderDetail;
