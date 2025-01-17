import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api/auth', // Replace with your backend URL if deployed
});

// Add an interceptor to include tokens in requests if needed
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const signup = (userData) => API.post('/signup', userData);
export const login = (userData) => API.post('/login', userData);
