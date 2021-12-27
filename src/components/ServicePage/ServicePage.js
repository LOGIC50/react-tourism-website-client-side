import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const ServicePage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://still-lake-86681.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Container style={{ margin: "100px auto" }}>
      <Row>
        {services.map((service) => (
          <Service service={service}></Service>
        ))}
      </Row>
    </Container>
  );
};

export default ServicePage;
