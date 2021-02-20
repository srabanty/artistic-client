import React from 'react';
import '../Footer/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faSkype } from '@fortawesome/free-brands-svg-icons';
import footerNews1 from '../../images/footer-news-1.jpg';
import footerNews2 from '../../images/footer-news-2.jpg';
import footerNews3 from '../../images/footer-news-3.jpg';
import project1 from '../../images/project-1.jpg';
import project2 from '../../images/project-2.jpg';
import project3 from '../../images/project-3.jpg';


const Footer = () => {
    return (
        <div className="footer-area" id="footer">
            <div className="arrow-btn">
                <a href=""><FontAwesomeIcon icon={faChevronUp} className="footer-arrow"/></a>
            </div>
            <div className="footer-bg py-md-5 py-sm-3">
                <div className="row container mx-auto">
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="single-footer mb-4">
                            <h2 className="logo">Artistic</h2>
                            <h6 className="text-white border-bottom border-secondary pb-2">Address</h6>
                            <p className="text-secondary">Flat 20, Reynolds Neck, North<br /> Helenaville, FV77 8WS</p>
                            <h6 className="text-white border-bottom border-secondary pb-2">Phone</h6>
                            <p className="text-secondary">+324 123 45 978 & 01<br /> <span>Mon - Friday:</span> 9.00am to 6.00pm</p>
                            <h6 className="text-white border-bottom border-secondary pb-2">Email</h6>
                            <p className="text-secondary">support@crystalo.com<br /> crystalocareer@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="single-footer mb-4 mx-2">
                            <div className="footer-title text-white">
                                <h3 className="pb-2 mb-4">Services</h3>
                            </div>
                            <div className="footer-services mb-xs-5">
                                <ul className="list-group">
                                    <li className="py-2"><a href="#home" className="text-decoration-none">Concept Design</a></li>
                                    <li className="py-2"><a href="#home" className="text-decoration-none">Project Designs</a></li>
                                    <li className="py-2"><a href="#home" className="text-decoration-none">Make Overs</a></li>
                                    <li className="py-2"><a href="#home" className="text-decoration-none">Consulting</a></li>
                                    <li className="py-2"><a href="#home" className="text-decoration-none">Glass & Wrought</a></li>
                                    <li className="py-2"><a href="#home" className="text-decoration-none">Space Planning</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="single-footer mb-4 mx-xs-auto">
                            <div className="footer-title text-white">
                                <h3 className="pb-2 mb-4">Recent News</h3>
                            </div>
                            <div className="footer-news pt-3">
                                <div className="row mx-xs-auto">
                                    <div className="col-md-4 news-img">
                                        <img src={footerNews1} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-md-8 news-headline">
                                        <p className="text-secondary mb-1">Nov 10, 2020</p>
                                        <h6 className="text-white"><a href="#home" className="text-decoration-none text-white">Creating drama and<br /> feeling with...</a></h6>
                                    </div>
                                </div>
                                <div className="row my-3 mx-xs-auto">
                                    <div className="col-md-4 news-img">
                                        <img src={footerNews2} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-md-8 news-headline">
                                        <p className="text-secondary mb-1">Dec 02, 2020</p>
                                        <h6 className="text-white"><a href="#home" className="text-decoration-none text-white">Wondering if interior<br /> design is dying...</a></h6>
                                    </div>
                                </div>
                                <div className="row mx-xs-auto">
                                    <div className="col-md-4 news-img">
                                        <img src={footerNews3} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-md-8 news-headline">
                                        <p className="text-secondary mb-1">Jan 10, 2021</p>
                                        <h6 className="text-white"><a href="#home" className="text-decoration-none text-white">Enjoy monsoon in<br /> comfort of your...</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="single-footer mb-4 mx-2 mt-sm-3">
                            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={project1} className="d-block w-100" alt="brochures" />
                                        <div class="bg-white p-3">
                                            <h5>Our Interior Design<br /> Brochure</h5>
                                            <a href="#home" className="text-decoration-none text-dark fw-bold mt-3">Download Now <FontAwesomeIcon icon={faLongArrowAltRight} className="fa-lg ms-1" /></a>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={project2} className="d-block w-100 img-fluid" alt="brochures" />
                                        <div class="bg-white p-3">
                                            <h5>Our Interior Design<br /> Brochure</h5>
                                            <a href="#home" className="text-decoration-none text-dark fw-bold mt-3">Download Now <FontAwesomeIcon icon={faLongArrowAltRight} className="fa-lg ms-1" /></a>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={project3} className="d-block w-100" alt="brochures" />
                                        <div class="bg-white p-3">
                                            <h5>Our Interior Design<br /> Brochure</h5>
                                            <a href="#home" className="text-decoration-none text-dark fw-bold mt-3">Download Now <FontAwesomeIcon icon={faLongArrowAltRight} className="fa-lg ms-1" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom container py-3 d-flex justify-content-between">
                <div className="copyright-text text-secondary">
                    <p>&copy; 2021 All Rights Reserved by <a href="#home" className="text-highlight text-decoration-none fw-bold">Artistic</a></p>
                </div>
                <div className="footer-social-links float-right">
                    <span className="fw-bold text-dark">We are On:</span>
                    <FontAwesomeIcon icon={faFacebookF} className="ps-1 fa-lg ms-1 text-secondary" />
                    <FontAwesomeIcon icon={faTwitter} className="ps-1 fa-lg ms-1 text-secondary" />
                    <FontAwesomeIcon icon={faSkype} className="ps-1 fa-lg ms-1 text-secondary" />
                    <FontAwesomeIcon icon={faLinkedinIn} className="ps-1 fa-lg ms-1 text-secondary" />
                </div>
            </div>
        </div>
    );
};

export default Footer;