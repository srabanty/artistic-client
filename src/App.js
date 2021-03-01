import './App.css';
import React from "react";
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
// import Home from './components/Home/Home';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/customerDashboard">
          <Home></Home>
        </Route>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
        <Route path="/customer/addPost">
          <AddPost></AddPost>
        </Route>
        <Route path="/customer/Feedback">
          <Feedback></Feedback>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
