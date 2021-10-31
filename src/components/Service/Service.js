import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const {name, img, price, description, rating} = props.service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h6 className='fw-bold'>${price} /Per Person</h6>
            <h2>{name}</h2>
            <p className='text-center'>{description.substring(0, 150)}</p>
            <p className='text-primary'>{rating} Rating</p>
            <button>Book Now</button>
        </div>
    );
};

export default Service;