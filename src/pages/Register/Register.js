import React from "react";
import { useFormik, validateYupSchema } from "formik";
import { Link } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import { useNavigate } from "react-router-dom";

function Register() {
  let navigate = useNavigate();
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      axiosInstance
        .post("/api/v1/users", {
          user: {
            username: values.username,
            email: values.email,
            password: values.password,
          },
        })
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            navigate("/login");
          }
        });
    },
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 mx-auto mt-5">
          <h1>Register</h1>
          <form className="mt-5" onSubmit={handleSubmit}>
            <div class="mb-3 row">
              <label htmlFor="email" class="col-sm-2 col-form-label">
                Email
              </label>
              <div class="col-sm-10">
                <input
                  name="email"
                  readonly
                  class="form-control"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label htmlFor="userName" class="col-sm-2 col-form-label">
                Username
              </label>
              <div class="col-sm-10">
                <input
                  name="userName"
                  class="form-control"
                  value={values.userName}
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
                Do you have an account?{" "}
                <Link to="/login">
                  <span className="text-dark">Login</span>
                </Link>
              </p>
            </nav>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
