import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Showcase = ({ itemShowcase }) => {
  return (
    <>
      <div
        className="text-white py-5"
        style={{
          border: "1px solid rgba(42, 42, 42, 1.0)",
          boxShadow: "0px 4px 500px 0px rgba(0, 0, 0, 0.7)",
          borderRadius: "20px",
        }}
      >
        <h1 className="d-flex justify-content-center">Showcase</h1>
        <Row>
          {itemShowcase.map((itemShowcase, index) => (
            <Col
              className="d-flex mx-4 my-4 justify-content-center"
              key={index}
            >
              <Card className="card">
                <Link to={itemShowcase.link}>
                  <Card.Img variant="top" src={itemShowcase.image} />
                </Link>
                <Card.Body style={{ background: "rgba(43, 43, 43, 0.70)" }}>
                  <Card.Title>{itemShowcase.title} </Card.Title>
                  <Card.Text>{itemShowcase.description}</Card.Text>
                  <Link to={itemShowcase.link}>
                    {/* Optional: You can add a button or any other element here */}
                    {/* <Button variant="primary">Go to {itemShowcase.title}</Button> */}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Showcase;
