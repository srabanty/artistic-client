import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import AddPost from './components/Customer/AddPost/AddPost';
import Feedback from './components/Customer/Feedback/Feedback';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotMatch from './components/NotMatch/NotMatch';
import YourProjects from './components/Customer/YourProjects/YourProjects';
import CreateProfile from './components/CreateProfile/CreateProfile';
// import Home from './components/Home/Home';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute path="/dashboard">
            <AddPost></AddPost>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <YourProjects></YourProjects>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Feedback></Feedback>
          </PrivateRoute>

          <PrivateRoute path="/createProfile">
            <CreateProfile></CreateProfile>
          </PrivateRoute>
          
          <Route path="/login">
            <Login />
          </Route>
          
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
