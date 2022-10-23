import {BrowserRouter as Router, Routes,Route, Redirect} from "react-router-dom";
import React from "react"; 
import SignUp from "./Screen/SignUp";
import Otp from "./Screen/OTP";
import "./index.css"
import Login from "./Screen/Login";
import Jobs from "./Screen/Jobs";
import SavedList from "./Screen/SavedList";

import JobCreation from "./Screen/JobCreation";

function App() {
  return (
   <Router>
   <Route exact path="/">
          <Redirect to="/signup" />
        </Route>
    <Route exact path="/signup" component={SignUp}></Route>
    <Route exact path="/otp" component={Otp}></Route>
    <Route exact path="/login" component={Login}></Route>
    <Route exact path="/jobs" component={Jobs}></Route>

    <Route exact path="/createnewjob" component={JobCreation}></Route>
    <Route exact path="/savedlist" component={SavedList}></Route>

   </Router>
  );
}

export default App;
