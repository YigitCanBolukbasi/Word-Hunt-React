import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../Login/Login";
import Register from "../Register/Register";
import NavBar from "../../components/NavBar/NavBar";

function Container() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default Container;
