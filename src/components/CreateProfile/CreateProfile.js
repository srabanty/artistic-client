import React from 'react';
import './CreateProfile.css'

const CreateProfile = (props) => {
    console.log(props)
    return (
        <div>
            <h1>CreateProfile {props.name}</h1>
        </div>
    );
};

export default CreateProfile;