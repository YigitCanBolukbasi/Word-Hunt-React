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
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          WordHunt
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-lg-0">
            {loggedIn && (
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={handleLogout}
                >
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
