import {BrowserRouter as Router, Routes,Route, Redirect} from "react-router-dom";
import React from "react"; 
import SignUp from "./Screen/SignUp";
import Otp from "./Screen/OTP";
import "./index.css"
function App() {
  return (
   <Router>
   <Route exact path="/">
          <Redirect to="/signup" />
        </Route>
    <Route exact path="/signup" component={SignUp}></Route>
    <Route exact path="/otp" component={Otp}></Route>
   </Router>
  );
}

export default App;
