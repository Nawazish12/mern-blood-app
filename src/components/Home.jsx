import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState([]);

  const dataCollect = async () => {
    try {
      const res = await fetch("http://localhost:8000/dataget");
      const user = await res.json();
      setUser(user.reverse());
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataCollect();
  }, []);
  // delete item
  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:8000/datadel/${id}`);
    dataCollect();
  };
  return (
    <>
      <h1
        style={{ textAlign: "center", marginBottom: "30px", marginTop: "30px" }}
      >
        Blood Group Database
      </h1>
      <Table striped bordered hover>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Cell No</th>
            <th>Blood Group</th>
            <th>City</th>
            <th>Age</th>
            <th>Email</th>
            <th>Date of Donation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((userDatas, index) => {
            return (
              <tr style={{ textAlign: "center" }} key={userDatas._id}>
                <td>{index + 1}</td>
                <td>{userDatas.name}</td>
                <td>{userDatas.address}</td>
                <td>{userDatas.cell}</td>
                <td>{userDatas.category}</td>
                <td>{userDatas.city}</td>
                <td>{userDatas.age}</td>
                <td>{userDatas.email}</td>
                <td>{userDatas.date}</td>
                <td>
                  <Button
                    onClick={() => deleteItem(userDatas._id)}
                    variant="outline-danger"
                  >
                    Del
                  </Button>
                  &nbsp;&nbsp;
                  <Link to={`/${userDatas._id}`}>
                    <Button variant="outline-info">Edit</Button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Home;
