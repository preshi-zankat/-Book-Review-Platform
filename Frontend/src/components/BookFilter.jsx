// src/components/BookFilter.jsx
import React from 'react';

const BookFilter = ({ genres, ratings, onFilterChange }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-semibold mb-4">Filter Books</h3>

      {/* Genre Filter */}
      <div className="mb-4">
        <label htmlFor="genre" className="block text-gray-700">Genre</label>
        <select
          id="genre"
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
          onChange={(e) => onFilterChange('genre', e.target.value)}
        >
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      {/* Rating Filter */}
      <div>
        <label htmlFor="rating" className="block text-gray-700">Rating</label>
        <select
          id="rating"
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
          onChange={(e) => onFilterChange('rating', e.target.value)}
        >
          <option value="">All Ratings</option>
          {ratings.map((rating) => (
            <option key={rating} value={rating}>
              {rating} Stars & Up
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default BookFilter;
