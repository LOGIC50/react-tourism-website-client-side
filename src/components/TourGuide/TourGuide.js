import React from 'react';
import './TourGuide.css';

const TourGuide = (props) => {
    const {img, name} = props.guide;
    return (
        <div className='guide-card'>
            <img src={img} alt="" />
            <div className='guide-text'>
            <h4>{name}</h4>
            <h6>Tour Guide</h6>
            </div>
        </div>
    );
};

export default TourGuide;