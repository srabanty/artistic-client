import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router-dom';
import swal from 'sweetalert';
const Feedback = () => {
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

        swal('Good Job', 'Your project added successfully!', 'success')
    }
    return (
        <div className="customer-right p-3">
            <div className="w-75 mx-auto py-3 h-100"> 
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* <input name="name" className="form-control p-4" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
                {errors.name && <span className="error">Name is required</span>}
                <br />

                <input name="email" className="form-control p-4" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
                {errors.email && <span className="error">Email is required</span>}
                <br />

                <input type="text" name="project" className="form-control p-4" defaultValue={project} ref={register({ required: true })} placeholder="Project" />
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

                <input name="name" className="form-control p-4" defaultValue="name" ref={register({ required: true })} placeholder="Your Name" />
                
                <br />

                <textarea name="details" rows="3" className="form-control p-4" ref={register({ required: true })} placeholder="Project Details"></textarea>
                {/* <input name="details" type="text" rows="3" className="form-control p-4" ref={register({ required: true })} placeholder="Project Details" /> */}
                
                <br />

                <input name="price" className="form-control p-4" ref={register({ required: true })} placeholder="Price Range" />
            
                <br/>
                <button className="btn btn-dark py-3 px-4 ml-2" type="submit">Submit</button>
            </form>
        </div>
        </div>
        
    );
};

export default Feedback;