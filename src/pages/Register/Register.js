import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

function Register() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
                  readonly
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
                click to <Link to="/">Login</Link>
              </p>
            </nav>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
