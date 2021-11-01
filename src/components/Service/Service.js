import React from 'react';
// import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css';

const Service = (props) => {
    const {name, img, price, description, rating} = props.service;
    let history = useHistory();
    const handleClick = () => {
        history.push(`/services/${name}`, {name, img: img, price: price, description: description});
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h6 className='fw-bold'>${price} /Per Person</h6>
            <h2>{name}</h2>
            <p className='text-center'>{description}</p>
            <p className='text-primary'>{rating} Rating</p>
            <button onClick={handleClick}>Book Now</button>
        </div>
    );
};

export default Service;