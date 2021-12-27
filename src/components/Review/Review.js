import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Review.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://still-lake-86681.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container>
      <div>
        <h4 className="text-center">Our Traveller Say</h4>
        <h1 style={{ color: "darkblue" }}>What Our Travellers Say About Us</h1>
        <div>
          <Row className="review-portion">
            {reviews.map((review) => (
              <Col sm={4} className="review-card">
                <Card className="card">
                  <Card.Img variant="top" src={review.img} />
                  <Card.Body>
                    <Card.Title className="fw-bold fs-3">
                      {review.name}
                    </Card.Title>
                    <Card.Text className="fs-4 text-center">
                      Traveller
                    </Card.Text>
                    <Card.Text>{review.review.substring(0, 150)}...</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Review;
