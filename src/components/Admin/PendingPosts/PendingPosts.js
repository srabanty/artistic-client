import React, { useEffect, useState } from 'react';
import AdminPendingPost from '../AdminPendingPost/AdminPendingPost';

const PendingPosts = () => {
    const [customerProjectInfo, setCustomerProjectInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getAdminAllPost')
            .then(res => res.json())
            .then(data => setCustomerProjectInfo(data))
    }, [])
    return (
        <div>
            <table className="bg-white table table-striped rounded">
                <thead>
                    <tr style={{ backgroundColor: 'rgb(253 186 151)'}}>
                        <th><br/>Name<br/><br/></th>
                        <th><br/>Email ID<br/><br/></th>
                        <th><br/>Project<br/><br/></th>
                        <th><br/>Details<br/><br/></th>
                        <th><br/>Price<br/><br/></th>
                        <th><br/>Status <br/><br/> </th>
                    </tr>
                </thead>              
                <tbody>
                    {
                        customerProjectInfo.length === 0 &&
                        <div className="div d-flex justify-content-center text-center">
                            <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>Loading...</span>
                            <div className="spinner-border text-danger" role="status">
                            </div>
                            <div className="spinner-border text-warning" role="status">
                            </div>
                            <div className="spinner-border text-info" role="status">
                            </div>
                        </div>
                    }
                    {
                        customerProjectInfo.map(customerProject =>
                            <AdminPendingPost key={customerProject._id} customerProject={customerProject}></AdminPendingPost>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default PendingPosts;