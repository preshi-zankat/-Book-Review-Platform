import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const getBooks = () => axios.get(`${API_BASE}/books`);
export const getBookById = (id) => axios.get(`${API_BASE}/books/${id}`);

// Reviews
export const getReviewsByBook = (bookId, token) =>
  axios.get(`${API_BASE}/reviews`, {
    headers: { Authorization: `Bearer ${token}` },
    params: { bookId }
  });

  export const createReview = async (data, token) => {
    try {
      const response = await axios.post(`${API_BASE}/reviews`, data, {
        headers: { Authorization: `Bearer ${token}` }, // Ensure the token is sent
      });
      return response;
    } catch (error) {
      console.error('Error creating review:', error.response?.data || error.message);
      throw error;
    }
  };
