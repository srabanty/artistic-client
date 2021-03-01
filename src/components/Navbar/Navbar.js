import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArtstation } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light sticky-top bg-white">
            <div class="container">
                <a class="navbar-brand" href="#"><FontAwesomeIcon icon={faArtstation} /> Artistic</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active ml-3" aria-current="page" href="#">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ml-3" href="#about">ABOUT US</a>
                        </li>
                        <li class="nav-item ml-3">
                            <a class="nav-link ml-3" href="#projects">PROJECTS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#blog">BLOG</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#footer">CONTACT</a>
                        </li>
                        <li class="nav-item contact-br">
                            <button className="btn post-btn">+ Post a Project</button>
                        </li>
                        <li class="nav-item">
                            <Link to="/dashboard"><button className="btn">LOGIN</button></Link>
                        </li>
                        <li class="nav-item">
                            <button className="btn admin-btn">Admin</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;