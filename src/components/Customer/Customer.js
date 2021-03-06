import React, { useContext, useState } from 'react';
import './Customer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faListAlt, faCommentDots, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faArtstation } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';
import AddPost from './AddPost/AddPost';
import Feedback from './Feedback/Feedback';
import YourProjects from './YourProjects/YourProjects';
import { UserContext } from '../../App';

const Customer = (props) => {
    console.log(props);
    const [active, setActive] = useState("Add a Project");
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleTab = (tabName) => {
        setActive(tabName);
    }
    return (
        <div className="dashboard-bg text-left">
            {/* {console.log(loggedInUser)} */}
            <div className="container customer py-3">
                <div className="row">
                    <div className="col-md-4 py-3">
                        <h1 className="main-logo text-white"><Link to="/"><FontAwesomeIcon icon={faArtstation} /> Artistic</Link></h1>
                    </div>
                    <div className="col-md-8 d-flex justify-content-between py-4">
                        <h3 className="text-white text-left">{active}</h3>
                        <h4 className="text-white p-3">{props.name}</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-4 dashboard-nav">
                            <br />
                            <br />
                            <Link to="/dashboard" onClick={() => handleTab("Add a Project")} className={active === "Add a Project" ? "activeTab font-weight-bold  p-2" : "font-weight-bold p-2 text-white"}><FontAwesomeIcon icon={faPlusSquare} /> &nbsp;Add a Project</Link>
                            <br />
                            <Link to="/dashboard" onClick={() => handleTab("Your Projects")} className={active === "Your Projects" ? "activeTab font-weight-bold  p-2" : "font-weight-bold p-2 text-white"}><FontAwesomeIcon icon={faListAlt} /> &nbsp;Your Projects</Link>
                            <br />
                            <Link to="/dashboard" onClick={() => handleTab("Give Feedback")} className={active === "Give Feedback" ? "activeTab font-weight-bold  p-2" : "font-weight-bold p-2 text-white"}><FontAwesomeIcon icon={faCommentDots} /> &nbsp;Give Feedback</Link>
                            {
                                loggedInUser.isSignedIn
                                    ?
                                    <Link to="/" onClick={() => setLoggedInUser({})}><button className="btn text-white"><FontAwesomeIcon icon={faSignOutAlt} /> &nbsp;Logout</button></Link>
                                    :
                                    <Link to="/login"><button className="btn text-white"><FontAwesomeIcon icon={faSignInAlt} /> &nbsp;Login</button></Link>
                            }
                        </div>
                        <div className="col-md-8 rounded">
                            {
                                active === "Add a Project" && <AddPost name={props.name} />
                            }
                            {
                                active === "Your Projects" && <YourProjects />
                            }
                            {
                                active === "Give Feedback" && <Feedback name={props.name} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;