import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ManageOrder.css";

const ManageOrder = () => {
  const [registered, setRegistered] = useState([]);
  useEffect(() => {
    fetch("https://still-lake-86681.herokuapp.com/register")
      .then((res) => res.json())
      .then((data) => setRegistered(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://still-lake-86681.herokuapp.com/register/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Successfully Deleted");
          const remaining = registered.filter(
            (register) => register._id !== id
          );
          setRegistered(remaining);
        }
      });
  };
  return (
    <Container className="manage-order">
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Customer's Name</th>
            <th>Tours</th>
            <th>Payment</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {registered.map((register) => (
            <tr>
              <td>{register.name}</td>
              <td>{register.event}</td>
              <td>
                <Link to="/payment" style={{ textDecoration: "none" }}>
                  <button>Pay</button>
                </Link>
              </td>
              <td>
                <button onClick={() => handleDelete(register._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ManageOrder;
