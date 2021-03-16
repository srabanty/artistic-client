import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faListAlt, faSignOutAlt, faSignInAlt, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faArtstation } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import DesignerProfile from '../DesignerProfile/DesignerProfile';
import ViewAllPosts from '../ViewAllPosts/ViewAllPosts';
import './DesignerDashboard.css'
import user from '../../../images/user.png';
import DesignerActivity from '../DesignerActivity/DesignerActivity';

const DesignerDashboard = (props) => {
    console.log(props);
    const [active, setActive] = useState("Designer Profile");
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [profileList, setProfileList] = useState([]);

    const handleTab = (tabName) => {
        setActive(tabName);
    }
    useEffect(()=>{
        fetch('http://localhost:5000/allDesignersProfile/'+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // const profile = data.find(data => (data.email === applicantList.applicantEmail));

            setProfileList(data);
            // console.log(profileList);
        })
    },[])


    return (
        <div className=" mb-3 text-left designerDashboard">
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
                            <Link to="/dashboard" onClick={() => handleTab("Designer Profile")} className={active === "Designer Profile" ? "activeTab font-weight-bold  p-2" : "font-weight-bold p-2 text-white"}><FontAwesomeIcon icon={faUserCircle} /> &nbsp;Designer Profile</Link>
                            <br />
                            <Link to="/dashboard" onClick={() => handleTab("View All Posts")} className={active === "View All Posts" ? "activeTab font-weight-bold  p-2" : "font-weight-bold p-2 text-white"}><FontAwesomeIcon icon={faListAlt} /> &nbsp;View All Posts</Link>
                            <br />
                            <Link to="/dashboard" onClick={() => handleTab("Designer Activity")} className={active === "Designer Activity" ? "activeTab font-weight-bold  p-2" : "font-weight-bold p-2 text-white"}><FontAwesomeIcon icon={faClipboardList} /> &nbsp;Designer Activity</Link>
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
                            <br/>
                            <br/>
                            {
                                active === "Designer Profile" && <DesignerProfile name={props.name} email={props.email} phone={props.phone} />
                            }
                            {
                                active === "View All Posts" && <ViewAllPosts profile={profileList}/>
                            }
                            {
                                active === "Designer Activity" && <DesignerActivity/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignerDashboard;