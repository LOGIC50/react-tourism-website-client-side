import React, { useEffect, useState } from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import ExtraSection from "../ExtraSection/ExtraSection";
import Review from "../Review/Review";
import Service from "../Service/Service";
import "./Home.css";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://still-lake-86681.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Carousel variant="dark" className="carousel">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/qRVHvSp/t3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 style={{ color: "white", fontWeight: "700" }}>Tour Takers</h1>
            <h3
              className="text-center "
              style={{ color: "white", fontWeight: "700" }}
            >
              Travel, Be Happy and Stay Safe
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/SvTBm1t/t2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3
              className="text-center"
              style={{ color: "white", fontWeight: "700" }}
            >
              “I am not the same, having seen the moon shine on the other side
              of the world” – Mary Anne Radmacher
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/g9QkfSn/t1.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3
              className="text-center"
              style={{ color: "white", fontWeight: "700" }}
            >
              “Do not follow where the path may lead. Go instead where there is
              no path and leave a trail” – Ralph Waldo Emerson
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container style={{ margin: "100px auto" }}>
        <h2 style={{ fontSize: "3rem", margin: "20px auto" }}>
          Our Best <span style={{ color: "coral" }}>Tour Packages</span>
        </h2>
        <Row>
          {services.slice(0, 3).map((service) => (
            <Service service={service}></Service>
          ))}
        </Row>
      </Container>
      <div className="extra-section">
        <ExtraSection></ExtraSection>
      </div>
      <div className="review">
        <Review></Review>
      </div>
    </div>
  );
};

export default Home;
