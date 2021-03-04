import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArtstation } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white">
            <div className="container">
                <a className="navbar-brand" href="#"><FontAwesomeIcon icon={faArtstation} /> Artistic</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">ABOUT US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">PROJECTS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#blog">BLOG</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#footer">CONTACT</a>
                        </li>
                        <li className="nav-item contact-br">
                            <button className="btn post-btn">+ Post Project</button>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard"><button className="btn">Login</button></Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn admin-btn">Admin</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;