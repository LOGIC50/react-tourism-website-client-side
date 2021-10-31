import React, { useEffect, useState } from 'react';
import {Carousel, Col, Row } from 'react-bootstrap';
import ExtraSection from '../ExtraSection/ExtraSection';
import Review from '../Review/Review';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])
  


    return (
        <div>
            <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/BykLgS2/c1.jpg"
      alt="First slide"
    />
    <Carousel.Caption className='carousel-text'>
      <h1>Tour Takers</h1>
      <h5>Travel, Be Happy and Stay Safe</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/27PjHT2/c2.jpg"
      alt="Second slide"
    />
    <Carousel.Caption className='carousel-text'>
      <h1>Tour Takers</h1>
      <h5>Travel, Be Happy and Stay Safe</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/JpYpQcW/c3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption className='carousel-text'>
      <h1>Tour Takers</h1>
      <h5>Travel, Be Happy and Stay Safe</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            <div className='service-card'>
            <Row >
                {
                    services.map(service => <Col sm={4}>
                        <Service
                        service={service}
                        ></Service>
                    </Col>)
                }
                
            </Row>
            </div>
           <div className='extra-section'>
           <ExtraSection></ExtraSection>
           </div>
           <div className='review'>
           <Review></Review>
           </div>
        </div>
        
    );
};

export default Home;