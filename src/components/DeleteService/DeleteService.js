import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import "./DeleteService.css";

const DeleteService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://still-lake-86681.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://still-lake-86681.herokuapp.com/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Successfully Deleted");
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        }
      });
  };
  return (
    <Container className="delete-service">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr>
              <td>{service.name}</td>
              <td>
                <button onClick={() => handleDelete(service._id)}>
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

export default DeleteService;
