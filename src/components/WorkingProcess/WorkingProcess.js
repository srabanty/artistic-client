import React from 'react';
import '../WorkingProcess/WorkingProcess.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

const WorkingProcess = () => {
    return (
        <div className="working-process-area container pt-5 my-5 text-center">
            <div className="section-title">
                <p className="mb-0 text-highlight fw-bold">TO DO GOOD DESIGN</p>
                <h2 className="mt-2 mb-5"><span className="fw-bold">OUR WORKING</span> PROCESS</h2>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-xl-4 col-lg-4 col-md-4  col-sm-12 my-5">
                    <div className="single-process shadow py-5 rounded">
                        <h2 className="text-circular">01</h2>
                        <h4 className="pt-3">Post Any Work</h4>
                        <p className="text-secondary py-3">With righteous indignation and works off <br />  beguiled demoralized charm.</p>
                        <FontAwesomeIcon icon={faClipboardList} className="fa-4x working-icon" />
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4  col-sm-12 my-5">
                    <div className="single-process shadow py-5 rounded">
                        <h2 className="text-circular">02</h2>
                        <h4 className="pt-3">Connect with a Designer</h4>
                        <p className="text-secondary py-3">Our power of choice is untrammelled <br /> and when nothing prevents.</p>
                        <FontAwesomeIcon icon={faUserCheck} className="fa-4x working-icon" />
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4  col-sm-12 my-5">
                    <div className="single-process shadow py-5 rounded">
                        <h2 className="text-circular">03</h2>
                        <h4 className="pt-3">Execution</h4>
                        <p className="text-secondary py-3">Wing to the claims of duty the obligations <br /> will frequently occur.</p>
                        <FontAwesomeIcon icon={faSeedling} className="fa-4x working-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkingProcess;