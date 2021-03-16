import React, { useContext, useEffect, useState } from 'react';
import './ViewAllPosts.css';
import swal from 'sweetalert';
import { UserContext } from '../../../App';
import { Link, useHistory } from 'react-router-dom';
import DesignerViewPost from '../DesignerViewPost/DesignerViewPost';


const ViewAllPosts = (props) => {
    console.log(props.profile[0]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    

    const [posts, setAllPosts] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch('http://localhost:5000/allDesignersProfile/' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // setAllPosts(data);
                data.length === 0 ? history.push('/create') : history.push('/dashboard')
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/approvedPostList')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllPosts(data);
            })
    }, [])

    return (
        <div className="row all-project">
            {
                posts.length === 0 &&
                <div className="div">
                    <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>Loading...</span>
                    <div className="spinner-grow text-danger mr-2" role="status"></div>
                    <div className="spinner-grow text-warning mr-2" role="status"></div>
                    <div className="spinner-grow text-info" role="status"></div>
                </div>
            }
            {
                posts.map(singlePost =>

                    <DesignerViewPost key={singlePost._id} singlePost={singlePost} profile={(props.profile[0])}></DesignerViewPost>
                )
            }
        </div>
    );
};

export default ViewAllPosts;