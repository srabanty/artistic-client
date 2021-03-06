import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './YourProjects.css'

const YourProjects = () => {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/customerProjectList')
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
                    <span style={{fontSize:'20px', fontWeight:'bold', color:'white'}}>Loading...</span>
                    <div className="spinner-grow text-danger" role="status">
                    </div>
                    <div className="spinner-grow text-warning" role="status">
                    </div>
                    <div className="spinner-grow text-info" role="status">
                    </div>
                </div>
            }
            {
                projectList.map(singleProject =>
                    <div className="col-md-4" key={singleProject._id}>
                        <div style={{ borderRadius: 20 }} className="p-3 bg-white m-2  h-100">
                            <div className="d-flex justify-content-between">
                                <div>
                                    {
                                        singleProject.image.img && <img src={`data:image/png;base64,${singleProject.image.img}`} className="img-fluid " alt="img" />
                                    }
                                </div>
                                {/* <button className={singleProject.status === "Pending" ? "btn btn-danger ml-auto" : singleProject.status === "On going" ? "btn btn-warning ml-auto" : "btn btn-success ml-auto"}>{singleProject.status}</button> */}
                                <p>status</p>
                            </div>
                            <div className="mt-3">
                                <h5>{singleProject.project}</h5>
                                <p className="text-muted">{singleProject.details}</p>
                                <Link to="/"><button type="button" className="btn btn-danger">View details</button></Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default YourProjects;