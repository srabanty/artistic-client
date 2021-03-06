import React, { useEffect, useState } from 'react';
import './Testimonials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import user from '../../images/user.png';
import testimonial2 from '../../images/testimonial-2.png';
import testimonial3 from '../../images/testimonial-3.png';

const Testimonials = () => {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/feedback`)
            .then(res => res.json())
            .then(data => {
                setFeedback(data);
            })
    }, [])
    return (
        <div className="testimonial-area container my-5">
            <div className="section-title">
                <p className="mb-0 text-highlight fw-bold">Testimonials</p>
                <div className="d-flex justify-content-between">
                    <h2 className="my-2"><span className="fw-bold">OUR CUSTOMER</span> WORDS</h2>
                    <a href="#home" className="text-decoration-none text-dark fw-bold mt-3">More Feedbacks <FontAwesomeIcon icon={faLongArrowAltRight} className="fa-lg ms-1" /></a>
                </div>
            </div>
            <div className="row d-flex justify-content-center text-center">
                {
                    feedback.length === 0 &&
                    <div className="div">
                    <span style={{fontSize:'20px', fontWeight:'bold', color:'black'}}>Loading...</span>
                    <div className="spinner-grow text-danger" role="status">
                    </div>
                    <div className="spinner-grow text-warning" role="status">
                    </div>
                    <div className="spinner-grow text-info" role="status">
                    </div>
                </div>
                }
                {
                    feedback.map(feedback =>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 my-3" key={feedback._id}>
                            <div className="single-testimonial h-100 shadow py-5 rounded">
                                <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                                <h4 className="pt-3">{feedback.name}</h4>
                                <img src={user} alt="user" className="img-fluid my-3 testimonial-img" />
                                <p className="text-secondary px-1">{feedback.projectName}</p>
                                <p className="text-secondary px-1">{feedback.projectReview}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Testimonials;