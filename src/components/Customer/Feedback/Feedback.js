import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { UserContext } from '../../../App';

const Feedback = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    const { project } = useParams();
    const history = useHistory();

    const onSubmit = (data) => {
        data.image = loggedInUser.photo;
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        swal("Good job!", "Review Added Successfully!", "success")
        // alert("Review Added Successfully!");

        history.push(`/`);
    }
    return (
        <div className="customer-right p-3">
            <div className="w-75 mx-auto py-3 h-100">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" className="form-control p-4" defaultValue={props.name} ref={register({ required: true })} placeholder="Your Name" readOnly />

                    <br />

                    <input name="projectName" className="form-control p-4" ref={register({ required: true })} placeholder="Project Name" />

                    <br />
                    <textarea name="projectReview" rows="3" className="form-control p-4" ref={register({ required: true })} placeholder="Project Review"></textarea>

                    <br />

                    <button className="btn btn-dark py-3 px-4 ml-2" type="submit">Submit</button>
                </form>
            </div>
        </div>

    );
};

export default Feedback;