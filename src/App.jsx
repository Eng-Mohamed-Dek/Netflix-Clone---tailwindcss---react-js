import React from "react";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 
          {/* <Route path="/browse" element={<Browse />} />
          <Route path="/my-list" element={<List />} />*/}
        </Routes>
      </BrowserRouter>
    </>
  );
};
