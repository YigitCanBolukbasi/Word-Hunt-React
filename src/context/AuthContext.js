import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axios";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getMe();
    } else {
      navigate("/login");
    }
  }, []);

  const getMe = () => {
    axiosInstance
      .get("/api/v1/users/me")
      .then((response) => {
        if (response.status === 200) {
          setLoggedIn(true);
        } else {
          localStorage.removeItem("token");
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/login");
      });
  };

  const handleLogin = async (credentials) => {
    await axiosInstance
      .post("/oauth/token", {
        grant_type: "password",
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        email: credentials.email,
        password: credentials.password,
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          setLoggedIn(true);
          let token = response.data.access_token;
          localStorage.setItem("token", token);
          axiosInstance.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${token}`;
          toast.success("Logged In Successfully!");
          navigate("/");
        } else {
          toast.error("Email and/or Password not correct.");
        }
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Email or Password not correct.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/login");
    toast.warn("Logged out");
  };

  const values = {
    loggedIn,
    setLoggedIn,
    handleLogin,
    handleLogout,
    loading,
    setLoading,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
