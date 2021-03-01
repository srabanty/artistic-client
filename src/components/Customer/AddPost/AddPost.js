import React, { useState } from 'react';
import './AddPost.css';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router-dom';
import swal from 'sweetalert';

const AddPost = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [file, setFile] = useState(null);

    const { project } = useParams();
    const history = useHistory();

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('project', data.project);
        formData.append('details', data.details);
        formData.append('price', data.price);
        formData.append('status', "Pending");

        swal('Good Job', 'Your project added successfully!', 'success');
        // history.push(`/home`);

    //     fetch('https://creative-agency-by-sarwar.herokuapp.com/addOrder', {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    //     alert("Pst Added Successfully");
    //     history.push(`/home`);
     }

    return (
        <div className="customer-right p-3">
            <div className="w-75 mx-auto py-3 h-100"> 
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* <input name="name" className="form-control p-3" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
                {errors.name && <span className="error">Name is required</span>}
                <br />

                <input name="email" className="form-control p-3" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
                {errors.email && <span className="error">Email is required</span>}
                <br />

                <input type="text" name="project" className="form-control p-3" defaultValue={project} ref={register({ required: true })} placeholder="Project" />
                {errors.project && <span className="error">Project is required</span>}
                <br />

                <input name="details" type="text" rows="3" className="form-control p-5" ref={register({ required: true })} placeholder="Project Details" />
                {errors.details && <span className="error">Project Details is required</span>}
                <br />

                <input name="price" className="p-2" ref={register({ required: true })} placeholder="Price" />
                {errors.price && <span className="error">Price is required</span>}
                <input type="file" name="file" onChange={handleFileChange} className="p-2" placeholder="Upload project file" />
                <br />

                <button className="btn pl-5 pr-5 mt-5" type="submit" style={{ backgroundColor: "#111430", color: "white" }}>Send</button> */}

                <input name="name" className="form-control p-3" defaultValue="name" ref={register({ required: true })} placeholder="Your Name" />
                
                <br />

                <input name="email" className="form-control p-3" defaultValue="email" ref={register({ required: true })} placeholder="Your Email" />
                
                <br />

                <input type="text" name="project" className="form-control p-3" ref={register({ required: true })} placeholder="Project Name ( ex : Room interior)" />
                
                <br />

                <textarea name="details" rows="3" className="form-control p-3" ref={register({ required: true })} placeholder="Project Details"></textarea>
                {/* <input name="details" type="text" rows="3" className="form-control p-3" ref={register({ required: true })} placeholder="Project Details" /> */}
                
                <br />

                <input name="price" className="form-control p-3" ref={register({ required: true })} placeholder="Price Range" />
                <br/>

                <input type="file" name="file" onChange={handleFileChange} className="p-1" placeholder="Upload project file" />
                <br />
                <br/>
                <button className="btn btn-dark py-3 px-4 ml-2" type="submit">Submit</button>
            </form>
        </div>
        </div>
        
    );
};

export default AddPost;