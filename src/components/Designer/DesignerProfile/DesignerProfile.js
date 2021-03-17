import React, { useContext, useEffect, useState } from 'react';
import './DesignerProfile.css'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faFile, faPhoneAlt, faEnvelope, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const DesignerProfile = (props) => {
    console.log(props);

    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    // to verify profile exist on database or not

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [profileExist, setProfileExist] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allDesignersProfile')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const profile = data.find(data => (data.email === loggedInUser.email));
                console.log(profile)
                setProfileExist(profile)
                // setProfileList(data);
                // console.log(profileList);
            })
    }, [])

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
                history.push("/");
                console.log(data);
                console.log('posted');
            })
    }
    return (
        <div className="customer-right p-3">
            {
                profileExist ?
                    <div>
                        <h6 className="py-2"><FontAwesomeIcon icon={faUserCircle} className="designer-quote-icon" />&nbsp;&nbsp;&nbsp;<strong>Name: </strong>{profileExist.name}</h6>
                        <p><FontAwesomeIcon icon={faEnvelope} className="designer-quote-icon" />&nbsp;&nbsp;&nbsp;<strong>Email: </strong>{profileExist.email}</p>

                        <p><FontAwesomeIcon icon={faPhoneAlt} className="designer-quote-icon" />&nbsp;&nbsp;&nbsp;<strong>Phone: </strong>{profileExist.phone}</p>

                        <p><FontAwesomeIcon icon={faCogs} className="designer-quote-icon " />&nbsp;&nbsp;<strong>All Project Link: </strong><a href={profileExist.allProject} target="_blank">{profileExist.allProject}</a></p>

                        <p><FontAwesomeIcon icon={faFile} className="designer-quote-icon" />&nbsp;&nbsp;&nbsp;&nbsp;<strong>Resume Link: </strong><a href={profileExist.resume} target="_blank">{profileExist.resume}</a></p>

                        <p><FontAwesomeIcon icon={faLinkedin} className="designer-quote-icon" />&nbsp;&nbsp;&nbsp;&nbsp;<strong>Linkedin Profile: </strong><a href={profileExist.linkedLink} target="_blank"> {profileExist.linkedLink}</a> </p>
                    </div>
                    :
                    <div className="w-75 mx-auto py-3">
                        <h4>Please create your profile with amazing Skills.</h4>
                        <br />
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input name="name" className="form-control p-2 mb-3" defaultValue={props.name} placeholder="Enter Your Name" ref={register({ required: true })} readOnly />

                            <input name="email" className="form-control p-2 mb-3" defaultValue={props.email} ref={register({ required: true })} placeholder="Your Email" readOnly />

                            <input name="phone" className="form-control p-2 mb-3" defaultValue={props.phone} ref={register({ required: true })} placeholder="Your Phone" readOnly />

                            <input name="linkedLink" className="form-control p-2 mt-2" placeholder="Enter your linked profile link: (optional)" autoComplete="off" ref={register} />
                            {errors.linkedLink && <span>This field is required</span>}
                            <br />
                            <input name="resume" className="form-control p-2 mt-2" placeholder="Enter resume drive link:" autoComplete="off" ref={register({ required: true })} />
                            {errors.resume && <span className="text-danger pb-2 mb-2">Resume link is required</span>}
                            <br />
                            <input name="allProject" className="form-control p-2 mt-2" placeholder="All projects drive link:" autoComplete="off" ref={register({ required: true })} />
                            {errors.allProject && <span className="text-danger pb-2 mb-2">Projects link is required</span>}
                            <br />

                            <input type="submit" className="btn btn-danger btn-block my-3" />
                        </form>
                    </div>
            }
        </div>
    );
};

export default DesignerProfile;