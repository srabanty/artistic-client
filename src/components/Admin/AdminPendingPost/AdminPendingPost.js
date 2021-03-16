import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdminPendingPost = ({ customerProject }) => {


    return (
        <tr>
            <td className="px-2" >{customerProject.name}</td>
            <td className="px-2" >{customerProject.email}</td>
            <td className="px-2" >{customerProject.project}</td>
            <td className="px-2" >{customerProject.details}</td>
            <td className="px-2" >&#2547;{customerProject.price}</td>
            <td className="px-2" >
                <Link to={`/singlePendingPost/${customerProject._id}`}><button type="button" className="btn btn-outline-danger fw-bold">View&nbsp;&nbsp;Detail</button></Link>
            </td>
        </tr>
    );
};

export default AdminPendingPost;