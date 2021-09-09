import React, { useState, useEffect } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import axios from "axios";

const EditUser = () => {
  const { id } = useParams();
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    address: "",
    category: "",
    city: "",
    age: "",
    email: "",
    date: "",
    cell: "",
  });
  const { name, address, category, city, age, email, date, cell } = user;
  const onChnageinput = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8000/dataget/${id}`);
    setUser(result.data);
  };

  const goData = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/dataupdate/${id}`, user);
    history.push("/");
  };
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div>
      <Container style={{ width: "50%", marginTop: "20px" }}>
        <Form onSubmit={goData}>
          {/* input field for name  */}
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              type="text"
              placeholder="Enter your Name"
              onChange={(e) => {
                onChnageinput(e);
              }}
              name="name"
              value={name}
            />
          </Form.Group>
          {/* input field for Email  */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter Your Address"
              onChange={(e) => {
                onChnageinput(e);
              }}
              name="address"
              value={address}
            />
          </Form.Group>
          {/* input field for address  */}
          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Control
              type="text"
              placeholder="Enter Your Blood Group"
              onChange={(e) => {
                onChnageinput(e);
              }}
              name="category"
              value={category}
            />
          </Form.Group>
          {/* input field for phone  */}
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Control
              type="text"
              placeholder="Enter City Name"
              onChange={(e) => {
                onChnageinput(e);
              }}
              name="city"
              value={city}
            />
          </Form.Group>
          {/* input field for blood group  */}
          <Form.Group className="mb-3" controlId="formBasicBlood">
            <Form.Control
              type="Number"
              placeholder="Enter Your Age"
              onChange={(e) => {
                onChnageinput(e);
              }}
              name="age"
              value={age}
            />
          </Form.Group>
          {/* input field for city  */}
          <Form.Group className="mb-3" controlId="formBasicCity">
            <Form.Control
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => {
                onChnageinput(e);
              }}
              name="email"
              value={email}
            />
          </Form.Group>
          {/* input field for age  */}
          <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Control
              type="Date"
              placeholder="Select Date"
              onChange={(e) => {
                onChnageinput(e);
              }}
              name="date"
              value={date}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Control
              type="text"
              placeholder="phone xxxx-xxxxxxx"
              onChange={(e) => {
                onChnageinput(e);
              }}
              name="cell"
              value={cell}
            />
          </Form.Group>

          <Button variant="info" type="submit" style={{ width: "100%" }}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default EditUser;
