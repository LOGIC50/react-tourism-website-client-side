import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="container contact-portion">
            <div className=" container contact-box">
                <h3 className="text-center m-5 p-4">Please, Fill Up This Form</h3>
                <p className="text-center">Our team Will Contact You As Soon As Possible</p>
                <form className="p-5 d-flex flex-column" action="">
                    <input className="border border-dark" type="text" name="Name" id="" placeholder="Your Name" />
                    <br />
                    <input className="border border-dark" type="text" name="Name" id="" placeholder="Your Email" />
                    <br />
                    <input className="border border-dark" type="text" name="Name" id="" placeholder="Your Contact Number" />
                    <br />
                    <input className="border border-dark" type="text" name="Name" id="" placeholder="Full Address" />
                    <button type="button" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div> 
    );
};

export default ContactUs;