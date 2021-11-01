import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './ExtraSection.css'

const extraSection = () => {
    return (
        <div className='extra'>
            <h1 className='text-danger'>Why You are Travel with Tour Takers</h1>
            <Row className='extra-lap'>
                <Col sm={4} >
                <div className="extra-card">
                <h4>500+ Our World Wide Guide</h4>
                </div>
                </Col>
                <Col sm={4} >
                <div className="extra-card">
                <h4>100% Trusted Travel Agency</h4>
                </div>
                </Col>
                <Col sm={4} >
                <div className="extra-card">
                <h4>Up to 80% of Our Traveller Happy</h4>
                </div>
                </Col>
            </Row>
        </div>
    );
};

export default extraSection;