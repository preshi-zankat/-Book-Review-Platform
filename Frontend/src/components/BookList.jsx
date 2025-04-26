
import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';

const BookList = ({ books, filters }) => {
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    let filtered = books;

    // Apply genre filter
    if (filters.genre) {
      filtered = filtered.filter((book) => book.genre === filters.genre);
    }

    // Apply rating filter
    if (filters.rating) {
      filtered = filtered.filter((book) => book.rating >= filters.rating);
    }

    setFilteredBooks(filtered);
  }, [books, filters]);

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Book List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p>No books found based on the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default BookList;
