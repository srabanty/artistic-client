import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faFile, faPhoneAlt, faEnvelope, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ViewApplicants = () => {
    const { id } = useParams();
    console.log(id);

    const [applicantList, setApplicantList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/postApply/' + id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setApplicantList(data);
            })
        
    }, [])

    return (
        <div className="dashboard-bg">
            <div className="container w-100 h-100">
                {
                    applicantList.length === 0 &&
                    <div className="div">
                        <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>Loading...</span>
                        <div className="spinner-grow text-danger mr-2" role="status"></div>
                        <div className="spinner-grow text-warning mr-2" role="status"></div>
                        <div className="spinner-grow text-info" role="status"></div>
                    </div>
                }

                <h3 className="text-white text-center pt-5">Total Applicants: {applicantList.length}</h3>
                {
                    applicantList.map(singleApplicant =>
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6 py-2 my-2" key={singleApplicant._id}>
                                <div style={{ borderRadius: 10 }} className="p-3 bg-white text-dark m-2 h-100">
                                    <h4>Applicant Details ~</h4>
                                    
                                    <h6><FontAwesomeIcon icon={faUserCircle} className="designer-quote-icon" style={{width:'20px'}}/><span className="fw-bold"> Name: </span><span className="text-muted">{singleApplicant.applicantName}</span></h6>
                                    
                                    <h6><FontAwesomeIcon icon={faEnvelope} className="designer-quote-icon" style={{width:'20px'}}/><span className="fw-bold"> Email: </span><span className="text-muted">{singleApplicant.applicantEmail}</span></h6>
                                    
                                    <h6><FontAwesomeIcon icon={faPhoneAlt} className="designer-quote-icon" style={{width:'20px'}}/><span className="fw-bold"> Phone: </span><span className="text-muted">{singleApplicant.applicantPhone}</span> </h6>
                                    
                                    <h6><FontAwesomeIcon icon={faLinkedin} className="designer-quote-icon" style={{width:'20px'}}/><span className="fw-bold"> Linkedin: </span><span className="text-muted"><a href={singleApplicant.linkedIn} target="_blank">{singleApplicant.linkedIn}</a></span> </h6>
                                    
                                    <h6><FontAwesomeIcon icon={faFile} className="designer-quote-icon" style={{width:'20px'}}/><span className="fw-bold"> Resume: </span><span className="text-muted"><a href={singleApplicant.resume} target="_blank">{singleApplicant.resume}</a></span> </h6>
                                    
                                    <h6><FontAwesomeIcon icon={faCogs} className="designer-quote-icon" style={{width:'20px'}}/><span className="fw-bold"> All Projects: </span><span className="text-muted"><a href={singleApplicant.allProject} target="_blank">{singleApplicant.allProject}</a></span> </h6>
                                  
                                </div>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ViewApplicants;