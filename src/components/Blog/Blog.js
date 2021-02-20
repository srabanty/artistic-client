import React from 'react';
import '../Blog/Blog.css';
import blog1 from '../../images/blog-1.jpg';
import blog2 from '../../images/blog-2.jpg';
import blog3 from '../../images/blog-3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
    return (
        <div className="working-process-area container pt-5 my-5">
            <div className="section-title text-center">
                <p className="mb-0 text-highlight fw-bold">NEWS & UPDATES</p>
                <h2 className="mt-2 mb-5"><span className="fw-bold">LATEST FROM</span> BLOG</h2>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="single-blog h-100 shadow p-3 rounded">
                        <div className="blog-img">
                            <img src={blog1} alt="" className="img-fluid w-100"/>
                        </div>
                        <div className="text-holder py-2">
                            <div className="post-date border-bottom border-4">
                                <h5 className='d-inline'><span>02</span> Dec 2020</h5>
                            </div>
                            <div className="blog-writer d-flex justify-content-between text-secondary py-2">
                                <p className="border-end">By <span href="#" className="text-highlight pe-4">Rubin Santro</span></p>
                                <p>In <span href="#" className="text-highlight">Contemporary</span></p>
                            </div>
                            <h5>Low cost interior designing ideas</h5>
                            <div className="blog-text ">
                                <p className="text-secondary">Same as saying through shrinkings from toil & our pain these cases perfectly simple.</p>
                                <a href="#home" className="text-decoration-none fw-bold mt-3">Read More <FontAwesomeIcon icon={faLongArrowAltRight} className="fa-lg ms-1" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="single-blog h-100 shadow p-3 rounded">
                        <div className="blog-img">
                            <img src={blog2} alt="" className="img-fluid w-100"/>
                        </div>
                        <div className="text-holder py-2">
                            <div className="post-date border-bottom border-4">
                                <h5 className='d-inline'><span>24</span> Jan 2021</h5>
                            </div>
                            <div className="blog-writer d-flex justify-content-between text-secondary py-2">
                                <p className="border-end">By <span href="#" className="text-highlight pe-4">Marck Richrdson</span></p>
                                <p>In <span href="#" className="text-highlight">Wedding Design</span></p>
                            </div>
                            <h5>Wedding design for project</h5>
                            <div className="blog-text ">
                                <p className="text-secondary">Which is the same as saying through shrinking from toil and pain. These cases are perfectly.</p>
                                <a href="#home" className="text-decoration-none fw-bold mt-3">Read More <FontAwesomeIcon icon={faLongArrowAltRight} className="fa-lg ms-1" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="single-blog h-100 shadow p-3 rounded">
                        <div className="blog-img">
                            <img src={blog3} alt="" className="img-fluid w-100"/>
                        </div>
                        <div className="text-holder py-2">
                            <div className="post-date border-bottom border-4">
                                <h5 className='d-inline'><span>18</span> Feb 2021</h5>
                            </div>
                            <div className="blog-writer d-flex justify-content-between text-secondary py-2">
                                <p className="border-end">By <span href="#" className="text-highlight pe-4">Rubin Santro</span></p>
                                <p>In <span href="#" className="text-highlight">Contemporary</span></p>
                            </div>
                            <h5>Our interior design prediction</h5>
                            <div className="blog-text ">
                                <p className="text-secondary">Every pleasure is to be welcomed every pain avoided. in certain circumstances obligations.</p>
                                <a href="#home" className="text-decoration-none fw-bold mt-3">Read More <FontAwesomeIcon icon={faLongArrowAltRight} className="fa-lg ms-1" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;