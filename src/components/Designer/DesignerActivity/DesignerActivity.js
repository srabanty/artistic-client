import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const MyActivity = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [activityPosts, seActivityPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/singlePostApply')
            .then(res => res.json())
            .then(data => {
                console.log(data[0].applicantEmail);
                console.log(loggedInUser.email)
                const activity =  (data[0].applicantEmail === loggedInUser.email);
                seActivityPosts(activity);
            })
    }, [])
    return (
        <div>
            <h1 className="text-white">My Activity</h1>
        </div>
    );
};

export default MyActivity;