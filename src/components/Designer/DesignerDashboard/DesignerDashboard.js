import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faListAlt, faCommentDots, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faArtstation } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import CreateProfile from '../CreateProfile/CreateProfile';
import ViewAllPosts from '../ViewAllPosts/ViewAllPosts';
import './DesignerDashboard.css'
import user from '../../../images/user.png';

const DesignerDashboard = (props) => {
    const [active, setActive] = useState("Your Profile");
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleTab = (tabName) => {
        setActive(tabName);
    }
    return (
        <div className="bg-dark mb-3 text-left designerDashboard">
            {/* {console.log(loggedInUser)} */}
            <div className="container dashboard py-3">
                <div className="row">
                    <div className="col-md-4 py-3">
                        <h1 className="main-logo text-white"><Link to="/"><FontAwesomeIcon icon={faArtstation} /> Artistic</Link></h1>
                    </div>
                    <div className="col-md-8 d-flex justify-content-between py-4">
                        <h4 className="text-white text-left">{active}</h4>

                        <h4 className="text-white">Hi, {props.name} <img src={user} alt="user" className="img-fluid user-img" />
                        </h4>
                    </div>
                    <div className="row">
                        <div className="col-md-4 dashboard-nav">
                            <br />
                            <br />
                            <Link to="/dashboard" onClick={() => handleTab("Your Profile")} className={active === "Your Profile" ? "activeTab font-weight-bold  p-2" : "font-weight-bold p-2 text-white"}><FontAwesomeIcon icon={faPlusSquare} /> &nbsp;Your Profile</Link>
                            <br />
                            <Link to="/dashboard" onClick={() => handleTab("View All Posts")} className={active === "View All Posts" ? "activeTab font-weight-bold  p-2" : "font-weight-bold p-2 text-white"}><FontAwesomeIcon icon={faListAlt} /> &nbsp;View All Posts</Link>
                            <br />
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
                                active === "Your Profile" && <CreateProfile />
                            }
                            {
                                active === "View All Posts" && <ViewAllPosts />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignerDashboard;