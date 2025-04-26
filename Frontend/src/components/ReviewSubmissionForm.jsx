// src/components/ReviewSubmissionForm.jsx
import React, { useState } from 'react';
import { createReview } from '../api/bookApi';
import { useAuth } from '../context/AuthContext'; // If you're using context for auth

const ReviewSubmissionForm = ({ bookId, onReviewSubmitted }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const { token } = useAuth(); // Or however you're getting the token

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Ensure the correct key is used
      if (!token) {
        throw new Error('No token found. Please log in again.');
      }
  
      const newReview = { bookId, content: comment, rating }; // Only send required fields
      await createReview(newReview, token); // Pass the token to the API call
      onReviewSubmitted(); // Refresh reviews after submission
      setComment('');
      setRating(5);
    } catch (error) {
      console.error('Error submitting review:', error.response?.data || error.message);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your review..."
        className="w-full border p-2 rounded mb-2"
      />
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="mb-2"
      >
        {[5, 4, 3, 2, 1].map((r) => (
          <option key={r} value={r}>{r} Stars</option>
        ))}
      </select>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit Review
      </button>
    </form>
  );
};

export default ReviewSubmissionForm;
