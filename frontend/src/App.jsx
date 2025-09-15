import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    region: "ap-south-1",
    userPoolId: "ap-south-1_mxzunVpcO",
    userPoolWebClientId: "4rqcpolib1h566m62thtp12rsf",
  },
});

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
