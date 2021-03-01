import React, { useState } from 'react';
import './Customer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faListAlt ,faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faArtstation } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import AddPost from './AddPost/AddPost';
import Feedback from './Feedback/Feedback';
import YourProjects from './YourProjects/YourProjects';
const Customer = () => {
    const [active, setActive] = useState("Add a Project");

    const handleTab = (tabName) => {
        setActive(tabName);
    }
    return (
        <div className="dashboard-bg text-left">
            <div className="container customer py-3">
                {/* <div className="row">
                <div className="col-md-3 dashboard-nav">
                    <h1 className="main-logo mb-4">Artistic</h1>
                    <br />
                    <Link to="/dashboard" onClick={() => handleTab("Add a Project")} className={active === "Add a Project" ? "activeTab font-weight-bold  p-2" : "font-weight-bold p-2 text-dark"}><FontAwesomeIcon icon={faPlusSquare} /> Add a Project</Link>
                    <br />
                    <br />
                    <Link to="/dashboard" onClick={() => handleTab("Feedback")} className={active === "Feedback" ? "activeTab font-weight-bold  p-2" : "font-weight-bold p-2 text-dark"}><FontAwesomeIcon icon={faCommentDots} /> Feedback</Link>
                </div>
                <div className="col-md-9 h-100">
                <div className="d-flex justify-content-between mb-4">
                    <h3 className="p-3">{active}</h3>
                    <h4 className="p-3"><span className="p-1"><img src={loggedInUser.photo} className="rounded-circle" style={{width: 32}} alt="" /></span>{loggedInUser.name}</h4>
                    <h4 className="p-3"><span className="p-1"></span>Order name</h4>
                </div>
                    <div className="customer-right h-100 p-3 rounded">
                        {
                            active === "Add a Project" && <AddPost />
                        }
                        {
                            active === "Feedback" && <Feedback />
                        }
                    </div>
                </div>
            </div> */}
                <div className="row">
                    <div className="col-md-4 dashboard-nav py-3">
                        <h1 className="main-logo"><FontAwesomeIcon icon={faArtstation} /> Artistic</h1>
                    </div>
                    <div className="col-md-8 d-flex justify-content-between py-4">
                        <h3 className="text-white text-left">{active}</h3>
                        {/* <h4 className="p-3"><span className="p-1"><img src={loggedInUser.photo} className="rounded-circle" style={{ width: 32 }} alt="" /></span>{loggedInUser.name}</h4> */}
                        <h4 className="text-white">Order name</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-4 dashboard-nav">
                            <br/>
                            <br/>
                            <Link to="/dashboard" onClick={() => handleTab("Add a Project")} className={active === "Add a Project" ? "activeTab font-weight-bold  p-2" : "font-weight-bold p-2 text-white"}><FontAwesomeIcon icon={faPlusSquare} /> &nbsp;Add a Project</Link>
                            <br />
                            <Link to="/dashboard" onClick={() => handleTab("Your Projects")} className={active === "Your Projects" ? "activeTab font-weight-bold  p-2" : "font-weight-bold p-2 text-white"}><FontAwesomeIcon icon={faListAlt} /> &nbsp;Your Projects</Link>
                            <br/>
                            <Link to="/dashboard" onClick={() => handleTab("Give Feedback")} className={active === "Give Feedback" ? "activeTab font-weight-bold  p-2" : "font-weight-bold p-2 text-white"}><FontAwesomeIcon icon={faCommentDots} /> &nbsp;Give Feedback</Link>
                        </div>
                        <div className="col-md-8 rounded">
                            {
                                active === "Add a Project" && <AddPost />
                            }
                            {
                                active === "Your Projects" && <YourProjects />
                            }
                            {
                                active === "Give Feedback" && <Feedback />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;