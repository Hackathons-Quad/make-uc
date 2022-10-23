import {BrowserRouter as Router, Routes,Route, Redirect,Navigate} from "react-router-dom";
import React from "react"; 
import SignUp from "./Screen/SignUp";
import Otp from "./Screen/OTP";
import "./index.css"
import Login from "./Screen/Login";
import Jobs from "./Screen/Jobs";

import JobCreation from "./Screen/JobCreation";

function App() {
  return (
   <Router>
     <Routes>
     <Route exact path="/signup"  element={<SignUp></SignUp>}></Route>
    <Route path="/" element={<Navigate replace to="/signup" />} />
    <Route exact path="/otp" element={<Otp></Otp>}></Route>
    <Route exact path="/login" element={<Login></Login>}></Route>
    <Route exact path="/jobs" element={<Jobs></Jobs>}></Route>

    <Route exact path="/createnewjob" element={<JobCreation></JobCreation>}></Route>

     </Routes>
  
   </Router>
  );
}

export default App;
