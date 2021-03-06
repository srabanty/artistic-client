import React, { useContext, useState } from 'react';
import './AddPost.css';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { UserContext } from '../../../App';

const AddPost = (props) => {
    const { register } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [addPostInfo, setAddPostInfo] = useState({}); //img
    const [file, setFile] = useState(null);

    const history = useHistory();

    const handleBlur = e => {
        const newInfo = { ...addPostInfo };
        newInfo[e.target.name] = e.target.value;
        setAddPostInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', props.name)
        formData.append('email', loggedInUser.email)
        formData.append('project', addPostInfo.project)
        formData.append('details', addPostInfo.details)
        formData.append('price', addPostInfo.price)

        fetch('http://localhost:5000/customerAddPost', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error)
            })
        alert('Post Successfully Added!');
        history.push(`/`);
    };

    return (
        <div className="customer-right p-3">
            <div className="w-75 mx-auto py-3">
                <form onSubmit={handleSubmit}>
                
                    <input onBlur={handleBlur} name="name" className="form-control p-2 mb-3" defaultValue={props.name} ref={register({ required: true })} placeholder="Enter Your Name" />

                    <input name="email" className="form-control p-2 mb-3" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />

                    <input onBlur={handleBlur} type="text" name="project" className="form-control p-2 mb-3" ref={register({ required: true })} placeholder="Project Name ( ex : Room interior)" />

                    <textarea onBlur={handleBlur} name="details" rows="3" className="form-control p-2 mb-3" ref={register({ required: true })} placeholder="Project Details"></textarea>

                    <input onBlur={handleBlur} name="price" className="form-control p-2 mb-3" ref={register({ required: true })} placeholder="Price Range in BDT." />

                    <input type="file" name="file" onChange={handleFileChange} className="p-1" placeholder="Upload project file" />
                    <br />
                    <br />
                    <button className="btn btn-dark py-3 px-4 ml-2" type="submit">Submit</button>
                </form>
            </div>
        </div>

    );
};

export default AddPost;