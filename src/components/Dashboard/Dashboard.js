import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Customer from '../Customer/Customer';
import DesignerDashboard from '../Designer/DesignerDashboard/DesignerDashboard';
import Admin from '../Admin/Admin';

const Dashboard = () => {
    const [isDesigner, setIsDesigner] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isCustomer,setIsCustomer] = useState([]);
    const [isAdmin, setIsAdmin] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allUsers')
            .then(res => res.json())
            .then(data => {
                // console.log(data);

                // console.log(loggedInUser);
                // setLoggedInUser(data)
                const currentDesigner = data.find(data => ((data.designer === "yes")) && (data.email === loggedInUser.email));

                const currentCustomer = data.find(data => ((data.designer === "no")) && (data.email === loggedInUser.email));

                const admin = data.find(data => ((data.designer === "admin")) && (data.email === loggedInUser.email));
                
                // console.log(currentDesigner)
                setIsDesigner(currentDesigner);
                setIsCustomer(currentCustomer);
                setIsAdmin(admin);
            })
    }, [])
    return (
        <div>
            {
                isDesigner && <DesignerDashboard name={isDesigner.name} email={isDesigner.email} phone={isDesigner.phone}/>
            }
            {
                isCustomer && <Customer name={isCustomer.name} email={isCustomer.email} phone={isCustomer.phone} />
            }
            {
                isAdmin && <Admin name={isAdmin.name} email={isAdmin.email}/>
            }
        </div>
    );
};

export default Dashboard;