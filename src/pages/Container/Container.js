import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../Login/Login";
import Register from "../Register/Register";
import NavBar from "../../components/NavBar/NavBar";
import Translate from "../Translate/Translate";
import AuthContext from "../../context/AuthContext";

function Container() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <div>
      <NavBar />
      <Routes>
        {loggedIn ? (
          <>
            <Route path="/" element={<Translate />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default Container;
