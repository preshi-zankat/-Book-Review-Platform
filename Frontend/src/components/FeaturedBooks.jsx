// src/components/FeaturedBooks.jsx
import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import { getBooks } from '../api/bookApi';

const FeaturedBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await getBooks();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Featured Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
