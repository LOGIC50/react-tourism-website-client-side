import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Review.css';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h4 className='text-center'>Our Traveller Say</h4>
            <h1 className='text-danger'>What Our Travellers Say About Us</h1>
            <div>
            <Row className='review-portion'>
                {
                    reviews.map(review => <Col sm={4} className='review-card'>
                        <Card className='card'style={{ width: '30rem' }}>
                            <Card.Img variant="top" src={review.img} />
                            <Card.Body>
                                <Card.Title className='fw-bold fs-3'>{review.name}</Card.Title>
                                <Card.Text className='fs-4 text-center'>Traveller</Card.Text>
                                <Card.Text>
                                {review.review.substring(0, 250)}
                                </Card.Text>
                            </Card.Body>
                            </Card>
                    </Col>)
                }
                
            </Row>
            </div>

        </div>
    );
};

export default Review;