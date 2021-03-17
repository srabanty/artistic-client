import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import swal from 'sweetalert';
import project from '../../../images/project-1.jpg'

const SinglePendingPost = () => {
    const { id } = useParams();
    console.log(id);

    const [singlePendingPost, setSinglePendingPost] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:5000/singlePendingPost/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSinglePendingPost(data[0]);
            })
    }, [])

    const handleApprove = (() => {
        const approvePost = {
            mainId: singlePendingPost._id,
            customerName: singlePendingPost.name,
            customerEmail: singlePendingPost.email,
            projectName: singlePendingPost.project,
            projectDetail: singlePendingPost.details,
            projectPrice: singlePendingPost.price,
            startDate: singlePendingPost.startDate,
            endDate: singlePendingPost.endDate
        }

        fetch('http://localhost:5000/approvedPost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(approvePost)
        })

        history.push('/dashboard')
        swal("Congrats!", "Post is Approved !", "success");
        deletePost(id);
    })

    const deletePost = (id) => {
        fetch('http://localhost:5000/delete/' + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                // if (result) {
                //     const updateItems = singlePendingPost.filter(item => (item._id !== id));
                //     const updateItems = singlePendingPost.find(item => (item._id === id));
                //     console.log(updateItems)
                //     setSinglePendingPost(updateItems);
                // }
                console.log(result);
                setSinglePendingPost(result);
            })

        history.push('/dashboard')
    }


    return (
        <div className="dashboard-bg">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-2">
                        <Link to="/dashboard">
                            <button type="button" className="btn btn-danger">Go Back</button>
                        </Link>
                    </div>
                    <div className="col-md-8 bg-white  my-5">
                        <div style={{ borderRadius: '20px' }} className="row p-3 bg-white h-100">
                            <div className="col-md-4">
                                <img style={{ width: '130px', height: '130px', marginTop: '50px' }} src={project} alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="mt-3">
                                    <h3 className="text-danger post-title">{singlePendingPost.project}</h3>
                                    <p className="fw-bold"><span className="text-muted"> Posted By: </span>{singlePendingPost.name} ({singlePendingPost.email})</p>
                                    <hr />
                                    <h5>Project Description ~</h5>
                                    <p className="text-muted">{singlePendingPost.details}</p>
                                    <h4 className="text-danger font-weight-bold">&#2547; {singlePendingPost.price}</h4>
                                    <br />
                                </div>
                                <br />
                                <div className="text-left">
                                    <button onClick={() => handleApprove()} className="btn btn-success fw-bold">Approve</button>

                                    <button onClick={() => deletePost(id)} className="btn btn-danger fw-bold mx-4">&nbsp;Reject&nbsp;</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePendingPost;