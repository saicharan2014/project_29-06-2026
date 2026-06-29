import axios from "axios";
import { store } from "../../app/store";
// import { handleLogout } from "../../utils/logoutHandler";
let APIKit = axios.create({
  // baseURL: "http://localhost:3002/api",
  // baseURL: "https://chasmal-sightlier-hiram.ngrok-free.dev/api",
  // baseURL: "https://harmless-gator-upward.ngrok-free.app/api",
  baseURL:
    "https://dev-atlas-backend-gahsa4hkb0bjeaer.germanywestcentral-01.azurewebsites.net/api",
});

APIKit.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token || localStorage.getItem("token");

    config.headers["ngrok-skip-browser-warning"] = "12321";
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
    console.log(error);
  },
);
APIKit.interceptors.response.use(
  (response) => response,
  (error) => {
    const logout = error.response?.data?.logout;
    const isUnauthorized = error.response?.status === 401;

    if (logout || isUnauthorized) {
      //   handleLogout();
    }
    return Promise.reject(error);
  },
);

export default APIKit;
