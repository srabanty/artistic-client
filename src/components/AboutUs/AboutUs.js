import React from 'react';
import './AboutUs.css';
import aboutImg from '../../images/about.jpg';

const AboutUs = () => {
    return (
        <div className="aboutUs" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img className="img-fluid shadow" src={aboutImg} alt=""/>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6 about-info">
                        <h4>ABOUT US</h4>
                        <hr/>
                        <br/>
                        <h1 className="">A PLATFORM OF</h1>
                        <h2>INTERIOR DESIGN & WEDDING PLANNING</h2>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, exercitationem voluptates dolorum velit libero dignissimos corrupti? Voluptate tempora perferendis placeat.</p>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa exercitationem commodi nulla voluptatem eum placeat.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;