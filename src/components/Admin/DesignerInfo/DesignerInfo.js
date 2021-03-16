import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faFile, faPhoneAlt, faEnvelope, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './DesignerInfo.css'

const DesignerInfo = () => {
    const [designerProfileInfo, setDesignerProfileInfo] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/allDesignersProfile`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDesignerProfileInfo(data);
            })
    }, [])
    return (
        <div className="row d-flex justify-content-center">
            {
                designerProfileInfo.length === 0 &&
                <div className="div d-flex justify-content-center text-center">
                    <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>Loading...</span>
                    <div className="spinner-grow text-danger" role="status">
                    </div>
                    <div className="spinner-grow text-warning" role="status">
                    </div>
                    <div className="spinner-grow text-info" role="status">
                    </div>
                </div>
            }
            {
                designerProfileInfo.map(designerProfileInfo =>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 my-3" key={designerProfileInfo._id}>
                        <div className="bg-white text-dark h-100 shadow py-2 px-3 rounded">
                            <h6 className="pt-3"><FontAwesomeIcon icon={faUserCircle} className="designer-quote-icon" /><strong>Name:</strong> {designerProfileInfo.name}</h6>
                            <p><FontAwesomeIcon icon={faEnvelope} className="designer-quote-icon" /> <strong>Email:</strong> {designerProfileInfo.email}</p>
                            <p><FontAwesomeIcon icon={faPhoneAlt} className="designer-quote-icon" /> <strong>Phone:</strong> {designerProfileInfo.phone}</p>
                            <p><FontAwesomeIcon icon={faLinkedin} className="designer-quote-icon" /> <strong>Linkedin Profile:</strong> <a href={designerProfileInfo.linkedLink} target="_blank">{designerProfileInfo.linkedLink}</a> </p>
                            <p className="px-1"><FontAwesomeIcon icon={faFile} className="designer-quote-icon" /> <strong>Resume Link:</strong> <a href={designerProfileInfo.resume} target="_blank">{designerProfileInfo.resume}</a></p>
                            <p className="px-1"><FontAwesomeIcon icon={faCogs} className="designer-quote-icon " /><strong>All Project Link:</strong> <a href={designerProfileInfo.allProject} target="_blank">{designerProfileInfo.allProject}</a></p>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default DesignerInfo;