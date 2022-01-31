import React, { useContext, useState } from "react";

import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import AuthContext from "../../context/AuthContext";

function Login() {
  const { handleLogin, setLoading } = useContext(AuthContext);
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      handleLogin(values);
    },
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 col-lg-5 col-sm-5 col-5 mx-auto mt-5">
          <h1>Login</h1>
          <form className="mt-5" onSubmit={handleSubmit}>
            <div className="mb-3 row">
              <label
                htmlFor="email"
                className="col-sm-2 col-md-2 col-lg-2 col-2 col-form-label"
              >
                Email
              </label>
              <div className="col-sm-10 col-md-10 col-10 col-lg-10">
                <input
                  name="email"
                  className="form-control"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="password"
                className="col-sm-2 col-lg-2 col-md-2 col-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10 col-md-10 col-10 col-lg-10">
                <input
                  name="password"
                  type="password"
                  className="form-control"
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
