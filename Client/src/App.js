import {BrowserRouter as Router, Routes,Route, Redirect} from "react-router-dom";
import React from "react"; 
import SignUp from "./Screen/SignUp";
import "./index.css"
function App() {
  return (
   <Router>
   <Route exact path="/">
          <Redirect to="/signup" />
        </Route>
    <Route exact path="/signup" component={SignUp}></Route>
   </Router>
  );
}

export default App;
