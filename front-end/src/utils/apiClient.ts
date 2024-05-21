// utils/apiClient.ts
import axios from 'axios';
import cookie from 'js-cookie'; // Import js-cookie for cookie management

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
  // Retrieve token from cookie
  const token = cookie.get('token');

  // If token exists, set it as Authorization header
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default apiClient;
