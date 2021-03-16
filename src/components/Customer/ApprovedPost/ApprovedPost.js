import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const ApprovedPost = () => {
    const [approved, setApproved] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('http://localhost:5000/approvedPostList/'+loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setApproved(data);
            })
    }, [])
    return (
        <div className="row customer-project">
            {
                approved.length === 0 &&
                <div className="div">
                    <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>Loading...</span>
                    <div className="spinner-grow text-danger mr-2" role="status"></div>
                    <div className="spinner-grow text-warning mr-2" role="status"></div>
                    <div className="spinner-grow text-info" role="status"></div>
                </div>
            }
            {
                approved.map(singleApprovedProject =>
                    <div className="col-md-12 mb-3" key={singleApprovedProject._id}>
                        <div style={{ borderRadius: 20 }} className="p-3 bg-white m-2 h-100">
                            <div className="d-flex justify-content-between">
                                <div>
                                    {/* {
                                        singleProject.image.img && <img src={`data:image/png;base64,${singleProject.image.img}`} className="img-fluid " alt="img" />
                                    } */}
                                </div>
                                <h6>Approved Post</h6>
                            </div>
                            <div className="mt-3">
                                <h5>{singleApprovedProject.projectName}</h5>
                                <p className="text-muted">{singleApprovedProject.projectDetail}</p>
                                <h4 className="text-danger">&#2547;  {singleApprovedProject.projectPrice}</h4>
                                <br/>
                                <Link to={`/applicants/${singleApprovedProject.mainId}`}><button type="button" className="btn btn-outline-danger fw-bold">View&nbsp;&nbsp;Applicants</button></Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ApprovedPost;