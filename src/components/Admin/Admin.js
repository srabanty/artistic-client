import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faAddressCard, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faArtstation } from '@fortawesome/free-brands-svg-icons';
import bg from '../../images/bg4.jpg'
import './Admin.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import user from '../../images/user.png'
import PendingPosts from './PendingPosts/PendingPosts';
import DesignerInfo from './DesignerInfo/DesignerInfo';
import CustomerInfo from './CustomerInfo/CustomerInfo';

const Admin = (props) => {
    console.log(props);
    const [active, setActive] = useState("Pending Posts");
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleTab = (tabName) => {
        setActive(tabName);
    }
    return (
        <div className="dashboard-bg"  style={{ backgroundImage: `url(${bg})` }}>
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
                            <Link to="/dashboard" onClick={() => handleTab("Pending Posts")} className={active === "Pending Posts" ? "activeTab font-weight-bold  p-2" : "font-weight-bold p-2 text-white"}><FontAwesomeIcon icon={faPlusSquare} /> &nbsp;Pending Posts</Link>
                            <br />
                            <Link to="/dashboard" onClick={() => handleTab("Designer Info")} className={active === "Designer Info" ? "activeTab font-weight-bold  p-2" : "font-weight-bold p-2 text-white"}><FontAwesomeIcon icon={faAddressCard} /> &nbsp;Designer Info</Link>
                            <br />
                            <Link to="/dashboard" onClick={() => handleTab("Customer Info")} className={active === "Customer Info" ? "activeTab font-weight-bold  p-2" : "font-weight-bold p-2 text-white"}><FontAwesomeIcon icon={faAddressCard} /> &nbsp;Customer Info</Link>
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
                                active === "Pending Posts" && <PendingPosts/>
                            }
                            {
                                active === "Designer Info" && <DesignerInfo/>
                            }
                            {
                                active === "Customer Info" && <CustomerInfo/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;