import React from 'react';
import './Banner.css';
import banner1 from '../../images/banner-1.jpg';
import banner5 from '../../images/banner-5.jpg';
import banner2 from '../../images/banner-2.jpg';

const Banner = () => {
    return (
        <div className="banner-area">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={banner2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>Assign your <span>Dream Project</span> </h1>
                            <br />
                            <h2>to the <span>BEST</span> of the Best in Town ...</h2>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={banner5} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>Assign your <span>Dream Project</span> </h1>
                            <br />
                            <h2>to the <span>BEST</span> of the Best in Town ...</h2>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={banner1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>Assign your <span>Dream Project</span></h1>
                            <br />
                            <h2>to the <span>BEST</span> of the Best in Town ...</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;