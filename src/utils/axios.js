import axios from "axios";

const { REACT_APP_BASE_URL } = process.env;

const axiosInstance = axios.create({
  baseURL: REACT_APP_BASE_URL,
  withCredentials: false,
});
const accessToken = localStorage.getItem("token");

if (accessToken) {
  axiosInstance.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${accessToken}`;
}

axiosInstance.defaults.headers.common["Content-Type"] = "application/json";
axiosInstance.defaults.headers.common["Accept"] = "application/json";
axiosInstance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default axiosInstance;
