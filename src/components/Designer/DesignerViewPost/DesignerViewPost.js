import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';


const DesignerViewPost = ({ singlePost, profile }) => {
    console.log(singlePost.mainId, profile.name)
    const mainId = singlePost.mainId;
    const name = profile.name;
    const email = profile.email;
    const phone = profile.phone;
    const linkedIn = profile.linkedLink;
    const resume = profile.resume;
    const allProject = profile.allProject;
    const startDate = singlePost.startDate;
    const endDate = singlePost.endDate;

    const handleClick = (singlePost) => {

        const replyInfo = {
            applicantName: name,
            applicantEmail: email,
            applicantPhone: phone,
            linkedIn: linkedIn,
            resume: resume,
            allProject: allProject,
            mainId: mainId,
            projectTitle: singlePost.projectName,
            projectDetail: singlePost.projectDetail,
            price: singlePost.projectPrice,
            startDate: singlePost.startDate,
            endDate: singlePost.endDate,
            applied: "yes"
        }

        fetch('http://localhost:5000/postApply', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(replyInfo)
        })
        swal("Congrats!", "Your Application is submitted !", "success");
    }

    return (
        <div className="col-md-12 mb-3">
            <div style={{
                borderRadius: 10,
                borderTop: '4px solid #D0021B'
            }} className="p-3 bg-white m-2  h-100">
                <h3 className="text-danger post-title">{singlePost.projectName}</h3>
                <p><span className="text-muted fw-bold"> Posted By: </span>{singlePost.customerName} ({singlePost.customerEmail})</p>
                <p><span className="fw-bold text-secondary">Posted on:&nbsp; </span>{startDate}</p>
                <p><span className="fw-bold text-secondary">Apply Before:&nbsp;  </span>{endDate}</p>
                <hr />
                <h5>Project Description ~</h5>
                <p className="text-muted">{singlePost.projectDetail}</p>
                <h4 className="text-danger font-weight-bold">&#2547; {singlePost.projectPrice}</h4>

                <button onClick={() => handleClick(singlePost)} className="btn btn-primary fw-bold"><FontAwesomeIcon icon={faReply} /> &nbsp;Apply Now</button>
            </div>
        </div >
    );
};

export default DesignerViewPost;