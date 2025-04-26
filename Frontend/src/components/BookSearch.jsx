// src/components/BookSearch.jsx
import React, { useState } from 'react';

const BookSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Pass search term to parent component
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-semibold mb-4">Search Books</h3>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-lg"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default BookSearch;
