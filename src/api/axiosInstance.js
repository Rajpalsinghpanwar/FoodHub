// src/api/axiosInstance.js

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1/", // change to your backend URL
  withCredentials: true, // if using cookies
});

// ======================
// REQUEST INTERCEPTOR
// ======================
axiosInstance.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ======================
// RESPONSE INTERCEPTOR
// ======================
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // If Unauthorized
    if (error.response?.status === 401) {
      console.log("Unauthorized! Redirecting...");

      localStorage.removeItem("token");

      // Redirect to login page
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
