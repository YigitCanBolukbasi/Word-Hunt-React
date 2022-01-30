import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  let navigate = useNavigate();

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
          navigate("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/login");
  };

  const values = {
    loggedIn,
    setLoggedIn,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
