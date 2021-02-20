import React from 'react';
import '../RecentProject/RecentProject.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import project1 from '../../images/project-1.jpg';
import project2 from '../../images/project-2.jpg';
import project3 from '../../images/project-3.jpg';
import project4 from '../../images/project-4.jpg';
import project5 from '../../images/project-5.jpg';

const RecentProject = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };
    return (
        <div className="project-area container my-5" id="projects">
            <div className="section-title">
                <p className="mb-0 text-highlight fw-bold">PROJECTS</p>
                <h2 className="my-2"><span className="fw-bold">RECENTLY COMPLETED</span> WORKS</h2>
            </div>
            <div className="row">
                <Slider {...settings} className="py-3">
                    <div className="d-flex justify-content-center my-3 w-95 single-project">
                        <img src={project1} alt="project1" className="img-fluid" />
                        <div className="project-text">
                            <h4>Modern Design</h4>
                            <p>Office Partition Walls</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-3 w-95 single-project">
                        <img src={project2} alt="project2" className="img-fluid" />
                        <div className="project-text">
                            <h4>Wedding Decoration</h4>
                            <p>Office Partition Walls</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-3 w-95 single-project">
                        <img src={project3} alt="project3" className="img-fluid" />
                        <div className="project-text">
                            <h4>Modern Design</h4>
                            <p>Office Partition Walls</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-3 w-95 single-project">
                        <img src={project4} alt="project4" className="img-fluid" />
                        <div className="project-text">
                            <h4>Wedding Decoration</h4>
                            <p>Office Partition Walls</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-3 w-95 single-project">
                        <img src={project5} alt="project5" className="img-fluid" />
                        <div className="project-text">
                            <h4>Modern Design</h4>
                            <p>Office Partition Walls</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-3 w-95 single-project">
                        <img src={project1} alt="project1" className="img-fluid" />
                        <div className="project-text">
                            <h4>Modern Design</h4>
                            <p>Office Partition Walls</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-3 w-95 single-project">
                        <img src={project2} alt="project2" className="img-fluid" />
                        <div className="project-text">
                            <h4>Wedding Decoration</h4>
                            <p>Office Partition Walls</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-3 w-95 single-project">
                        <img src={project3} alt="project3" className="img-fluid" />
                        <div className="project-text">
                            <h4>Modern Design</h4>
                            <p>Office Partition Walls</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-3 w-95 single-project">
                        <img src={project4} alt="project4" className="img-fluid" />
                        <div className="project-text">
                            <h4>Wedding Decoration</h4>
                            <p>Office Partition Walls</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-3 w-95 single-project">
                        <img src={project5} alt="project5" className="img-fluid" />
                        <div className="project-text">
                            <h4>Modern Design</h4>
                            <p>Office Partition Walls</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-3 w-95 single-project">
                        <img src={project1} alt="project1" className="img-fluid" />
                        <div className="project-text">
                            <h4>Modern Design</h4>
                            <p>Office Partition Walls</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-3 w-95 single-project">
                        <img src={project2} alt="project2" className="img-fluid" />
                        <div className="project-text">
                            <h4>Wedding Decoration</h4>
                            <p>Office Partition Walls</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-3 w-95 single-project">
                        <img src={project3} alt="project3" className="img-fluid" />
                        <div className="project-text">
                            <h4>Modern Design</h4>
                            <p>Office Partition Walls</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default RecentProject;