import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import AddPost from './components/Customer/AddPost/AddPost';
import Feedback from './components/Customer/Feedback/Feedback';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotMatch from './components/NotMatch/NotMatch';
import YourProjects from './components/Customer/YourProjects/YourProjects';
import DesignerDashboard from './components/Designer/DesignerDashboard/DesignerDashboard';
import DesignerProfile from './components/Designer/DesignerProfile/DesignerProfile';
import Admin from './components/Admin/Admin';
import ViewApplicants from './components/Customer/ViewApplicants/ViewApplicants';
import Create from './components/Create/Create';
import SinglePendingPost from './components/Admin/SinglePendingPost/SinglePendingPost';

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
            <AddPost/>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <YourProjects/>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Feedback/>
          </PrivateRoute>

          <PrivateRoute path="/dashboard">
            <DesignerProfile/>
          </PrivateRoute>

          <PrivateRoute path="/dashboard">
            <DesignerDashboard/>
          </PrivateRoute>
          
          <PrivateRoute path="/dashboard">
            <Admin/>
          </PrivateRoute>

          <Route path="/applicants/:id">
            <ViewApplicants></ViewApplicants>
          </Route>
          <Route path="/singlePendingPost/:id">
              <SinglePendingPost></SinglePendingPost>
          </Route>
          
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create">
            <Create />
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
