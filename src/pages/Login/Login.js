import React, { useContext } from "react";

import { useFormik } from "formik";
import { Link } from "react-router-dom";

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
    <section>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white">
              <div className="card-body p-5 text-center bg-primary">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <form onSubmit={handleSubmit}>
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your email and password
                    </p>

                    <div className="form-outline form-white mb-4">
                      <input
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="typeEmailX">
                        Email
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        value={values.password}
                        onChange={handleChange}
                        type="password"
                        name="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="typePasswordX">
                        Password
                      </label>
                    </div>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit">
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
