import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

import AuthContext from "../../context/AuthContext";

function Login() {
  const { handleLogin, setLoading, loading } = useContext(AuthContext);
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("login Submitted!");
      handleLogin(values);
      setLoading(true);
    },
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 mx-auto mt-5">
          <h1>Login</h1>
          <form className="mt-5" onSubmit={handleSubmit}>
            <div class="mb-3 row">
              <label htmlFor="email" class="col-sm-2 col-form-label">
                Email
              </label>
              <div class="col-sm-10">
                <input
                  name="email"
                  class="form-control"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label htmlFor="password" class="col-sm-2 col-form-label">
                Password
              </label>
              <div class="col-sm-10">
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <nav>
              <p className="mt-5">
                Don't have an account?{" "}
                <Link to="/Register">
                  <span className="text-dark">Register</span>
                </Link>
              </p>
            </nav>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
