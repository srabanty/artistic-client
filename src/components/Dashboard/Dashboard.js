import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Customer from '../Customer/Customer';
import CreateProfile from '../CreateProfile/CreateProfile';
import './Dashboard.css';

const Dashboard = () => {
    const [isDesigner, setIsDesigner] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isCustomer,setIsCustomer] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allUsers')
            .then(res => res.json())
            .then(data => {
                console.log(data);

                console.log(loggedInUser);
                const currentDesigner = data.find(data => ((data.designer === "yes")) && (data.email === loggedInUser.email));

                const currentCustomer = data.find(data => ((data.designer === "no")) && (data.email === loggedInUser.email));
                
                console.log(currentDesigner, isDesigner)
                setIsDesigner(currentDesigner);
                setIsCustomer(currentCustomer);
            })
    }, [])
    return (
        <div>
            {
                !isDesigner ? <Customer name={isCustomer.name} /> : <CreateProfile name={isDesigner.name} />
            }
            {/* <Customer></Customer> */}
        </div>
    );
};

export default Dashboard;