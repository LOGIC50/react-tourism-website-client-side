import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
           <div className="footer-container text-light">
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div className="col text-center">
        <h3>About Hospitals</h3>
        <p>The relentless service of Hospitals in the past 25 years taken health care to the most modern levels in the region catering to urban & rural</p>
        <p>A Health Care Provider of Western Approach, Hospital is the most trusted multispecially hospitals</p>
    </div>
    <div className="col link">
        <h3>Usefull Links</h3>
        <br />
        <a href="">About Us</a>
        <br />
        <a href="">Consultants</a>
        <br />
        <a href="">Working Hours</a>
        <br />
        <a href="">Procedure</a>
        <br />
        <a href="">Special Offers</a>
        <br />
    </div>
    <div className="col link">
        <br />
        <br />
        <br />
        <a href="">Services</a>
        <br />
        <a href="">Healthy Foods</a>
        <br />
        <a href="">Appoinments</a>
        <br />
        <a href="">Latest News</a>
        <br />
        <a href="">Certificates</a>
    </div>
    <div className="col contact text-center">
        <h3>Contact Details</h3>
        <br />
        <p>Santinogor, Dhaka - 1240</p>
        <p>imtiazhospital@gmail.com</p>
        <p>(+880) 01400011123</p>
        <p>Mon-Friday: 9am to 18pm</p>
        <p>Sat-Sunday: 10am to 16pm</p>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Footer;