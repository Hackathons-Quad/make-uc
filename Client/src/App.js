import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import React from "react"; 
import SignUp from "./Screen/SignUp";
import "./index.css"
function App() {
  return (
   <Router>
    <Route exact path="/" component={SignUp}></Route>
   </Router>
  );
}

export default App;
