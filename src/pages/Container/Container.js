import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../Login/Login";
import Register from "../Register/Register";
import NavBar from "../../components/NavBar/NavBar";
import Dashboard from "../Dashboard/Dashboard";
import AuthContext from "../../context/AuthContext";

function Container() {
  const { loggedIn, loading, setLoading } = useContext(AuthContext);
  if (loggedIn) {
    setLoading(false);
  }

  if (loading) {
    return <div class="loader"></div>;
  }

  return (
    <div>
      <NavBar />
      <Routes>
        {loggedIn ? (
          <>
            <Route path="/" element={<Dashboard />} />
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
