import { createContext, useState, useEffect } from "react";

import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (credentials) => {
    axios
      .post("https://afternoon-atoll-54006.herokuapp.com/oauth/token", {
        grant_type: "password",
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        email: credentials.email,
        password: credentials.password,
      })
      .then(function (response) {
        if (response.status === 200) {
          setLoggedIn(true);
          localStorage.setItem("token", response.data.access_token);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const values = {
    loggedIn,
    setLoggedIn,
    handleLogin,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
