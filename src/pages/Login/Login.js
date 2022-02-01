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
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white">
              <div class="card-body p-5 text-center bg-primary">
                <div class="mb-md-5 mt-md-4 pb-5">
                  <form onSubmit={handleSubmit}>
                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                    <p class="text-white-50 mb-5">
                      Please enter your email and password
                    </p>

                    <div class="form-outline form-white mb-4">
                      <input
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="typeEmailX">
                        Email
                      </label>
                    </div>

                    <div class="form-outline form-white mb-4">
                      <input
                        value={values.password}
                        onChange={handleChange}
                        type="password"
                        name="password"
                        id="typePasswordX"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="typePasswordX">
                        Password
                      </label>
                    </div>

                    <button
                      class="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Login
                    </button>
                  </form>
                </div>

                <div>
                  Don't have an account?{" "}
                  <Link to="/Register">
                    <span className="text-white-50 fw-bold">Register</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
