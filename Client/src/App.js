import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import React from "react"; 
import Signup from "../src/Components/Signup/Signup";
import Signup from "../src/Components/Error/Error";
function App() {
  return (
    <Router>
    <>
      
      <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="*" element={<Error/>}/>
      </Routes>
      </>
      </Router>
  );
}

export default App;
