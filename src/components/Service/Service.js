import React from "react";
import { Col, Container } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Service.css";

const Service = (props) => {
  const { name, img, price, description, rating } = props.service;
  let history = useHistory();
  const handleClick = () => {
    history.push(`/services/${name}`, {
      name,
      img: img,
      price: price,
      description: description,
    });
  };
  return (
    <Col md={4} sm={12}>
      <Container className="service-part">
        <img
          src={img}
          style={{ width: "100%", paddingTop: "20px", borderRadius: "5px" }}
          alt=""
        />
        <h5 style={{ color: "darkblue" }}>{name}</h5>
        <p>{description.substring(0, 120)}</p>
        <h6>Tour Cost: ${price}</h6>
        <p style={{ color: "darkblue" }}>Rating: {rating}</p>
        <button className="button-29" onClick={handleClick}>
          Purchase
        </button>
      </Container>
    </Col>
  );
};

export default Service;
