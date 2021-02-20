import React from 'react';
import './Navbar.css';
import logo from '../../images/logo.png';
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light sticky-top bg-white">
            <div class="container">
                <a class="navbar-brand" href="#">Artistic</a>
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
                        <li class="nav-item contact-br">
                            <a class="nav-link" href="#footer">CONTACT</a>
                        </li>
                        <li class="nav-item">
                            <button className="btn">LOGIN</button>
                        </li>
                        <li class="nav-item">
                            <button className="btn">Post a Project</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;