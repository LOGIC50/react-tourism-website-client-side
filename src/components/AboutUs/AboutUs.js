import React, { useEffect, useState } from 'react';
import TourGuide from '../TourGuide/TourGuide';
import './AboutUs.css'

const AboutUs = () => {
    const [guides, setGuides] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/guides')
        .then(res => res.json())
        .then(data => setGuides(data))
    },[])
    return (
        <div>
            <h1>About Us</h1>
            <div className='about-portion'>
                <div>
                    <h2>The Best Travel Agency Company.</h2>
                    <p>Fusce aliquam luctus est, eget tincidunt velit scelerisque rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec, mattis mauris. Nunc nec ornare nisi, vel elementum est. Proin malesuada venenatis ex, eu fringilla justo scelerisque sit amet. Sed fringilla nec purus non venenatis. Aliquam nec turpis pharetra, bibendum lorem in, sollicitudin nibh. Nulla sit amet lacus diam.</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/DRgXkkF/Plane-passengers-airport-waiting-room-vector-isolated-male-and-female-characters-travelers-with-bagg.jpg" alt="" />
                </div>
            </div>
            <div className='guide'>
                {
                    guides.map(guide => <TourGuide
                    guide = {guide}
                    ></TourGuide>)
                }
            </div>
        </div>
    );
};

export default AboutUs;