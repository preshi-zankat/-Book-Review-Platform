import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';


export const registerUser = (data) =>
  axios.post(`${API_BASE}/users/register`, data);

export const loginUser = (data) =>
  axios.post(`${API_BASE}/users/login`, data);

export const getUserProfile = async () => {
  const token = localStorage.getItem('token'); // Ensure token is available
  if (!token) {
    throw new Error('No token found');
  }

  const response = await axios.get(`${API_BASE}/users/profile`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  return response; // Make sure the response contains the correct user data
};
