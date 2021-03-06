import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom'
import './Login.css'
import swal from 'sweetalert';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArtstation } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../App';

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [designerCat, setDesignerCat] = useState("");
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        designer: '',
        photo: '',
        error: ''
    })

    const initialUser = {
        ...user,
    };
    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photo: '',
                    error: '',
                    success: false
                }
                setUser(signedOutUser);
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/dashboard" } };

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === "name") {
            isFieldValid = /^[A-Za-z]+$/;
            if (e.target.value.length < 3) {
                initialUser[`${e.target.name}`] = "";
                document.getElementById("nameError").innerText =
                    "Name must contain minimum 3 character";
                return;
            }
            if (!isFieldValid.test(e.target.value)) {
                initialUser[`${e.target.name}`] = "";
                document.getElementById("nameError").innerText =
                    "Name must be alphabet";
                return;
            }
            document.getElementById("nameError").innerText = "";
        }
        if (e.target.name === 'email') {
            isFieldValid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!isFieldValid.test(e.target.value)) {
                initialUser[`${e.target.name}`] = "";
                document.getElementById("emailError").innerText = "Enter a valid email";
                return;
            }
            document.getElementById("emailError").innerText = "";
        }
        if (e.target.name === "password") {
            isFieldValid = e.target.value.length > 5;
            if (!isFieldValid) {
                initialUser[`${e.target.name}`] = "";
                document.getElementById("passwordError").innerText =
                    "Password must contain minimum 6 character";
                return;
            }
            document.getElementById("passwordError").innerText = "";
        }
        // if (e.target.name === "phone") {
        //     isFieldValid = ((e.target.value).length === 11);

        //     if (!isFieldValid) {
        //         initialUser[`${e.target.name}`] = "";
        //         document.getElementById("phoneError").innerText =
        //             "Not a valid Phone Number";
        //         return;
        //     }
        //     document.getElementById("phoneError").innerText = "";
        // }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
            // setInput(newUserInfo);
            // setInput({ ...input, [e.target.name]: e.target.value })
        }
    }

    const handleSubmit = (e) => {

        // console.log(designerCat);
        // console.log(user.email, user.password);

        if (newUser && user.email && user.password) {
            // console.log('submitting')
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    // console.log(res, user.name, user);
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    newUserInfo.isSignedIn = true;
                    setUser(newUserInfo);

                    updateUserName(user.name);
                    const info = { name: user.name, email: user.email, password: user.password, designer: designerCat }
                    fetch('http://localhost:5000/addAllUsers', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(info)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);

                            history.replace(from);
                        })

                    swal("Welcome!", "Sign Up Successful!", "success");
                })
                .catch(error => {
                    // Handle Errors here.
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    // var errorCode = error.code;
                    // var errorMessage = error.message;
                    // console.log(errorCode, errorMessage)
                    // ...
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.name = user.name;
                    newUserInfo.designer = user.designer;
                    newUserInfo.isSignedIn = true;
                    newUserInfo.success = true;
                    console.log(user)
                    console.log(newUserInfo)

                    setUser(newUserInfo);

                    setLoggedInUser(newUserInfo);

                    history.replace(from);

                    // console.log('sign in user info', res.user)
                    swal("Welcome!", "Login Successful!", "success");

                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }
    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(function () {
            console.log('user name updated successfully!')
        }).catch(function (error) {
            console.log(error)
        });
    }
    return (
        <div className='login-section py-5'>
            <div className='container'>
                <div className='create-account-form mx-auto mt-3 row'>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="card col-md-4">
                            <div className="card-body">
                                <h1 className="card-logo text-center text-danger text-bold"><FontAwesomeIcon icon={faArtstation} /> Artistic</h1>
                                <br />
                                {newUser ? <h3 className="card-title mb-4 text-danger text-bold">Create an account</h3> : <h3 className="card-title mb-4 text-danger text-bold">Login</h3>}
                                <p>{
                                    console.log(loggedInUser.name)}</p>
                                <div className='form-group'>
                                    <form onSubmit={handleSubmit}>
                                        {newUser && <input type="text" onBlur={handleBlur} name="name" placeholder="Username" className="form-control mb-4 login-input" required />}
                                        <p className="text-danger mt-2" id="nameError"></p>

                                        <input type="text" onBlur={handleBlur} name="email" placeholder="Enter Email address" className="form-control mb-4 login-input" required />
                                        <p className="text-danger mt-2" id="emailError"></p>

                                        <input type="password" onBlur={handleBlur} name="password" placeholder="Enter Password" className="form-control mb-4 login-input" required />
                                        <p className="text-danger mt-2" id="passwordError"></p>
                                        {/* {newUser && <input type="text" onBlur={handleBlur} name="phone" placeholder="Enter Phone Number" className="form-control mb-4 login-input" required />}

                                        <p className="text-danger mt-2" id="phoneError"></p> */}

                                        {newUser && <div className="designerCat">
                                            <label htmlFor="designer">Are you a designer ?</label>
                                            <select style={{ marginLeft: '10px' }} name="designer" id="designer" onChange={(e) => setDesignerCat(e.target.value)} required>
                                                <option value="">None</option>
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                        </div>}
                                        <br />

                                        <input type='submit' className="btn btn-danger btn-block mb-3" value={newUser ? 'Sign Up' : 'Login'}></input>
                                    </form>
                                </div>

                                <p className='text-center mb-0'>
                                    {newUser ? 'Already have an account ?' : `Don't have an account ?`}
                                    <Link to={'/login'} onClick={() => setNewUser(!newUser)} className='text-danger'>
                                        {newUser ? 'Login' : 'Create an account'}
                                    </Link>
                                </p>
                                <p style={{ color: 'red' }}>{user.error}</p>
                                {
                                    user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged in '} successfully!</p>
                                }
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;