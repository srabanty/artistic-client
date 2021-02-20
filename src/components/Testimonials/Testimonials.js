import React from 'react';
import './Testimonials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import testimonial1 from '../../images/testimonial-1.png';
import testimonial2 from '../../images/testimonial-2.png';
import testimonial3 from '../../images/testimonial-3.png';

const Testimonials = () => {
    return (
        <div className="testimonial-area container my-5">
            <div className="section-title">
                <p className="mb-0 text-highlight fw-bold">Testimonials</p>
                <div className="d-flex justify-content-between">
                    <h2 className="my-2"><span className="fw-bold">OUR CUSTOMER</span> WORDS</h2>
                    <a href="#home" className="text-decoration-none text-dark fw-bold mt-3">More Reviews <FontAwesomeIcon icon={faLongArrowAltRight} className="fa-lg ms-1" /></a>
                </div>
            </div>
            <div className="row d-flex justify-content-center text-center">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 my-3">
                    <div className="single-testimonial h-100 shadow py-5 rounded">
                        <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                        <h4 className="pt-3">Shelly Johnson</h4>
                        <p className="text-secondary">California</p>
                        <img src={testimonial1} alt="testimonial1" className="img-fluid my-3 testimonial-img"/>
                        <p className="text-secondary px-1">Your guys were great knowledgeable, well experienced, efficient and neat. A true to work with Crystalo.</p>                        
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 my-3">
                    <div className="single-testimonial h-100 shadow py-5 rounded">
                        <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                        <h4 className="pt-3">Cathrine Wagner</h4>
                        <p className="text-secondary">Los Angeles</p>
                        <img src={testimonial2} alt="testimonial2" className="img-fluid my-3 testimonial-img"/>
                        <p className="text-secondary px-1">Indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>                        
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 my-3">
                    <div className="single-testimonial h-100 shadow py-5 rounded">
                        <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                        <h4 className="pt-3">Cuthbert Brain</h4>
                        <p className="text-secondary">Newyork City</p>
                        <img src={testimonial3} alt="testimonial3" className="img-fluid my-3 testimonial-img"/>
                        <p className="text-secondary px-1">Same as saying through shrinking from all pain these cases are perfectly simple and easy to distinguish.</p>                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;