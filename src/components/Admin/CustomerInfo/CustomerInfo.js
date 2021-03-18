import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const CustomerInfo = () => {
    const [isCustomer, setIsCustomer] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/customersInfo?search=' + search)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                // console.log(loggedInUser);
                const currentCustomer = data.filter(data => (data.designer === "no"));

                // console.log(currentDesigner, isDesigner)
                setIsCustomer(currentCustomer);
            })
    }, [search])


    const handleSearch = event => {
        setSearch(event.target.value);
    }
    return (
        <div className="row d-flex justify-content-center text-center">
            {
                isCustomer.length === 0 &&
                <div className="div">
                    <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>Loading...</span>
                    <div className="spinner-grow text-danger" role="status">
                    </div>
                    <div className="spinner-grow text-warning" role="status">
                    </div>
                    <div className="spinner-grow text-info" role="status">
                    </div>
                </div>
            }

            <div className="search-box">
                <input placeholder="Search Customer..." type="text" onBlur={handleSearch} className="search-bar" />
            </div>
            {
                isCustomer.map(customerInfo =>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 my-3" key={customerInfo._id}>
                        <div className="bg-white text-dark h-100 shadow py-2 rounded">
                            <h6 className="pt-3"><FontAwesomeIcon icon={faUserCircle} className="designer-quote-icon" />Name: {customerInfo.name}</h6 >
                            <p className="px-1"><FontAwesomeIcon icon={faEnvelope} className="designer-quote-icon" /> <strong>Email:</strong> {customerInfo.email}</p>
                            <p><FontAwesomeIcon icon={faPhoneAlt} className="designer-quote-icon" /> <strong>Phone:</strong> {customerInfo.phone}</p>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default CustomerInfo;