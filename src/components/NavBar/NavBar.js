import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import axiosInstance from "../../utils/axios";

function NavBar() {
  const { handleLogout, loggedIn } = useContext(AuthContext);

  function getUserMetrics() {
    axiosInstance
      .get("/api/v1/users/me")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {});
  }

  useEffect(() => {
    if (loggedIn) {
      getUserMetrics();
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-expand-md navbar-light bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          WordHunt
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-lg-0">
            {loggedIn && (
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#"
                  onClick={handleLogout}>
                  Logout
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
