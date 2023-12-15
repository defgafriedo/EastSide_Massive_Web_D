import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Row,
  Col,
  Container,
  Table,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import "./adminList.css";
import drawing1 from "../img/background3.png";
import {
  FaEllipsisH,
  FaCheck,
  FaTimes,
  FaHome,
  FaCreditCard,
  FaUserCircle,
} from "react-icons/fa";

const adminList = () => {
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)), url('${drawing1}')`;
  document.body.style.backgroundSize = "cover";

  return (
    <div>
      <Row className="p-5">
        <Col xs={2}>
          <Container
            style={{
              backgroundColor: "#212529",
              color: "white",
              textAlign: "left",
              padding: "0px",
            }}
          >
            <div>
              <h3 className="p-2">Dashboard</h3>
            </div>
            <ul className="list-unstyled components">
              <Link to="/admin/adminOverview">
                <li className="sidebarhover p-2">
                  <FaHome />
                  {"\u00A0"} Overview
                </li>
              </Link>
              <Link to="/admin/adminTransaction">
                <li className="sidebarhover p-2">
                  <FaCreditCard />
                  {"\u00A0"} All Transactions
                </li>
              </Link>
              <Link to="/admin/adminList">
                <li className="sidebarhover p-2">
                  <FaUserCircle />
                  {"\u00A0"} All Accounts
                </li>
              </Link>
            </ul>
          </Container>
        </Col>
        <Col style={{ backgroundColor: "#212529", color: "white" }}>
          <h1>Account List</h1>
          <Table borderless variant="dark">
            <thead>
              <tr className="block-example border-bottom border-white">
                <th>
                  <input type="checkbox" />
                </th>
                <th>Status</th>
                <th>Nickname</th>
                <th>Email</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "lightgreen",
                      padding: "5px",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      color: "darkgreen",
                    }}
                  >
                    <FaCheck />
                    <span style={{ marginRight: "5px" }}>Confirm</span>
                  </div>
                </td>
                <td>JohnDoe</td>
                <td>johndoe@email.com</td>
                <td>2023-11-23</td>
                <td>
                  <Button variant="transparent" style={{ color: "white" }}>
                    <FaEllipsisH />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "lightcoral",
                      padding: "5px 2px",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <FaTimes />
                    <span style={{ marginLeft: "5px" }}>Inactive</span>
                  </div>
                </td>
                <td>JaneSmith</td>
                <td>janesmith@email.com</td>
                <td>2023-11-22</td>
                <td>
                  <Button variant="transparent" style={{ color: "white" }}>
                    <FaEllipsisH />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "lightgreen",
                      padding: "5px",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      color: "darkgreen",
                    }}
                  >
                    <FaCheck />
                    <span style={{ marginRight: "5px" }}>Confirm</span>
                  </div>
                </td>
                <td>BobJohnson</td>
                <td>=bobjohnson@email.com</td>
                <td>2023-11-21</td>
                <td>
                  <Button variant="transparent" style={{ color: "white" }}>
                    <FaEllipsisH />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "lightgreen",
                      padding: "5px",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      color: "darkgreen",
                    }}
                  >
                    <FaCheck />
                    <span style={{ marginRight: "5px" }}>Confirm</span>
                  </div>
                </td>
                <td>JohnDoe</td>
                <td>johndoe@email.com</td>
                <td>2023-11-23</td>
                <td>
                  <Button variant="transparent" style={{ color: "white" }}>
                    <FaEllipsisH />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "lightgreen",
                      padding: "5px",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      color: "darkgreen",
                    }}
                  >
                    <FaCheck />
                    <span style={{ marginRight: "5px" }}>Confirm</span>
                  </div>
                </td>
                <td>JaneSmith</td>
                <td>janesmith@email.com</td>
                <td>2023-11-22</td>
                <td>
                  <Button variant="transparent" style={{ color: "white" }}>
                    <FaEllipsisH />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: "lightgreen",
                      padding: "5px",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      color: "darkgreen",
                    }}
                  >
                    <FaCheck />
                    <span style={{ marginRight: "5px" }}>Confirm</span>
                  </div>
                </td>
                <td>BobJohnson</td>
                <td>=bobjohnson@email.com</td>
                <td>2023-11-21</td>
                <td>
                  <Button variant="transparent" style={{ color: "white" }}>
                    <FaEllipsisH />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default adminList;
