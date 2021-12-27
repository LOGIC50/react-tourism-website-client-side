import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import TourGuide from "../TourGuide/TourGuide";
import "./AboutUs.css";

const AboutUs = () => {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    fetch("https://still-lake-86681.herokuapp.com/guides")
      .then((res) => res.json())
      .then((data) => setGuides(data));
  }, []);
  return (
    <Container>
      <h1 style={{ textAlign: "left", fontSize: "4rem", marginTop: "50px" }}>
        About Us
      </h1>
      <hr />
      <br />
      <div className="about-portion">
        <div>
          <h2>The Best Travel Agency Company.</h2>
          <p>
            Fusce aliquam luctus est, eget tincidunt velit scelerisque rhoncus.
            Aliquam lacinia ipsum ornare, porttitor risus nec, mattis mauris.
            Nunc nec ornare nisi, vel elementum est. Proin malesuada venenatis
            ex, eu fringilla justo scelerisque sit amet. Sed fringilla nec purus
            non venenatis. Aliquam nec turpis pharetra, bibendum lorem in,
            sollicitudin nibh. Nulla sit amet lacus diam.
          </p>
        </div>
        <div>
          <img
            src="https://i.ibb.co/DRgXkkF/Plane-passengers-airport-waiting-room-vector-isolated-male-and-female-characters-travelers-with-bagg.jpg"
            alt=""
          />
        </div>
      </div>
      <h1 style={{ textAlign: "left", fontSize: "4rem", marginTop: "50px" }}>
        Our Guides
      </h1>
      <hr />
      <br />
      <div className="guide">
        {guides.map((guide) => (
          <TourGuide guide={guide}></TourGuide>
        ))}
      </div>
    </Container>
  );
};

export default AboutUs;
