import React from 'react';
import './GreatThing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore, faComments, faMoneyBillAlt, faUserClock } from '@fortawesome/free-solid-svg-icons';

const GreatThing = () => {
    return (
        <div className="greatThing">
            <div className="container">
                <h1>What's great <span>about it?</span></h1>
                <br />
                <br />
                <div className="row text-center">
                    <div className="col-md-6">
                        <div className="single-thing h-100">
                            <h2><FontAwesomeIcon className="great-icons" icon={faWindowRestore} /> &nbsp;Browse portfolios</h2>
                            <br />
                            <h4>Find professionals you can trust by browsing their samples of previous work and reading their profile Feedbacks.</h4>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-thing h-100">
                            <h2><FontAwesomeIcon className="great-icons" icon={faComments} /> &nbsp;Choose Prefered Designer</h2>
                            <br />
                            <h4>You can choose a designers to get constant updates on the progress of your work.</h4>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row text-center">
                    <div className="col-md-6">
                        <div className="single-thing h-100">
                            <h2><FontAwesomeIcon className="great-icons" icon={faMoneyBillAlt} /> &nbsp;Pay for quality</h2>
                            <br />
                            <h4>Pay for work when it has been completed and you're 100% satisfied.</h4>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-thing h-100">
                            <h2> <FontAwesomeIcon className="great-icons" icon={faUserClock} /> &nbsp;24/7 support</h2>
                            <br />
                            <h4>We're always here to help. Our support consists of real people who are available 24/7.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GreatThing;