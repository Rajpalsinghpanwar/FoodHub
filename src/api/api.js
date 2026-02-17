import axios from 'axios';

// Create an instance
const api = axios.create({
  baseURL: 'https://api.yourdomain.com',
  timeout: 900000,
  headers: { 'Content-Type': 'application/json' }
});

// --- REQUEST INTERCEPTOR ---
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      // Inject token into headers
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('🚀 Request Sent:', config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// --- RESPONSE INTERCEPTOR ---
api.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx triggers this
    console.log('✅ Response Received');
    return response;
  },
  (error) => {
    // Handle specific HTTP errors globally
    if (error.response && error.response.status === 401) {
      console.error('🚫 Unauthorized! Logging out...');
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;