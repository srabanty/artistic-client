import React from 'react';
import './YourProjects.css';
import project2 from '../../../images/project-2.jpg';

const YourProjects = () => {
    return (
        <div className="row">
            {
                <div className="col-md-6">
                    <div style={{ borderRadius: 10 }} className="p-3 bg-white m-2">
                        <div className="d-flex">
                            {/* <div>
                                {
                                    service.image.img && <img src={`data:image/png;base64,${service.image.img}`} className="w-25 img-fluid rounded-circle" alt="" />
                                }
                            </div>
                            <button className={service.status === "Pending" ? "btn btn-danger ml-auto" : service.status === "On going" ? "btn btn-warning ml-auto" : "btn btn-success ml-auto"}>{service.status}</button> */}
                            <div>
                                <img className="w-25 img-fluid rounded-circle img-thumbnail" src={project2} alt=""/>
                            </div>
                            <button className="btn">Status</button>
                        </div>
                        <div className="mt-3">
                            {/* <h5>{service.project}</h5>
                            <p className="text-muted">{service.details}</p> */}
                            <h3>Project title</h3>
                            <p className="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, aperiam?</p>
                            <a className="text-danger text-decoration-none text-bold" href="">View Detail</a>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default YourProjects;