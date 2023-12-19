import React, { useRef,   useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Table} from "react-bootstrap";
import "./adminList.css";
import drawing1 from "../img/background3.png";
import { FaEllipsisH, FaCheck,FaHome, FaCreditCard, FaUserCircle, FaPenFancy } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const AdminList = () => {
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)), url('${drawing1}')`;
  document.body.style.backgroundSize = "cover";
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/atsalluser");
        setUserList(response.data.userList);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const [dropdownStates, setDropdownStates] = useState(Array(userList.length).fill(false));

  const handleClick = (index) => {
    const newDropdownStates = [...dropdownStates];
    newDropdownStates[index] = !newDropdownStates[index];
    setDropdownStates(newDropdownStates);
  };

  const handleOptionClick = async (option, userId) => {
    console.log(`Pilihan dipilih: ${option}`);
  
    try {
      switch (option) {
        case 1:
          console.log(`Jadikan Seniman untuk user dengan ID: ${userId}`);
          await axios.patch(`http://localhost:5000/api/v1/atsupdatelevel?id_user=${userId}`, { newLevel: 'seniman' });
          break;
        case 2:
          console.log(`Jadikan Admin untuk user dengan ID: ${userId}`);
          await axios.patch(`http://localhost:5000/api/v1/atsupdatelevel?id_user=${userId}`, { newLevel: 'admin' });
          break;
        case 3:
          console.log(`Hapus user dengan ID: ${userId}`);
          await axios.delete(`http://localhost:5000/api/v1/atsdeleteuser/${userId}`);
          break;
        default:
          console.warn('Option not recognized');
      }
      window.location.reload();
    } catch (error) {
      console.error('Error handling option click:', error);
    }
  };
  





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
              {userList.map((user, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        backgroundColor: user.level === "user" ? "lightgreen" : "lightcoral",
                        padding: "5px",
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                        color: user.level === "user" ? "darkgreen" : "white",
                      }}
                    >
                      {user.level === "user" ? <FaCheck /> : <FaPenFancy />}
                      <span style={{ marginRight: "5px" }}>{user.level}</span>
                    </div>
                  </td>
                  <td>{user.nama}</td>
                  <td>{user.email}</td>
                  <td>{user.nomor}</td>
                  <td>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                      <span style={{ color: 'white' }} onClick={() => handleClick(index)}>
                        <FaEllipsisH />
                      </span>
                      {dropdownStates[index] && (
                        <div style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', borderRadius: '4px', boxShadow: '0 0 5px rgba(0, 0, 0, 1)' }}>
                          <div style={{ background: 'black', color: 'white', border: '1px solid white', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer', fontSize: 'xx-small' }} onClick={() => handleOptionClick(1, user.id)}>Makes Seniman</div>
                          <div style={{ background: 'black', color: 'white', border: '1px solid white', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer', fontSize: 'xx-small' }} onClick={() => handleOptionClick(2, user.id)}>Makes Admin</div>
                          <div style={{ background: 'black', color: 'white', border: '1px solid white', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer', fontSize: 'xx-small' }} onClick={() => handleOptionClick(3, user.id)}>Delete User</div>
                        </div>
                      )}
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default AdminList;
