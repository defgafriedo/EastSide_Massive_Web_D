import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Nav from "react-bootstrap/Nav";
import background from "../img/background1.png";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const InputPostingKarya = () => {
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)), url('${background}')`;

  const navigate = useNavigate();
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId");

    if (storedToken && storedUserId) {
    } else {
      localStorage.clear();
      navigate("/login");
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    artworkTheme: "",
    artworkTitle: "",
    artworkType: "",
    description: "",
  });

  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const fileURL = URL.createObjectURL(selectedFile);

    setFile(selectedFile);
    setFileURL(fileURL);

    setFormData((prevFormData) => ({
      ...prevFormData,
      image: selectedFile,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if a file is selected
    if (!file) {
      console.log("Please select an image.");
      return;
    }

    // Generate a random name for the image
    const randomImageName = `image_${Date.now()}_${Math.floor(
      Math.random() * 1000
    )}${file.name.substring(file.name.lastIndexOf("."))}`;

    // Create a FormData object to append the file and other form data
    const formDataObject = new FormData();
    formDataObject.append("file", file, randomImageName);
    formDataObject.append("id_user", localStorage.getItem("userId"));
    formDataObject.append("nama", formData.artworkTitle);
    formDataObject.append("kategori", formData.artworkType);
    formDataObject.append("tag", formData.artworkTheme);
    formDataObject.append("deskripsi", formData.description);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/atsuploadartwork",
        formDataObject
      );

      if (response.ok) {
        console.log("Form data submitted successfully");
      } else {
        console.error("Failed to submit form data");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <>
      <Form
        style={{ backgroundColor: "rgba(255, 255, 255, 0)", width: "100%" }}
      >
        <Container style={{ marginTop: "50px" }}>
          <Row style={{ display: "flex" }}>
            <Col md={3} style={{ width: "45%" }}>
              <Nav variant="underline" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link
                    href="/inputpostingkarya"
                    style={{ color: "white" }}
                  >
                    Post
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/inputjualkarya" style={{ color: "white" }}>
                    Sell
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="disabled"
                    style={{ color: "white" }}
                    disabled
                  ></Nav.Link>
                </Nav.Item>
              </Nav>
              <Card
                style={{
                  width: "100%",
                  height: "10%",
                  backgroundColor: "rgba(72,90,255,0.50)",
                  fontSize: "10px",
                  marginTop: "10px",
                  textAlign: "left",
                }}
              >
                <Card.Body>
                  <Card.Title>
                    <Form.Label style={{ color: "white" }}>
                      Artwok Posting
                    </Form.Label>
                  </Card.Title>
                </Card.Body>
              </Card>

              <Row>
                <Col style={{ marginTop: "10px" }} md={20}>
                  {fileURL ? (
                    <img
                      src={fileURL}
                      alt="File Preview"
                      style={{
                        width: "100%",
                        maxHeight: "500px",
                        marginTop: "10px",
                      }}
                    />
                  ) : (
                    <>
                      <Form.Label style={{ color: "white" }}>
                        {" "}
                        Input Gambar
                      </Form.Label>
                    </>
                  )}
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" onChange={handleFileChange} />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Card
                  style={{
                    width: "98%",
                    backgroundColor: "rgba(64,64,64,0.7)",
                    textAlign: "left",
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <Form.Label style={{ color: "white" }}>
                        Artwork Theme
                      </Form.Label>
                    </Card.Title>
                    <hr />
                    <Col style={{ marginTop: "10px" }} md={20}>
                      <Form.Control
                        type="text"
                        placeholder="Normal text"
                        style={{
                          backgroundColor: "rgba(64,64,64,0.7)",
                          color: "white",
                        }}
                        value={formData.artworkTheme}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            artworkTheme: e.target.value,
                          })
                        }
                      />
                    </Col>
                  </Card.Body>
                </Card>
              </Row>

              <Row style={{ marginTop: "10px" }}>
                <Card
                  style={{
                    width: "98%",
                    backgroundColor: "rgba(64,64,64,0.7)",
                    textAlign: "left",
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <Form.Label style={{ color: "white" }}>
                        Artwork Title
                      </Form.Label>
                    </Card.Title>
                    <hr />
                    <Col style={{ marginTop: "10px" }} md={20}>
                      <Form.Control
                        type="text"
                        placeholder="Normal text"
                        style={{
                          backgroundColor: "rgba(64,64,64,0.7)",
                          color: "white",
                        }}
                        value={formData.artworkTitle}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            artworkTitle: e.target.value,
                          })
                        }
                      />
                    </Col>
                  </Card.Body>
                </Card>
              </Row>

              <Row style={{ marginTop: "10px" }}>
                <Card
                  style={{
                    width: "98%",
                    backgroundColor: "rgba(64,64,64,0.7)",
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <Form.Label style={{ color: "white" }}>
                        {" "}
                        Artwork Type
                      </Form.Label>
                    </Card.Title>
                    <hr />
                    <DropdownButton
                      id="dropdown-basic-button"
                      title={formData.artworkType || "Select Artwork Type"} // Use formData.artworkType as the default title
                    >
                      <Dropdown.Item
                        onClick={() =>
                          setFormData({ ...formData, artworkType: "Painting" })
                        }
                      >
                        Painting
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() =>
                          setFormData({ ...formData, artworkType: "Statue" })
                        }
                      >
                        Statue
                      </Dropdown.Item>
                    </DropdownButton>
                  </Card.Body>
                </Card>
              </Row>
            </Col>

            <Col md={5} style={{ width: "50%" }}>
              <Nav
                variant="underline"
                defaultActiveKey="/home"
                style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              >
                <Nav.Item>
                  <Nav.Link style={{ color: "rgba(0, 0, 0, 0)" }}>
                    Post
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link style={{ color: "rgba(0, 0, 0, 0)" }}>
                    Sell
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="disabled"
                    style={{ color: "white" }}
                    disabled
                  ></Nav.Link>
                </Nav.Item>
              </Nav>
              <Row>
                <Col>
                  <Col md={30}>
                    <Card
                      style={{
                        width: "40%",
                        height: "5%",
                        backgroundColor: "rgba(72,90,255,0.50)",
                        fontSize: "10px",
                        marginTop: "10px",
                        textAlign: "left",
                      }}
                    >
                      <Card.Body>
                        <Card.Title style={{ color: "white" }}>
                          <Form.Label> Description</Form.Label>
                        </Card.Title>
                      </Card.Body>
                    </Card>
                    <FloatingLabel
                      controlId="floatingTextarea2"
                      label="Add Description Here"
                      style={{
                        marginTop: "10px",
                        color: "white",
                        marginBottom: "10px",
                      }}
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Add Description here"
                        style={{
                          color: "white",
                          marginBottom: "10px",
                          height: "300px",
                          backgroundColor: "rgba(0,0,0,0.7)",
                        }}
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            description: e.target.value,
                          })
                        }
                      />
                    </FloatingLabel>
                    <Col
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Button
                        variant="primary"
                        style={{
                          width: "47%",
                          backgroundColor: "rgba(72,90,255,0.50)",
                        }}
                        onClick={() => navigate("/")}
                      >
                        Cancel
                      </Button>{" "}
                      <Button
                        variant="primary"
                        style={{
                          width: "47%",
                          backgroundColor: "rgba(72,90,255,0.50)",
                        }}
                        onClick={handleSubmit}
                      >
                        Post
                      </Button>{" "}
                    </Col>
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default InputPostingKarya;
