import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './YourProjects.css'

const YourProjects = () => {
    const [projectList, setProjectList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('http://localhost:5000/customerProjectList/' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setProjectList(data);
            })
    }, [])
    return (
        <div className="row customer-project">
            {
                projectList.length === 0 &&
                <div className="div">
                    <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>Loading...</span>
                    <div className="spinner-grow text-danger mr-2" role="status"></div>
                    <div className="spinner-grow text-warning mr-2" role="status"></div>
                    <div className="spinner-grow text-info" role="status"></div>
                </div>
            }
            {
                projectList.map(singleProject =>
                    <div className="col-md-12 mb-3" key={singleProject._id}>
                        <div style={{ borderRadius: 20 }} className="p-3 bg-white m-2 h-100">
                            <div className="d-flex justify-content-between">
                                <div>
                                    {
                                        singleProject.image.img && <img src={`data:image/png;base64,${singleProject.image.img}`} className="img-fluid " style={{width: '130px', height: '130px'}} alt="img" />
                                    }
                                </div>
                                <div className="div">
                                    <h6>Under Review</h6>
                                    <hr/>
                                    <h6><span className="fw-bold text-secondary">Posted on:&nbsp; </span>{singleProject.startDate}</h6>
                                    <h6><span className="fw-bold text-secondary">Apply Before:&nbsp;  </span>{singleProject.endDate}</h6>
                                </div>
                            </div>
                            <div className="mt-3">
                                <h5>{singleProject.project}</h5>
                                <p className="text-muted">{singleProject.details}</p>
                                <h4 className="text-danger">&#2547;  {singleProject.price}</h4>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default YourProjects;