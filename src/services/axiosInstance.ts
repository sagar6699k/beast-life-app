import { getToken, removeToken } from "@/utils/auth";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor: attach token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor: global error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Example: if token expired or unauthorized
      if (error.response.status === 401) {
        console.log("Unauthorized! Redirect to login or refresh token");
        // Optionally remove token and redirect to login
        removeToken();
        window.location.href = "/login";
      }
    } else if (error.request) {
      console.log("No response received from server");
    } else {
      console.log("Axios error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
