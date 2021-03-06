import React from 'react';
import './CreateProfile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArtstation } from '@fortawesome/free-brands-svg-icons'
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const CreateProfile = (props) => {
    console.log(props);

    const { register, handleSubmit, watch, errors } = useForm();
    const history = useHistory();

    const onSubmit = (data) => {
        console.log(data);
        fetch('http://localhost:5000/designerProfile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert("Created Profile successfully!");
                history.push("/designerDashboard");
                console.log(data);
                console.log('posted');
            })
    }


    return (
        <div className="createdProfile-bg">
            <div className="container createdProfile">
                <div className="row p-3 bg-white rounded-top">
                    <div className="col-md-4 py-3">
                        <h1 className="createdProfile-logo text-dark"><Link to="/"><FontAwesomeIcon icon={faArtstation} /> Artistic</Link></h1>
                    </div>
                    <div className="col-md-8 d-flex justify-content-between py-4">
                        <h3 className="text-dark text-left">Create Profile</h3>
                        <h3 className="text-dark">{props.name}</h3>
                    </div>
                </div>
                <div className="row p-3 bg-white rounded-bottom">
                    <div className="col-md-4">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div className="col-md-8">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input name="linkedLink" className="form-control p-2 mt-2" placeholder="Enter your linked profile link:" autoComplete="off" ref={register} />
                            {errors.linkedLink && <span>This field is required</span>}

                            <input name="resume" className="form-control p-2 mt-2" placeholder="Enter resume drive link:" autoComplete="off" ref={register({ required: true })} />
                            {errors.resume && <span className="text-danger pb-2 mb-2">Resume link is required</span>}

                            <input name="allProject" className="form-control p-2 mt-2" placeholder="All projects drive link:" autoComplete="off" ref={register({ required: true })} />
                            {errors.allProject && <span className="text-danger pb-2 mb-2">Projects link is required</span>}
                            <br />

                            <input type="submit" className="btn btn-danger btn-block my-3" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProfile;