import React, { useEffect, useState } from 'react';



const BookReviews = ({ reviews }) => {
  if (reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">User Reviews</h2>
      {reviews.map((review) => (
        <div key={review._id} className="border-b pb-2 mb-2">
          <p className="text-gray-700">{review.content}</p>
          <p className="text-sm text-gray-500">Rating: {review.rating} ★</p>
        </div>
      ))}
    </div>
  );
};

export default BookReviews;
