// import axios from "axios";

// const API = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
// });

// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");
//   if (token) req.headers.Authorization = `Bearer ${token}`;
//   return req;
// });

// export default API;
// src/api/api.js
// src/api/api.js
import axios from "axios";

// Create different baseURL options for testing
const baseURL = import.meta.env.VITE_API_URL || "https://hbtechlink-backend-code.onrender.com/api";

console.log("API Base URL:", baseURL); // Add this for debugging

const API = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

API.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method.toUpperCase()} request to:`, config.url);
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor for debugging
API.interceptors.response.use(
  (response) => {
    console.log("Response received:", response.status);
    return response;
  },
  (error) => {
    console.error("API Error:", error.message);
    console.error("Full URL:", error.config?.baseURL + error.config?.url);
    console.error("Status:", error.response?.status);
    return Promise.reject(error);
  }
);

export default API;