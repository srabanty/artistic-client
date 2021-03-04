import React from 'react';

const NotMatch = () => {
    return (
        <div className="d-flex justify-content-center align-items-center mt-5 pt-5">
            <div className="bg-danger text-white p-5 rounded">
                <h2>404 Error!!!</h2>
                <h3>Route Not Found!!!</h3>
            </div>
        </div>
    );
};

export default NotMatch;