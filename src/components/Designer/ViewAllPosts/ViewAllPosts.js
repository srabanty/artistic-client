import React, { useEffect, useState } from 'react';
import './ViewAllPosts.css'

const ViewAllPosts = () => {
    const [posts, setAllPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/customerProjectList')
            .then(res => res.json())
            .then(data => {
                setAllPosts(data);
            })
    }, [])
    return (
        <div className="row all-project">
            {
                posts.length === 0 &&
                <div className="div">
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
                posts.map(singlePost =>
                    <div className="col-md-12 mb-3" key={singlePost._id}>
                        <div style={{ borderRadius: 10 }} className="p-3 bg-white m-2  h-100">
                            <div className="d-flex justify-content-between">
                                <div>
                                    {
                                        singlePost.image.img && <img className="allPost-img" src={`data:image/png;base64,${singlePost.image.img}`} alt="img" />
                                    }
                                </div>
                                {/* <button className={singleProject.status === "Pending" ? "btn btn-danger ml-auto" : singleProject.status === "On going" ? "btn btn-warning ml-auto" : "btn btn-success ml-auto"}>{singleProject.status}</button> */}
                                <p>status</p>
                            </div>
                            <div className="mt-3">
                                <h3 className="text-danger post-title">{singlePost.project}</h3>
                                <p className="text-muted">Posted By: {singlePost.name} ({singlePost.email})</p>
                                <hr />
                                <h5>Project Description ~</h5>
                                <h5 className="text-muted">{singlePost.details}</h5>
                                <h3 className="text-danger font-weight-bold">&#2547; {singlePost.price}</h3>

                            </div>
                        </div>

                    </div>
                )
            }
        </div>
    );
};

export default ViewAllPosts;