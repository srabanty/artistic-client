import React from 'react';
import { useParams } from 'react-router';

const ViewSinglePost = () => {
    const { id } = useParams();
    console.log(id);

    // const handleClick = (singlePost) => {

    //     const replyInfo = { 
    //         applicantName: name, 
    //         applicantEmail: email, 
    //         applicantPhone: phone, 
    //         linkedIn: linkedIn, 
    //         resume: resume, 
    //         allProject: allProject, 
    //         mainId: posts[0].mainId, 
    //         projectTitle: singlePost.project, 
    //         projectDetail: singlePost.details, 
    //         price: singlePost.price, 
    //         applied: "yes" }

    //     fetch('http://localhost:5000/postApply', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(replyInfo)
    //     })
    //     swal("Congrats!", "Your Application is submitted !", "success");
    // }
    
    return (
        <div>
            <h1>id {id}</h1>
        </div>
    );
};

export default ViewSinglePost;