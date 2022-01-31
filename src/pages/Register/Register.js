import React from "react";
import { useFormik, validateYupSchema } from "formik";
import { Link } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
            toast.success("Registered successfully");
          }
        })
        .catch((err) => {
          toast.error("Something went wrong");
        });
    },
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 col-lg-5 col-sm-5 col-5 mx-auto mt-5">
          <h1>Register</h1>
          <form className="mt-5" onSubmit={handleSubmit}>
            <div className="mb-3 row">
              <label
                htmlFor="email"
                class="col-sm-2 col-md-2 col-lg-2 col-2 col-form-label"
              >
                Email
              </label>
              <div className="col-sm-10 col-md-10 col-10 col-lg-10">
                <input
                  name="email"
                  readonly
                  className="form-control"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="userName"
                class="col-sm-2 col-lg-2 col-md-2 col-2 col-form-label"
              >
                Username
              </label>
              <div className="col-sm-10">
                <input
                  name="userName"
                  className="form-control"
                  value={values.userName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="password"
                class="ol-sm-2 col-lg-2 col-md-2 col-2 col-form-label"
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
